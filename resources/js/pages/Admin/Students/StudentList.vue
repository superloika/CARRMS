<template>
    <div>
        <v-app-bar dense>
            <v-toolbar-title class="text-overline">
                Students List
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                class="mx-1"
                placeholder="Search"
                style="max-width:200px;"
                clearable
                hide-details
                solo-inverted
                dense
                v-model="studentListSearchKey"
            ></v-text-field>
        </v-app-bar>

        <v-data-table
            :headers="tblHeaders"
            :items="AdminStudentsStore.state.students"
            class="elevation-1"
            pagination.sync="pagination"
            :search="studentListSearchKey"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn icon dense color="primary" title="View More Details" disabled>
                    <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn icon dense color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon dense color="error" title="Delete" @click="deleteStudent(item.id)">
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
            studentListSearchKey: "",
            tblHeaders: [
                { text: "First Name", value: "firstname" },
                { text: "Middle Name", value: "middlename" },
                { text: "Last Name", value: "lastname" },
                { text: "Ext. Name", value: "extname" },
                { text: "Gender", value: "gender" },
                { text: "Address", value: "address" },
                { text: "Actions", value: "actions" },
            ],
        };
    },

    methods:{
        async deleteStudent(studentID) {
            if(confirm('Are you sure you want to delete the selected student?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/students/deleteStudent`,
                    {
                        id: studentID
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,3000,'success');
                    this.AdminStudentsStore.getStudents();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },
    },

    created(){
        this.AdminStudentsStore.getStudents();
    }
};
</script>
