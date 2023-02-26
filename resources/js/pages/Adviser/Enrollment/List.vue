<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline font-weight-bold">
                Students
                <v-chip small color="accent">
                    {{ AdminSYStore.state.activeSY }}
                </v-chip>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-select outlined label="Gender"
                v-model="gender"
                :items="['All','Male','Female']"
                dense rounded hide-details=""
                style="max-width:200px;"
            >
                <!-- <template slot="item" slot-scope="data">
                    {{ data.item.grade }} - {{ data.item.section }}
                </template>
                <template slot="selection" slot-scope="data">
                    {{ data.item.grade }} - {{ data.item.section }}
                </template> -->
            </v-select>

            <v-text-field
                class="ml-2"
                placeholder="Search"
                style="max-width:250px;"
                clearable
                hide-details
                solo-inverted
                rounded
                dense
                flat
                v-model="searchKey"
            ></v-text-field>

            <!-- <v-btn icon dense class="ml-2" @click="refresh()" title="Refresh">
                <v-icon>mdi-refresh</v-icon>
            </v-btn> -->
        </v-app-bar>

        <v-data-table
            :headers="tblHeaders"
            :items="sectionStudents"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn iconx dense text color="primary" title="View"
                    @click.stop="
                        viewDialog(
                            item.id,
                            `${item.firstname} ${item.middlename} ${item.lastname}`
                        )
                    "
                >
                    <v-icon>mdi-eye</v-icon> View
                </v-btn>

            </template>
        </v-data-table>

        <v-dialog v-model="AdviserEnrollmentStore.state.viewDialog" max-width="80%">
            <ViewDialog :key="AdviserEnrollmentStore.state.selectedELID"></ViewDialog>
        </v-dialog>
    </div>
</template>

<script>
export default {
    components: {
        ViewDialog: () => import('./ViewSG.vue')
    },

    data() {
        return {
            searchKey: "",
            tblHeaders: [
                { text: "LRN", value: "lrn" },
                { text: "First Name", value: "firstname" },
                { text: "Middle Name", value: "middlename" },
                { text: "Last Name", value: "lastname" },
                { text: "Gender", value: "gender" },
                // { text: "Final Remarks", value: "final_remarks" },
                { text: "Actions", value: "actions" },
            ],
            gender: 'All',
        };
    },

    methods:{
        viewDialog(enrollment_line_id, studentName) {
            this.AdviserEnrollmentStore.state.selectedELID=enrollment_line_id;
            this.AdviserEnrollmentStore.state.studentName=studentName;
            this.AdviserEnrollmentStore.state.viewDialog=true;
        }
    },

    computed: {
        sectionStudents() {
            try {
                if(this.gender=='All') {
                    return this.AdviserEnrollmentStore.state.sectionStudents;
                } else {
                    return this.AdviserEnrollmentStore.state.sectionStudents.filter(e=>{
                        return e.gender==this.gender;
                    });
                }
            } catch (error) {
                console.error(error);
                return [];
            }
        }
    },

    created(){

    }
};
</script>
