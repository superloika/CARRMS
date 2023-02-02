<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline font-weight-bold">
                <!-- Subject Taggings -->
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-select outlined dense hide-details rounded
                label="Level"
                :items="AppStore.state.levels"
                v-model="filterLevel"
                style="max-width:200px;"
                class="ml-2"
            >
            </v-select>

            <v-select outlined dense hide-details rounded
                label="Grade"
                :items="gradeLevels"
                v-model="filterGrade"
                item-text="grade"
                item-value="grade"
                style="max-width:200px;"
                class="ml-2"
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
            :items="subtags"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn icon color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon color="error" title="Delete" @click="deleteSubtag(item.id)"
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
                { text: "Subject", value: "subject_name" },
                { text: "Subject Type", value: "subject_type" },
                { text: "Grade", value: "grade" },
                { text: "Level", value: "level" },
                { text: "Strand", value: "strand_name" },
                { text: "Semester", value: "sem" },
                { text: "Actions", value: "actions" },
            ],

            filterLevel: '',
            filterGrade: '',
        };
    },

    methods:{
        async deleteSubtag(id) {
            if(confirm('Are you sure you want to delete the selected subject tagging?')){
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/subtags/deleteSubtag`,
                    {
                        id: id
                    }
                ).then(e=>{
                    this.AppStore.toast(e.data,3000,'success');
                    this.AdminSubtagsStore.getSubtags();
                }).catch(e=>{
                    this.AppStore.toast(e,3000,'error');
                })
                ;
            }
        },
    },

    computed: {
        gradeLevels() {
            if(this.filterLevel!='') {
                return this.AppStore.state.gradeLevels.filter(e=>{
                    return e.level==this.filterLevel;
                })
            } else {
                return [];
            }
        },

        subtags() {
            try {
                let a = this.AdminSubtagsStore.state.subtags;
                if(this.filterLevel!='') {
                    a = a.filter(e=>{
                        return e.level==this.filterLevel;
                    });
                }
                if(this.filterGrade!='') {
                    a = a.filter(e=>{
                        return e.grade==this.filterGrade;
                    });
                }
                return a;
            } catch (error) {
                console.error(error);
                return [];
            }
        }
    },

    created(){
        this.AdminSubtagsStore.getSubtags();
    },

    watch: {
        filterLevel() {
            this.filterGrade = '';
        }
    }
};
</script>
