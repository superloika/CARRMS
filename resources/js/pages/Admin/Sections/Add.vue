<template>
    <div>
        <v-app-bar dense>
            <v-toolbar-title class="text-overline primary--text">
                Add Section
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense icon color="primary" @click="saveSection()">
                <v-icon>mdi-floppy</v-icon>
            </v-btn>
        </v-app-bar>

        <v-container>
            <v-select outlined dense filled label="Grade"
                :items="AppStore.state.gradeLevels" v-model="form.grade"></v-select>
            <v-text-field
                label="Section Name"
                v-model="form.section"
                outlined dense filled
            ></v-text-field>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                section: '',
                grade: ''
            },
        };
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
    }
};
</script>
