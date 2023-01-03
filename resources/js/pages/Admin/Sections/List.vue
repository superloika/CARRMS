<template>
    <div>
        <v-app-bar dense>
            <v-toolbar-title class="text-overline font-weight-bold">
                Sections List
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
            :items="AdminSectionsStore.state.sections"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
            group-by="level"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn small color="primary" title="Assign Adviser">
                    <v-icon>mdi-account</v-icon> Assign Class Adviser
                </v-btn>
                <v-btn small color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon> Edit
                </v-btn>
                <v-btn small color="error" title="Delete" @click="deleteSection(item.id)">
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
                { text: "Grade", value: "grade" },
                { text: "Section Name", value: "section" },
                { text: "Level", value: "level" },
                { text: "Actions", value: "actions" },
            ],
        };
    },

    methods:{
        async deleteSection(id) {
            if(confirm('Are you sure you want to delete the selected section?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/sections/deleteSection`,
                    {
                        id: id
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,3000,'success');
                    this.AdminSectionsStore.getSections();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },
    },

    created(){
        this.AdminSectionsStore.getSections();
    }
};
</script>
