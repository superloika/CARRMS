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
            <v-select outlined label="Grade & Section"
                v-model="selectedSection"
                :items="sections"
                item-value="id"
                return-object
                dense rounded hide-details=""
                v-on:change="onChangeGradeSection"
                style="max-width:300px;"
            >
                <template slot="item" slot-scope="data">
                    {{ data.item.grade }} - {{ data.item.section }}
                </template>
                <template slot="selection" slot-scope="data">
                    {{ data.item.grade }} - {{ data.item.section }}
                </template>
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
            <v-btn icon dense class="ml-2" @click="refresh()" title="Refresh">
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
        </v-app-bar>

        <v-data-table
            :headers="tblHeaders"
            :items="AdminEnrollmentStore.state.studentsEnrolled"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.adviser_name`]="{item}">
                {{ item.adviser_firstname }} {{ item.adviser_middlename }} {{ item.adviser_lastname }}
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <v-btn iconx small text color="primary" title="View"
                    @click.stop="
                        viewDialog(
                            item.enrollment_line_id,
                            `${item.student_firstname} ${item.student_middlename} ${item.student_lastname}`
                        )
                    "
                >
                    <v-icon>mdi-eye</v-icon> View
                </v-btn>

                <v-btn icon color="error" title="Delete"
                    @click="deleteEnrollment(item.enrollment_line_id,item.student_id)"
                    v-if="AppStore.isSuperAdmin()"
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="AdminEnrollmentStore.state.viewDialog" max-width="80%">
            <ViewDialog :key="AdminEnrollmentStore.state.selectedELID"></ViewDialog>
        </v-dialog>
    </div>
</template>

<script>
export default {
    components: {
        // ViewDialog: () => import('../../Adviser/Enrollment/View.vue'),
        ViewDialog: () => import('./ViewSG.vue'),
    },

    data() {
        return {
            searchKey: "",
            tblHeaders: [
                { text: "LRN", value: "student_lrn" },
                { text: "First Name", value: "student_firstname" },
                { text: "Middle Name", value: "student_middlename" },
                { text: "Last Name", value: "student_lastname" },
                // { text: "Ext. Name", value: "student_extname" },
                { text: "Gender", value: "student_gender" },
                { text: "Grade", value: "grade" },
                { text: "Section", value: "section" },
                { text: "Adviser", value: "adviser_name" },
                // { text: "Final Remarks", value: "final_remarks" },
                { text: "Actions", value: "actions" },
            ],
            selectedSection: null,
        };
    },

    methods:{
        onChangeGradeSection() {
            try {
                this.AdminEnrollmentStore.getStudentsEnrolled(
                    this.AdminSYStore.state.activeSYid,
                    this.selectedSection.id,
                    this.level
                );
            } catch (error) {

            }
        },

        refresh() {
            this.selectedSection='';
            this.onChangeGradeSection();
            this.searchKey="";
        },

        // async deleteEnrollment(head_id,student_id) {
        async deleteEnrollment(enrollment_line_id, student_id) {
            if(confirm('Are you sure you want to delete the selected enrollment data?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/enrollment/deleteEnrollment`,
                    {
                        // head_id: head_id,
                        student_id: student_id,
                        enrollment_line_id: enrollment_line_id,
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,2000,'success');
                    this.onChangeGradeSection();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },

        viewDialog(enrollment_line_id, studentName) {
            this.AdminEnrollmentStore.state.selectedELID=enrollment_line_id;
            this.AdminEnrollmentStore.state.studentName = studentName;
            this.AdminEnrollmentStore.state.viewDialog=true;
            this.AdviserEnrollmentStore.sectionDetails = {};
        }
    },

    computed: {
        sections() {
            return this.AdminSectionsStore.state.sections.filter(e=>{
                return e.adviser_id != null && e.level==this.level;
            });
        },
        level() {
            return this.$route.meta.level;
        },
    },

    watch: {
        level() {
            this.refresh();
        }
    },

    created(){
        this.refresh();
    }
};
</script>
