<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add Subject Tagging
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" @click="test()">
                <v-icon>mdi-floppy</v-icon> test
            </v-btn>
            <v-btn dense iconx text color="primary" @click="saveSubtag()"
                :disabled="form.grade==null || form.grade=='' || form.subject_id == null || form.subject_id == ''"
            >
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
                    <v-combobox outlined label="Subject"
                        hide-details
                        :items="AdminSubjectsStore.state.subjects"
                        item-text="subject_name"
                        item-value="id"
                        :return-object="true"
                        v-model="form.subject_id"
                        multiple deletable-chips small-chips
                    >
                        <!-- <template v-slot:selection="{ item }">
                            <div>{{item.subject_name}}</div>
                        </template> -->
                        <template v-slot:item="{ item }">
                            <div>
                                {{item.subject_name}}
                            </div>
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

        test() {
            console.log(this.form.subject_id);
        }

    },

    computed: {

    },

    watch: {
        "form.grade": function() {
            console.log(this.form);
            this.form.level =
                this.AppStore.state.gradeLevels.find(e=>e.grade==this.form.grade).level;
            this.form.subject_id = '';
            this.form.strand_id = '';
            this.form.sem = '';
        },
        // "form.subject_id": function() {
        //     if(typeof(this.form.subject_id)!="object") {
        //         this.form.subject_id = '';
        //     }
        // },
    }
};
</script>
