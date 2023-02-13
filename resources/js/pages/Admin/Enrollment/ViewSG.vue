<template>
    <v-card>
        <v-app-bar elevation="0">
            <v-toolbar-title>
                {{ AdminEnrollmentStore.state.studentName }} - Subjects and Grades
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-chip v-if="AdviserEnrollmentStore.state.sectionDetails" color="">
                Previous Grade Level: {{ AdviserEnrollmentStore.state.sectionDetails.grade }}
            </v-chip>
        </v-app-bar>
        <v-card-title></v-card-title>
        <v-card-text>
            <div v-if="level!='Senior High'">
                <v-row v-for="(subject,index) in subjects" :key="index">
                    <v-col>
                        <div class="primary--text font-weight-bold pt-2">{{ subject.subject_name }}</div>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="1st" v-model="subject.first"
                            type="number" min="0" max="100" readonly
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="2nd" v-model="subject.second"
                            type="number" min="0" max="100" readonly
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="3rd" v-model="subject.third"
                            type="number" min="0" max="100" readonly
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="4th" v-model="subject.fourth"
                            type="number" min="0" max="100" readonly
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
                <v-row v-for="(subject,index) in subjects_sem1" :key="index">
                    <v-col>
                        <div class="primary--text font-weight-bold pt-2">{{ subject.subject_name }}</div>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="1st" v-model="subject.first"
                            type="number" min="0" max="100" readonly
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="2nd" v-model="subject.second"
                            type="number" min="0" max="100" readonly
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
                    <v-separator></v-separator>
                </div>

                <div class="font-weight-bold text-h6 pb-2">Second Semester</div>
                <v-row v-for="(subject,index) in subjects_sem2" :key="index">
                    <v-col>
                        <div class="primary--text font-weight-bold pt-2">{{ subject.subject_name }}</div>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="3rd" v-model="subject.third"
                            type="number" min="0" max="100"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense hide-details label="4th" v-model="subject.fourth"
                            type="number" min="0" max="100"
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

        }
    },

    computed: {
        subjects() {
            return this.AdviserEnrollmentStore.state.selectedStudentSubjects;
        },
        subjects_sem1() {
            if(this.level=='Senior High') {
                return this.subjects.filter(e=>{
                    return e.sem == 1;
                })
            }
            return [];
        },
        subjects_sem2() {
            if(this.level=='Senior High') {
                return this.subjects.filter(e=>{
                    return e.sem == 2;
                })
            }
            return [];
        },

        level() {
            return this.$route.meta.level
        },

    },

    methods: {

    },

    created() {
        this.AdviserEnrollmentStore.getSubjects(this.AdminEnrollmentStore.state.selectedELID);
    },

    mounted() {
        console.log('ViewDialog mounted');
    },

    beforeDestroy() {
        this.AdviserEnrollmentStore.state.selectedStudentSubjects = [];
    }
}
</script>
