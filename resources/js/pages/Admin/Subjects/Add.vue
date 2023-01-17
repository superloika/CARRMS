<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add Subject
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" @click="saveSubject()">
                <v-icon>mdi-floppy</v-icon> Save
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-row>


                <v-col cols="12" md="12">
                    <v-text-field
                        label="Subject Code"
                        v-model="form.subject_code"
                        outlined densex
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field
                        label="Subject Name"
                        v-model="form.subject_name"
                        outlined densex
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field
                        label="Subject Description"
                        v-model="form.subject_description"
                        outlined densex
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                    <v-select outlined densex label="Subject Type"
                        :items="['','Core','Applied','Specialized']"
                        v-model="form.subject_type"
                        hint="(Core, Applied, Specialized) Applicable in Senior High Subjects"
                        persistent-hint
                    >
                    </v-select>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
export default {
    data() {
        return {
            form: {
                subject_code: '',
                subject_name: '',
                subject_description: '',
                subject_type: '',
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
                    console.log(e.response);
                    this.AppStore.toast("An error has occured",3000,'error');
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
