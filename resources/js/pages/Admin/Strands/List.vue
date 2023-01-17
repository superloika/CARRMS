<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline font-weight-bold">
                Strand List
            </v-toolbar-title>
            <v-spacer></v-spacer>
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
            :items="strands"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn icon color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon color="error" title="Delete" @click="deleteStrand(item.id)"
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
                { text: "Strand Name", value: "strand_name" },
                { text: "Strand Description", value: "strand_description" },
                { text: "Actions", value: "actions" },
            ],
        };
    },

    methods:{
        async deleteStrand(id) {
            if(confirm('Are you sure you want to delete the selected strand?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/strands/deleteStrand`,
                    {
                        id: id
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,3000,'success');
                    this.AdminStrandsStore.getStrands();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },
    },

    computed: {
        strands() {
            return this.AdminStrandsStore.state.strands;
        }
    },

    created(){
        this.AdminStrandsStore.getStrands();
    }
};
</script>
