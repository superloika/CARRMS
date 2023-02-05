<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline">
                <!-- Students List -->
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
            :items="AdminStudentsStore.state.students"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.is_enrolled`]="{item}">
                <span>
                    <v-icon small color="success" v-if="item.is_enrolled==1">
                        mdi-check
                    </v-icon>
                </span>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <v-btn icon dense color="primary" title="Details" @click="details(item.id)">
                    <v-icon>mdi-eye</v-icon>
                </v-btn>
                <!-- <v-btn icon dense color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn> -->
                <v-btn icon dense color="error" title="Delete" @click="deleteStudent(item.id)"
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
                { text: "LRN", value: "lrn" },
                { text: "First Name", value: "firstname" },
                { text: "Middle Name", value: "middlename" },
                { text: "Last Name", value: "lastname" },
                { text: "Ext. Name", value: "extname" },
                { text: "Gender", value: "gender" },
                { text: "Address", value: "address" },
                { text: "Is Enrolled", value: "is_enrolled" },
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

        details(student_id) {
            this.AdminStudentsStore.state.studentDetailsID = student_id;
            this.AdminStudentsStore.state.tabsMain= 3;
        }
    },

    created(){
        this.AdminStudentsStore.getStudents();
    }
};
</script>
