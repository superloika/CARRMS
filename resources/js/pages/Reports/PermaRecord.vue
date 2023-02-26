<template>
    <div>
        <v-app-bar v-if="!AppStore.state.printMode">
            <v-toolbar-title class="text-overline">
                {{ $route.meta.name }}
                <!-- Reports -->
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- <v-combobox outlined label="Student" placeholder="Search by last name"
                hide-details dense
                :items="AdminStudentsStore.state.students"
                item-text="lastname"
                item-value="id"
                :return-object="true"
                v-model="student"
            >
                <template v-slot:selection="{ item }">
                    <div>{{item.lastname}}, {{item.firstname}} {{item.middlename}} ({{ item.lrn }})</div>
                </template>
                <template v-slot:item="{ item }">
                    <div>
                        {{item.lastname}}, {{item.firstname}} {{item.middlename}} ({{ item.lrn }})
                    </div>
                </template>
            </v-combobox> -->

            <v-select outlined dense hide-details rounded filledx label="Level"
                :items="AppStore.state.levels"
                v-model="level"
                class="ml-2"
                style="max-width:200px"
            >
            </v-select>

            <v-combobox outlined label="Search student here" placeholder="Search by name or LRN"
                hide-details dense
                :items="AdminStudentsStore.state.students"
                item-text="searchKey"
                item-value="id"
                :return-object="true"
                v-model="student"
                class="ml-2"
            >
                <!-- <template v-slot:item="{ item }">
                    <div>
                        {{item.lastname}}, {{item.firstname}} {{item.middlename}} ({{ item.lrn }})
                    </div>
                </template> -->
            </v-combobox>

            <!-- <v-btn color="primary" class="ml-2" @click="generate"
                :disabled="false">Generate</v-btn> -->

            <v-btn color="primary" class="ml-2" @click="print"
                :disabled="student=='' || level==''">Print</v-btn>
        </v-app-bar>

        <v-container v-if="showOutput">
            <v-card class="pa-2" elevation="0">
                <br>
                <v-row>
                    <v-col cols="3">
                        <v-sheet style="background-colorx:blue;" align="right" justify="right">
                            <v-img src="/img/ca.jfif"
                                height="100"
                                width="100"
                            >
                            </v-img>
                        </v-sheet>
                    </v-col>
                    <v-col cols="6">
                        <v-sheet class="text-align-center" align="center" justify="center">
                            <div class="font-weight-bold">DEPARTMENT OF EDUCATION</div>
                            <div class="text-caption">Region VII, Central Visayas</div>
                            <div class="font-weight-bold">CARMEL ACADEMY</div>
                            <div class="text-caption">Balilihan, Bohol</div>
                            <br>
                            <div class="font-weight-bold">STUDENT PERMANENT RECORD</div>
                            <div class="">{{ level }}</div>
                            <br>
                            <!-- <v-divider></v-divider> -->
                        </v-sheet>
                    </v-col>
                    <v-col cols="3">
                        <v-sheet style="background-colorx:blue;" align="left" justify="left">
                            <v-img src="/img/deped_seal.webp"
                                height="100"
                                width="100"
                            >
                            </v-img>
                        </v-sheet>
                    </v-col>
                </v-row>

                <v-card-text class="black--text">
                    <v-row>
                        <v-col cols="12" align="center" justify="center" style="background-color:#f2f2f2;">
                            <strong>Learner's Information</strong>
                        </v-col>

                        <v-col cols="4">
                            <span>LAST NAME: </span><strong>{{ pr.profile.lastname }}</strong>
                        </v-col>
                        <v-col cols="4">
                            <span>FIRST NAME: </span><strong>{{ pr.profile.firstname }}</strong>
                        </v-col>
                        <v-col cols="4">
                            <span>MIDDLE NAME: </span><strong>{{ pr.profile.middlename }}</strong>
                        </v-col>

                        <v-col cols="4">
                            <span>LRN: </span><strong>{{ pr.profile.lrn }}</strong>
                        </v-col>
                        <v-col cols="4">
                            <span>Date of Birth: </span><strong>{{ pr.profile.dob }}</strong>
                        </v-col>
                        <v-col cols="4">
                            <span>Sex: </span><strong>{{ pr.profile.gender }}</strong>
                        </v-col>
                        <!-- <v-col cols="3">
                            <span>Date of Admission: </span><strong></strong>
                        </v-col> -->
                    </v-row>

                    <!-- scholastic record -->
                    <v-row>
                        <v-col cols="12" align="center" justify="center" style="background-color:#f2f2f2;">
                            <strong>Scholastic Record</strong>
                        </v-col>

                        <!-- below Senior High -->
                        <div v-if="level!='Senior High'">
                            <v-row v-for="s in ReportsStore.state.permaRecord.scholasticRec" :key="s.grade_id">
                                <v-col md="3" sm="3">
                                    <span>SCHOOL: </span><strong>CARMEL ACADEMY</strong>
                                </v-col>
                                <v-col md="3" sm="3">
                                    <span>SCHOOL ID: </span><strong>407537</strong>
                                </v-col>
                                <v-col md="2" sm="2">
                                    <span>GRADE LEVEL: </span><strong>{{ s.grade }}</strong>
                                </v-col>
                                <v-col md="2" sm="2">
                                    <span>SY: </span><strong>{{ s.sy }}</strong>
                                </v-col>
                                <!-- <v-col md="4">
                                    <span>SEM: </span><strong>{{ s.sem }}</strong>
                                </v-col>
                                <v-col md="4">
                                    <span>TRACK/STRAND: </span><strong>{{ s.strand_name }}</strong>
                                </v-col> -->
                                <v-col md="2" sm="2">
                                    <span>SECTION: </span><strong>{{ s.section }} </strong>
                                </v-col>

                                <!-- subjects table -->
                                <v-col cols="12">
                                    <table style="width:100%">
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

                                <v-col cols="12">
                                    <span>REMARKS: </span>
                                </v-col>
                                <v-col cols="4">
                                    <span>Prepared By:</span>
                                </v-col>
                                <v-col cols="5">
                                    <span>Certified True and Correct:</span>
                                </v-col>
                                <v-col cols="3">
                                    <span>Date Checked</span>
                                </v-col>
                                <v-col cols="4" align="center" justify="center">
                                    <strong style="border-bottom:1px solid #ccc;">
                                        {{ s.adviser_firstname.toUpperCase() }}
                                        {{ s.adviser_middlename.toUpperCase() }}
                                        {{ s.adviser_lastname.toUpperCase() }}
                                    </strong>
                                    <br><span><small>Adviser</small></span>
                                </v-col>
                                <v-col cols="5" align="center" justify="center">
                                    <strong style="border-bottom:1px solid #ccc;">
                                        EMETERIO C. JAVINEZ JR.,LPT,MAED</strong>
                                    <br><span><small>
                                        Principal
                                    </small></span>
                                </v-col>
                                <v-col cols="3">
                                    <span>____________</span>
                                </v-col>
                                <v-col cols="12" class="py-4"><v-divider></v-divider></v-col>
                            </v-row>
                        </div>

                        <div v-else>
                            <v-row v-for="s in ReportsStore.state.permaRecord.scholasticRec" :key="s.grade_id">
                                <v-col>
                                    <v-row v-for="sem in [1, 2]" :key="sem">
                                        <v-col cols="3">
                                            <span>SCHOOL: </span><strong>CARMEL ACADEMY</strong>
                                        </v-col>
                                        <v-col cols="3">
                                            <span>SCHOOL ID: </span><strong>407537</strong>
                                        </v-col>
                                        <v-col cols="3">
                                            <span>GRADE LEVEL: </span><strong>{{ s.grade }}</strong>
                                        </v-col>
                                        <v-col cols="3">
                                            <span>SY: </span><strong>{{ s.sy }}</strong>
                                        </v-col>
                                        <v-col cols="4">
                                            <span>SEM: </span><strong>{{ sem }}</strong>
                                        </v-col>
                                        <v-col cols="4">
                                            <span>TRACK/STRAND: </span><strong>{{ s.strand_name }}</strong>
                                        </v-col>
                                        <v-col cols="4">
                                            <span>SECTION: </span><strong>{{ s.section }} </strong>
                                        </v-col>

                                        <!-- subjects table -->
                                        <v-col cols="12">
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

                                        <v-col cols="12">
                                            <span>REMARKS: </span>
                                        </v-col>
                                        <v-col cols="4">
                                            <span>Prepared By:</span>
                                        </v-col>
                                        <v-col cols="5">
                                            <span>Certified True and Correct:</span>
                                        </v-col>
                                        <v-col cols="3">
                                            <span>Date Checked</span>
                                        </v-col>
                                        <v-col cols="4" align="center" justify="center">
                                            <strong style="border-bottom:1px solid #ccc;">
                                                {{ s.adviser_firstname }} {{ s.adviser_middlename }} {{ s.adviser_lastname }}
                                            </strong>
                                            <br><span>Adviser</span>
                                        </v-col>
                                        <v-col cols="5" align="center" justify="center">
                                            <strong style="border-bottom:1px solid #ccc;">
                                                EMETERIO C. JAVINEZ JR.,LPT,MAED</strong>
                                            <br><span><small>
                                                Principal
                                            </small></span>
                                        </v-col>
                                        <v-col cols="3">
                                            <span>____________</span>
                                        </v-col>
                                        <v-col cols="12" class="py-4"><v-divider></v-divider></v-col>
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
        },
        print() {
            this.AppStore.state.printMode=true;
            setTimeout(()=>{
                window.print();
            }, 100)
            setTimeout(()=>{
                this.AppStore.state.printMode=false;
            }, 1000)
        }
    },

    watch: {
        student() {
            if(this.student != '') {
                this.generate();
            }
        },
        level() {
            this.student = '';
            this.AdminStudentsStore.getStudents(this.level);
        }
    },

    created(){
        this.AdminSYStore.getSYs();
        // this.AdminStudentsStore.getStudents();
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
