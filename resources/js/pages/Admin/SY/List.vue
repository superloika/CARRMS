<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline">
                School Years
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
            :items="AdminSYStore.state.sy"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.status`]="{item}">
                <v-chip small color="primary" v-if="item.status==1">Active</v-chip>
                <v-chip small color="warning" v-else-if="item.status==0">Inactive</v-chip>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <!-- <v-btn icon dense color="primary" title="Activate"
                    @click="toggleSY(item.id, 1)" :disabled="item.status==1">
                    <v-icon>mdi-check</v-icon>
                </v-btn> -->
                <!-- <v-btn icon dense color="warning" title="Deactivate"
                    @click="toggleSY(item.id, 0)" :disabled="item.status==0">
                    <v-icon>mdi-close</v-icon>
                </v-btn> -->
                <v-btn icon dense color="error" title="Delete"
                    @click="deleteSY(item.id)"
                    :disabled="!AppStore.isSuperAdmin()"
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
                { text: "School Year", value: "sy" },
                { text: "Status", value: "status" },
                { text: "Actions", value: "actions" },
            ],
        };
    },

    methods:{
        async deleteSY(sy_id) {
            if(confirm('Are you sure you want to delete the selected school year?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/sy/deleteSY`,
                    {
                        id: sy_id
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,3000,'success');
                    this.AdminSYStore.getSYs();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },

        async toggleSY(id, status) {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/sy/toggleSY`,
                {
                    id: id,
                    status: status
                }
            ).then(e=>{
                this.AppStore.toast(e.data,3000,'success');
                this.AdminSYStore.getSYs();
                this.AdminSYStore.activeSY();
            }).catch(e=>{
                this.AppStore.toast(e,3000,'error');
            })
            ;
        },
    },

    created(){
        this.AdminSYStore.getSYs();
    }
};
</script>
