<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline">
                {{ $route.meta.name }}
                <!-- Reports -->
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-combobox outlined label="Student"
                hide-details dense
                :items="AdminStudentsStore.state.students"
                item-text="lastname"
                item-value="id"
                :return-object="true"
                v-model="student"
            >
                <template v-slot:selection="{ item }">
                    <div>{{item.lastname}}, {{item.firstname}} {{item.middlename}}</div>
                </template>
                <template v-slot:item="{ item }">
                    <div>
                        {{item.lastname}}, {{item.firstname}} {{item.middlename}}
                    </div>
                </template>
            </v-combobox>

            <v-select outlined dense hide-details rounded filledx label="Level"
                :items="AppStore.state.levels"
                v-model="level"
                class="ml-2"
                style="max-width:200px"
            >
            </v-select>

            <v-btn color="primary" class="ml-2" @click="generate"
                :disabled="false">Generate</v-btn>
        </v-app-bar>

        <v-container v-if="showOutput">
            <v-card class="pa-2">
                <v-sheet class="text-align-center" align="center" justify="center">
                    <div class="text-h6">Student Permanent Record</div>
                    <div class="">{{ level }}</div>
                    <br>
                    <!-- <v-divider></v-divider> -->
                </v-sheet>

                <v-card-text class="black--text">
                    <v-row>
                        <v-col md="12" align="center" justify="center" style="background-color:#f2f2f2;">
                            <strong>Learner's Information</strong>
                        </v-col>

                        <v-col md="4">
                            <span>LAST NAME: </span><strong>{{ pr.profile.lastname }}</strong>
                        </v-col>
                        <v-col md="4">
                            <span>FIRST NAME: </span><strong>{{ pr.profile.firstname }}</strong>
                        </v-col>
                        <v-col md="4">
                            <span>MIDDLE NAME: </span><strong>{{ pr.profile.middlename }}</strong>
                        </v-col>

                        <v-col md="3">
                            <span>LRN: </span><strong>{{ pr.profile.lrn }}</strong>
                        </v-col>
                        <v-col md="3">
                            <span>Date of Birth: </span><strong>{{ pr.profile.dob }}</strong>
                        </v-col>
                        <v-col md="3">
                            <span>Sex: </span><strong>{{ pr.profile.gender }}</strong>
                        </v-col>
                        <v-col md="3">
                            <span>Date of Admission: </span><strong></strong>
                        </v-col>
                    </v-row>

                    <!-- scholastic record -->
                    <v-row>
                        <v-col md="12" align="center" justify="center" style="background-color:#f2f2f2;">
                            <strong>Scholastic Record</strong>
                        </v-col>

                        <div v-if="level!='Senior High'">
                            <v-row v-for="s in ReportsStore.state.permaRecord.scholasticRec" :key="s.grade_id">
                                <v-col md="3">
                                    <span>SCHOOL: </span><strong>CARMEL ACADEMY</strong>
                                </v-col>
                                <v-col md="3">
                                    <span>SCHOOL ID: </span><strong>407537</strong>
                                </v-col>
                                <v-col md="2">
                                    <span>GRADE LEVEL: </span><strong>{{ s.grade }}</strong>
                                </v-col>
                                <v-col md="2">
                                    <span>SY: </span><strong>{{ s.sy }}</strong>
                                </v-col>
                                <!-- <v-col md="4">
                                    <span>SEM: </span><strong>{{ s.sem }}</strong>
                                </v-col>
                                <v-col md="4">
                                    <span>TRACK/STRAND: </span><strong>{{ s.strand_name }}</strong>
                                </v-col> -->
                                <v-col md="2">
                                    <span>SECTION: </span><strong>{{ s.section }} </strong>
                                </v-col>

                                <!-- subjects table -->
                                <v-col md="12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Subjects</th>
                                                <th>1st</th>
                                                <th>2nd</th>
                                                <th>3rd</th>
                                                <th>4th</th>
                                                <th>Final</th>
                                                <th>Action Taken</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="subj in s.subjects" :key="subj.id">
                                                <td>{{ subj.subject_name }}</td>
                                                <td>{{ subj.first }}</td>
                                                <td>{{ subj.second }}</td>
                                                <td>{{ subj.third }}</td>
                                                <td>{{ subj.fourth }}</td>
                                                <td>{{ subj.final }}</td>
                                                <td>{{ subj.remarks }}</td>
                                            </tr>
                                        </tbody>
                                        <!-- <tfoot>
                                            <tr>
                                                <th colspan="5">General average</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </tfoot> -->
                                    </table>
                                </v-col>

                                <v-col md="12">
                                    <span>REMARKS: _________________________________________________________</span>
                                </v-col>
                                <v-col md="4">
                                    <span>Prepared By:</span>
                                </v-col>
                                <v-col md="4">
                                    <span>Certified True and Correct:</span>
                                </v-col>
                                <v-col md="4">
                                    <span>Date Checked (MM/DD/YYYY)</span>
                                </v-col>
                                <v-col md="4" align="center" justify="center">
                                    <strong style="border-bottom:1px solid #ccc;">
                                        {{ s.adviser_firstname }} {{ s.adviser_middlename }} {{ s.adviser_lastname }}
                                    </strong>
                                    <br><span>Signature of Adviser over Printed Name</span>
                                </v-col>
                                <v-col md="4" align="center" justify="center">
                                    <strong style="border-bottom:1px solid #ccc;">
                                        EMETERIO C. JAVINEZ JR.,LPT,MAED, Principal</strong>
                                    <br><span>Signature of Authorized Person over Printed Name, Designation</span>
                                </v-col>
                                <v-col md="4">
                                    <span>___________________________</span>
                                </v-col>
                                <v-col md="12" class="py-4"><v-divider></v-divider></v-col>
                            </v-row>
                        </div>

                        <div v-else>
                            <v-row v-for="s in ReportsStore.state.permaRecord.scholasticRec" :key="s.grade_id">
                                <v-col>
                                    <v-row v-for="sem in [1, 2]" :key="sem">
                                        <v-col md="3">
                                            <span>SCHOOL: </span><strong>CARMEL ACADEMY</strong>
                                        </v-col>
                                        <v-col md="3">
                                            <span>SCHOOL ID: </span><strong>407537</strong>
                                        </v-col>
                                        <v-col md="3">
                                            <span>GRADE LEVEL: </span><strong>{{ s.grade }}</strong>
                                        </v-col>
                                        <v-col md="3">
                                            <span>SY: </span><strong>{{ s.sy }}</strong>
                                        </v-col>
                                        <v-col md="4">
                                            <span>SEM: </span><strong>{{ sem }}</strong>
                                        </v-col>
                                        <v-col md="4">
                                            <span>TRACK/STRAND: </span><strong>{{ s.strand_name }}</strong>
                                        </v-col>
                                        <v-col md="4">
                                            <span>SECTION: </span><strong>{{ s.section }} </strong>
                                        </v-col>

                                        <!-- subjects table -->
                                        <v-col md="12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Type</th>
                                                        <th>Subjects</th>
                                                        <th v-if="sem==1">1st</th>
                                                        <th v-if="sem==1">2nd</th>
                                                        <th v-if="sem==2">3rd</th>
                                                        <th v-if="sem==2">4th</th>
                                                        <th>Final</th>
                                                        <th>Action Taken</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="subj in s.subjects[sem]" :key="subj.id">
                                                        <td>{{ subj.subject_type }}</td>
                                                        <td>{{ subj.subject_name }}</td>
                                                        <td v-if="sem==1">{{ subj.first }}</td>
                                                        <td v-if="sem==1">{{ subj.second }}</td>
                                                        <td v-if="sem==2">{{ subj.third }}</td>
                                                        <td v-if="sem==2">{{ subj.fourth }}</td>
                                                        <td>{{ subj.final }}</td>
                                                        <td>{{ subj.remarks }}</td>
                                                    </tr>
                                                </tbody>
                                                <!-- <tfoot>
                                                    <tr>
                                                        <th colspan="4">General average</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </tfoot> -->
                                            </table>
                                        </v-col>

                                        <v-col md="12">
                                            <span>REMARKS: _________________________________________________________</span>
                                        </v-col>
                                        <v-col md="4">
                                            <span>Prepared By:</span>
                                        </v-col>
                                        <v-col md="4">
                                            <span>Certified True and Correct:</span>
                                        </v-col>
                                        <v-col md="4">
                                            <span>Date Checked (MM/DD/YYYY)</span>
                                        </v-col>
                                        <v-col md="4" align="center" justify="center">
                                            <strong style="border-bottom:1px solid #ccc;">
                                                {{ s.adviser_firstname }} {{ s.adviser_middlename }} {{ s.adviser_lastname }}
                                            </strong>
                                            <br><span>Signature of Adviser over Printed Name</span>
                                        </v-col>
                                        <v-col md="4" align="center" justify="center">
                                            <strong style="border-bottom:1px solid #ccc;">
                                                EMETERIO C. JAVINEZ JR.,LPT,MAED, Principal</strong>
                                            <br><span>Signature of Authorized Person over Printed Name, Designation</span>
                                        </v-col>
                                        <v-col md="4">
                                            <span>___________________________</span>
                                        </v-col>
                                        <v-col md="12" class="py-4"><v-divider></v-divider></v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </div>

                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            level: '',
            student: '',
        };
    },

    computed:{
        pr() {
            console.log('asdasdasdsad',this.ReportsStore.state.permaRecord);
            return this.ReportsStore.state.permaRecord;
        },

        showOutput() {
            return this.level=='' || this.student == '' ? false : true;
        }
    },

    methods:{
        generate() {
            this.ReportsStore.permaRecord(this.student.id,this.level);
        }
    },

    created(){
        this.AdminSYStore.getSYs();
        this.AdminStudentsStore.getStudents();
    },

    beforeDestroy() {
        this.ReportsStore.state.studentEnrollment = [];
    }
};
</script>


<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    tr td, tr th {
        border: 1px solid #505050;
    }
    tr td, tr th {
        padding: 5px;
    }
</style>
