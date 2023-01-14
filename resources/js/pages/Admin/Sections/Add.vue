<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add Section
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" @click="saveSection()">
                <v-icon>mdi-floppy</v-icon> Save
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-row>
                <v-col md="6">
                    <v-select outlined densex filledx label="Grade"
                        :items="AppStore.state.gradeLevels"
                        item-text="grade"
                        item-value="grade"
                        v-model="form.grade"
                    >
                    </v-select>
                </v-col>
                <v-col md="6">
                    <v-text-field
                        label="Section Name"
                        v-model="form.section"
                        outlined densex filledx
                    ></v-text-field>
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
                this.AppStore.resetForm(this.form);
                this.AdminSectionsStore.getSections();
            }).catch(e=>{
                if(e.response) {
                    console.log(e.response);
                    this.AppStore.toast(e.response.data,3000,'error');
                }
            })
            ;
        },

        // resetForm(obj) {
        //     let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
        //     setAll(obj, "");
        // }
    }
};
</script>
