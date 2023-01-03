<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add New Enrollment Data
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" @click="saveSection()">
                <v-icon>mdi-floppy</v-icon> Save
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-select outlined densex filledx label="Grade & Section"
                v-model="form.section"
                :items="sections"
                item-value="id"
                return-object
                hint="Only the sections with a class adviser are selectable"
                persistent-hint
            >
                <template slot="item" slot-scope="data">
                    {{ data.item.grade }} - {{ data.item.section }}
                </template>
                <template slot="selection" slot-scope="data">
                    {{ data.item.grade }} - {{ data.item.section }}
                </template>
            </v-select>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                section: null
            },
        };
    },

    computed: {
        sections() {
            return this.AdminSectionsStore.state.sections.filter(e=>{
                return e.adviser_id != null;
            });
        }
    },

    methods: {
        async saveSection() {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/sections/saveSection`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,2000,'success');
                this.resetForm(this.form);
                this.AdminSectionsStore.getSections();
            }).catch(e=>{
                if(e.response) {
                    this.AppStore.toast(e.response.data,3000,'error');
                }
            })
            ;
        },

        resetForm(obj) {
            let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
            setAll(obj, "");
        }
    },

    created() {

    }
};
</script>
