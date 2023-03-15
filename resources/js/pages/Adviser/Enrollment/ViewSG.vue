<template>
    <v-card>
        <v-app-bar elevation="0">
            <v-toolbar-title>
                {{ AdviserEnrollmentStore.state.studentName }} - Subjects and Grades
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="updateGrades">Submit</v-btn>
        </v-app-bar>
        <v-card-title></v-card-title>
        <v-card-text>
            <div v-if="AdviserEnrollmentStore.state.sectionDetails.level!='Senior High'">
                <v-row v-for="(subject,i) in subjects" :key="subject.id">
                    <v-col>
                        <div class="primary--text font-weight-bold pt-2">{{ subject.subject_name }}</div>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="1st" v-model="subject.first"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :readonly="subjectsOrig[i].first > 0"
                        >

                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="2nd" v-model="subject.second"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :disabled="subjectsOrig[i].first=='' || subjectsOrig[i].first==null"
                            :readonly="subjectsOrig[i].second > 0"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="3rd" v-model="subject.third"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :disabled="subjectsOrig[i].second=='' || subjectsOrig[i].second==null"
                            :readonly="subjectsOrig[i].third > 0"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="4th" v-model="subject.fourth"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :disabled="subjectsOrig[i].third=='' || subjectsOrig[i].third==null"
                            :readonly="subjectsOrig[i].fourth > 0"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="Final" v-model="subject.final"
                            readonly
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="Remarks" v-model="subject.remarks"
                            readonly
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </div>

            <div v-else>
                <div class="font-weight-bold text-h6 pb-2">First Semester</div>
                <v-row v-for="(subject,i) in subjects_sem1" :key="subject.id">
                    <v-col>
                        <div class="primary--text font-weight-bold pt-2">{{ subject.subject_name }}</div>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="1st" v-model="subject.first"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :readonly="subjects_sem1Orig[i].first > 0"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="2nd" v-model="subject.second"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :disabled="subjects_sem1Orig[i].first=='' || subjects_sem1Orig[i].first==null"
                            :readonly="subjects_sem1Orig[i].second > 0"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="Final" v-model="subject.final"
                            readonly
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="Remarks" v-model="subject.remarks"
                            readonly
                        >
                        </v-text-field>
                    </v-col>
                </v-row>

                <div class="mt-12 mb-12">
                    <!-- <v-separator></v-separator> -->
                </div>

                <div class="font-weight-bold text-h6 pb-2">Second Semester</div>
                <v-row v-for="(subject,i) in subjects_sem2" :key="subject.id">
                    <v-col>
                        <div class="primary--text font-weight-bold pt-2">{{ subject.subject_name }}</div>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="3rd" v-model="subject.third"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :readonly="subjects_sem2Orig[i].third > 0"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="4th" v-model="subject.fourth"
                            type="number" min="0" max="100" :rules="[numberRule]"
                            :disabled="subjects_sem2Orig[i].third=='' || subjects_sem2Orig[i].third==null"
                            :readonly="subjects_sem2Orig[i].fourth > 0"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="Final" v-model="subject.final"
                            readonly
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="Remarks" v-model="subject.remarks"
                            readonly
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </div>
        </v-card-text>
    </v-card>
</template>


<script>
export default {
    data() {
        return {
            numberRule: v  => {
                // if (v.trim()) return true;
                if (!isNaN(parseFloat(v)) && v >= 0 && v <= 100) return true;
                return 'Number has to be between 0 and 100';
            },

        }
    },

    computed: {
        subjectsOrig() {
            return this.AdviserEnrollmentStore.state.selectedStudentSubjectsOrig;
        },
        subjects() {
            return this.AdviserEnrollmentStore.state.selectedStudentSubjects;
        },
        // origSubjects() {
        //     return [...this.AdviserEnrollmentStore.state.selectedStudentSubjects];
        // },
        subjects_sem1() {
            if(this.AdviserEnrollmentStore.state.sectionDetails.level=='Senior High') {
                return this.subjects.filter(e=>{
                    return e.sem == 1;
                })
            }
            return [];
        },
        subjects_sem1Orig() {
            if(this.AdviserEnrollmentStore.state.sectionDetails.level=='Senior High') {
                return this.subjectsOrig.filter(e=>{
                    return e.sem == 1;
                })
            }
            return [];
        },
        subjects_sem2() {
            if(this.AdviserEnrollmentStore.state.sectionDetails.level=='Senior High') {
                return this.subjects.filter(e=>{
                    return e.sem == 2;
                })
            }
            return [];
        },
        subjects_sem2Orig() {
            if(this.AdviserEnrollmentStore.state.sectionDetails.level=='Senior High') {
                return this.subjectsOrig.filter(e=>{
                    return e.sem == 2;
                })
            }
            return [];
        },

    },

    methods: {
        updateGrades() {
            axios.post(
                `${this.AppStore.state.siteUrl}adviser/sections/updateGrades`,
                {
                    subjects: this.subjects,
                    level: this.AdviserEnrollmentStore.state.sectionDetails.level,
                    adviser_name: this.AdviserEnrollmentStore.state.sectionDetails.adviser_firstname +
                        ' ' + this.AdviserEnrollmentStore.state.sectionDetails.adviser_lastname,
                    sy_id: this.AdminSYStore.state.activeSYid
                }
            ).then(e=>{
                this.AdviserEnrollmentStore.getSubjects(this.AdviserEnrollmentStore.state.selectedELID);
                this.AppStore.toast(e.data,2000,'success');
            });
        },
    },

    created() {
        this.AdviserEnrollmentStore.getSubjects(this.AdviserEnrollmentStore.state.selectedELID);
    },

    mounted() {
        console.log('ViewDialog mounted');
    },
}
</script>
