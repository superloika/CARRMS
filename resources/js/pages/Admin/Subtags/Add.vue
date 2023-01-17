<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add Subject Tagging
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" @click="saveSubtag()">
                <v-icon>mdi-floppy</v-icon> Save
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-row>
                <v-col cols="12" md="4">
                    <v-select outlined densex filledx label="Grade"
                        :items="AppStore.state.gradeLevels"
                        item-text="grade"
                        item-value="grade"
                        v-model="form.grade"
                    >
                    </v-select>
                </v-col>
                <v-col cols="12" md="8">
                    <v-combobox outlined densex filledx label="Subject"
                        :items="AdminSubjectsStore.state.subjects"
                        v-model="form.subject_id"
                    >
                        <template v-slot:selection="{ item }">
                            {{item.subject_name}}
                        </template>
                        <template v-slot:item="{ on, item }">
                            <v-list-item v-on="on">
                                {{item.subject_name}}
                            </v-list-item>
                        </template>
                    </v-combobox>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select outlined densex filledx label="Strand"
                        :items="AdminStrandsStore.state.strands"
                        item-text="strand_name"
                        item-value="id"
                        v-model="form.strand_id"
                        v-if="form.level=='Senior High'"
                    >
                    </v-select>
                </v-col>
                <v-col cols="12" md="4">
                    <v-select outlined densex filledx label="Semester"
                        :items="[1,2]"
                        v-model="form.sem"
                        v-if="form.level=='Senior High'"
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
                grade: '',
                level: '',
                subject_id: '',
                strand_id: '',
                sem: '',
            },
            searchedSubject: '',
        };
    },

    methods: {
        async saveSubtag() {
            if(this.form.level=='Senior High' && (this.form.strand_id==''||this.form.sem=='')) {
                let errmsg = '';
                if(this.form.strand_id=='') { errmsg += "Strand is required\n" }
                if(this.form.sem=='') { errmsg += "Semester is required\n" }
                alert(errmsg);
                return;
            }
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/subtags/saveSubtag`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,2000,'success');
                // this.AppStore.resetForm(this.form);
                this.AdminSubtagsStore.getSubtags();
            }).catch(e=>{
                if(e.response) {
                    console.log(e.response);
                    if(e.response.status=="409") {
                        this.AppStore.toast(e.response.data,3000,'error');
                    } else {
                        this.AppStore.toast("An error has occured",3000,'error');
                    }
                }
            })
            ;
        },

    },

    computed: {

    },

    watch: {
        "form.grade": function() {
            console.log(this.form);
            this.form.level =
                this.AppStore.state.gradeLevels.find(e=>e.grade==this.form.grade).level;
            // this.form.subject_id = '';
            this.form.strand_id = '';
            this.form.sem = '';
        },
        "form.subject_id": function() {
            if(typeof(this.form.subject_id)!="object") {
                this.form.subject_id = '';
            }
        },
    }
};
</script>
