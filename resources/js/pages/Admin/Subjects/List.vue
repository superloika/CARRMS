<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline font-weight-bold">
                Subject List
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-select
                hide-details
                dense
                outlined
                rounded
                placeholder="Grade Level"
                clearable
                class="ml-2"
                style="max-width:200px;"
                :items="AppStore.state.gradeLevels"
                v-model="gradeLevel"
                item-text="grade"
                item-value="grade"
            >
            </v-select> -->
            <v-text-field
                class="ml-2"
                placeholder="Search"
                style="max-width:200px;"
                clearable
                hide-details
                solo-inverted
                rounded
                dense
                flat
                v-model="searchKey"
            ></v-text-field>
        </v-app-bar>

        <v-data-table
            :headers="tblHeaders"
            :items="subjects"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn icon color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon color="error" title="Delete" @click="deleteSubject(item.id)"
                    v-if="AppStore.isSuperAdmin()"
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchKey: "",
            tblHeaders: [
                { text: "Subject Code", value: "subject_code" },
                { text: "Subject Name", value: "subject_name" },
                { text: "Subject Description", value: "subject_description" },
                { text: "Subject Type", value: "subject_type" },
                { text: "Actions", value: "actions" },
            ],
            gradeLevel: '',
        };
    },

    methods:{
        async deleteSubject(id) {
            if(confirm('Are you sure you want to delete the selected subject?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/subjects/deleteSubject`,
                    {
                        id: id
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,3000,'success');
                    this.AdminSubjectsStore.getSubjects();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },
    },

    computed: {
        subjects() {
            // if(this.gradeLevel=='' || this.gradeLevel==null) {
            //     return this.AdminSubjectsStore.state.subjects;
            // } else {
            //     try {
            //         return this.AdminSubjectsStore.state.subjects.filter(e=>{
            //             return e.grade==this.gradeLevel
            //         })
            //     } catch (error) {
            //         return [];
            //     }
            // }
            return this.AdminSubjectsStore.state.subjects;
        }
    },

    created(){
        this.AdminSubjectsStore.getSubjects();
    }
};
</script>
