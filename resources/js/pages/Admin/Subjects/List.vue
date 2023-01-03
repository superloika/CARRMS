<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline font-weight-bold">
                Subject List
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                class=""
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
            :items="AdminSubjectsStore.state.subjects"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
            group-by="grade"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn small color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon> Edit
                </v-btn>
                <v-btn small color="error" title="Delete" @click="deleteSubject(item.id)">
                    <v-icon>mdi-delete</v-icon> Delete
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
                { text: "Subject Name", value: "subject_name" },
                { text: "Subject Description", value: "subject_description" },
                { text: "Grade", value: "grade" },
                { text: "Actions", value: "actions" },
            ],
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

    created(){
        this.AdminSubjectsStore.getSubjects();
    }
};
</script>
