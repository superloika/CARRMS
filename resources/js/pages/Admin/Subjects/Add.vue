<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add Subject
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense icon color="primary" @click="saveSubject()">
                <v-icon>mdi-floppy</v-icon>
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-text-field
                label="Subject Name"
                v-model="form.subject_name"
                outlined densex
            ></v-text-field>
            <v-text-field
                label="Subject Description"
                v-model="form.subject_description"
                outlined densex
            ></v-text-field>
            <v-select outlined densex label="Grade"
                :items="AppStore.state.gradeLevels" v-model="form.grade"></v-select>
        </v-container>
    </div>
</template>


<script>
export default {
    data() {
        return {
            form: {
                subject_name: '',
                subject_description: '',
                grade: ''
            },
        };
    },

    methods: {
        async saveSubject() {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/subjects/saveSubject`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,2000,'success');
                this.resetForm(this.form);
                this.AdminSubjectsStore.getSubjects();
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
