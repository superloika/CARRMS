<template>
    <div>
        <v-app-bar v-if="AppStore.state.printMode==false">
            <v-toolbar-title class="text-overline">
                Good Moral
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-combobox outlined label="Search student here" placeholder="Search by name or LRN"
                hide-details dense
                :items="AdminStudentsStore.state.students"
                item-text="searchKey"
                item-value="id"
                :return-object="true"
                v-model="student"
            >
                <!-- <template v-slot:selection="{ item }">
                    <div>{{item.lastname}}, {{item.firstname}} {{item.middlename}}</div>
                </template>
                <template v-slot:item="{ item }">
                    <div>
                        {{item.lastname}}, {{item.firstname}} {{item.middlename}}
                    </div>
                </template> -->
            </v-combobox>

            <!-- <v-btn color="primary" class="ml-2" @click="generate">Generate</v-btn> -->

            <v-btn color="primary" class="ml-2" @click="print"
                :disabled="
                    ReportsStore.state.generateCOE.student_firstname==null
                    || ReportsStore.state.generateCOE.student_firstname==''
                ">Print</v-btn>
        </v-app-bar>

        <v-container>

            <v-card class="pa-2" elevation="0">
                <!-- <v-sheet align="center" justify="center" > -->
                    <div class="d-flex justify-center">
                        <div class="pr-6">
                            <v-img src="/img/ca.jfif"
                                height="120"
                                width="120"
                            >
                            </v-img>
                        </div>
                        <div align="center" class="pt-8">
                            <div class="text-h4">CARMEL ACADEMY</div>
                            <div class="text-h6">Balilihan, Bohol</div>
                        </div>
                    </div>
                <!-- </v-sheet> -->
                <br>
                <v-divider></v-divider>
                <v-container>
                    <v-sheet align="center" justify="center" class="py-4">
                        <div class="text-h5 font-weight-bold">CERTIFICATION</div>
                    </v-sheet>
                    <v-container>
                        <v-sheet>
                            <p class="font-weight-bold">To Whom It May Concern:</p>
                            <br>
                            <p>
                                &ensp; &emsp;
                                This is to certify that <strong>{{ ReportsStore.state.generateCOE.student_firstname }}
                                {{ ReportsStore.state.generateCOE.student_middlename }}
                                {{ ReportsStore.state.generateCOE.student_lastname }}</strong>
                                {{ ReportsStore.state.generateCOE.sy==AdminSYStore.state.activeSY?'is':'was' }}
                                a bonafide student in
                                this institution as <strong>{{ReportsStore.state.generateCOE.grade }}</strong>
                                {{ ReportsStore.state.generateCOE.level != 'Junior High' ||
                                ReportsStore.state.generateCOE.level != 'Senior High' ? 'pupil' : 'student' }}
                                for the school year <strong>{{ ReportsStore.state.generateCOE.sy }}</strong>.
                            </p>
                            <p>This is to certify futher that during
                                {{ ReportsStore.state.generateCOE.gender=='Male' ? 'his' : 'her' }}
                                studies here in this school, we observed
                                {{ ReportsStore.state.generateCOE.gender=='Male' ? 'him' : 'her' }}
                                as a student of:
                            </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Very good moral character</td>
                                        <td style="width:10%">
                                            <input type="checkbox">
                                        </td>
                                        <td>Fair in moral character</td>
                                        <td style="width:10%">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Good moral character</td>
                                        <td style="width:10%">
                                            <input type="checkbox">
                                        </td>
                                        <td>Needs moral and extra attention</td>
                                        <td style="width:10%">
                                            <input type="checkbox">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            <p>This certification is issued upon the request of the above mentioned
                                name for whatever legal purpose it may serve.
                            </p>
                            <p>Issued this <strong>{{ date }}</strong> at CARMEL ACADEMY, Del Carmen Norte,
                                Balilihan, Bohol.
                            </p>
                            <br>
                        </v-sheet>
                    </v-container>
                    <br>
                    <br>
                    <br>
                    <br>
                    <v-sheet align="right">
                        <div>
                            <p class="font-weight-bold pa-0 ma-0" style="text-decoration:underline">EMETERIO C. JAVINEZ JR., LPT, MAED</p>
                            <em class="pr-16 mr-6">School Principal</em>
                        </div>
                    </v-sheet>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: '',
            date: new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}),
        };
    },

    computed:{

    },

    watch: {
        student() {
            if(this.student!='') {
                this.generate();
            }
        }
    },

    methods:{
        generate() {
            this.ReportsStore.generateCOE(this.student.id);
        },

        print() {
            this.AppStore.state.printMode=true;
            // window.print();
            setTimeout(()=>{
                window.print();
            }, 100)
            setTimeout(()=>{
                this.AppStore.state.printMode=false;
            }, 1000)
        }
    },

    created(){
        this.AdminStudentsStore.getStudents();
        this.generate();
    },

    beforeDestroy() {
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
