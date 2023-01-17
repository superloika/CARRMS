<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline font-weight-bold">
                Sections List
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-select
                hide-details
                dense
                outlined
                rounded
                placeholder="Level"
                clearable
                class="ml-2"
                style="max-width:300px;"
                :items="AppStore.state.levels"
                v-model="level"
            >

            </v-select>
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
            :items="sections"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.adviser_name`]="{item}">
                <span>{{ item.firstname }} {{ item.middlename }} {{ item.lastname }}</span>
            </template>
            <template v-slot:[`item.adviser`]="{item}">
                <v-select
                    dense
                    clearable
                    hide-details
                    outlined
                    :items="AdminAdvisersStore.state.advisers"
                    item-value="id"
                    v-model="item.adviser_id"
                    v-on:input="updateAdviser(item.id, item.adviser_id)"
                >
                    <template slot="selection" slot-scope="data">
                        {{ data.item.firstname }} {{ data.item.middlename }} {{ data.item.lastname }}
                    </template>
                    <template slot="item" slot-scope="data">
                        {{ data.item.firstname }} {{ data.item.middlename }} {{ data.item.lastname }}
                    </template>
                </v-select>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <!-- <v-btn small color="primary" title="Edit">
                    <v-icon>mdi-account</v-icon> Set Adviser
                </v-btn> -->
                <v-btn icon color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon color="error" title="Delete"
                    @click="deleteSection(item.id)"
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
                { text: "Grade", value: "grade" },
                { text: "Section Name", value: "section" },
                { text: "Level", value: "level" },
                // { text: "Class Adviser", value: "adviser_name" },
                { text: "Class Adviser", value: "adviser" },
                { text: "Actions", value: "actions" },
            ],
            level: "",
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
        async updateAdviser(section_id, adviser_id) {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/sections/updateAdviser`,
                { section_id: section_id, adviser_id: adviser_id }
            ).then(e=>{
                this.AppStore.toast(e.data,3000,'success');
                // this.AdminSectionsStore.getSections();
            }).catch(e=>{
                this.AppStore.toast(e,3000,'error');
            })
            ;
        }
    },

    computed: {
        sections() {
            if(this.level=='' || this.level==null) {
                return this.AdminSectionsStore.state.sections;
            } else {
                try {
                    return this.AdminSectionsStore.state.sections.filter(e=>{
                        return e.level==this.level
                    })
                } catch (error) {
                    return [];
                }
            }
        }
    },

    created(){
        this.AdminSectionsStore.getSections();
        this.AdminAdvisersStore.getAdvisers();
    }
};
</script>
