<template>
    <div>
        <v-app-bar dense>
            <v-toolbar-title class="text-overline">
                Advisers List
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                class=""
                placeholder="Search"
                style="max-width:200px;"
                clearable
                hide-details
                solo-inverted
                dense
                v-model="searchKey"
            ></v-text-field>
        </v-app-bar>

        <v-data-table
            :headers="tblHeaders"
            :items="AdminAdvisersStore.state.advisers"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.status`]="{item}">
                <v-chip small color="success" v-if="item.status=='active'">{{ item.status }}</v-chip>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <v-btn icon dense color="primary" title="View More Details" disabled>
                    <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn icon dense color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon dense color="error" title="Delete" @click="deleteAdviser(item.id)">
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
                { text: "First Name", value: "firstname" },
                { text: "Middle Name", value: "middlename" },
                { text: "Last Name", value: "lastname" },
                { text: "Gender", value: "gender" },
                { text: "Address", value: "address" },
                { text: "Status", value: "status" },
                { text: "Actions", value: "actions" },
            ],
        };
    },

    methods:{
        async deleteAdviser(id) {
            if(confirm('Are you sure you want to delete the selected adviser?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/advisers/deleteAdviser`,
                    {
                        id: id
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,3000,'success');
                    this.AdminAdvisersStore.getAdvisers();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },
    },

    created(){
        this.AdminAdvisersStore.getAdvisers();
    }
};
</script>
