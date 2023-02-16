<template>
    <div>
        <v-app-bar v-if="AppStore.state.printMode==false">
            <v-toolbar-title class="text-overline">
                <!-- {{ $route.meta.name }} -->
                Certificate of Enrollment
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

            <!-- <v-btn color="primary" class="ml-2" @click="generate"
                :disabled="student==''">Generate</v-btn> -->

            <v-btn color="primary" class="ml-2" @click="print"
                :disabled="
                    ReportsStore.state.generateCOE.student_firstname==null
                    || ReportsStore.state.generateCOE.student_firstname==''
                ">Print</v-btn>
        </v-app-bar>

        <v-container>

            <v-card class="pa-2" :elevation="AppStore.state.printMode==true?'0':'1'">
                <!-- <v-sheet align="center" justify="center" > -->
                    <div class="d-flex justify-center">
                        <div class="pr-6">
                            <v-img src="/img/ca.jfif"
                                height="120"
                                width="120"
                            >
                            </v-img>
                        </div>
                        <div align="center">
                            <div class="text-h4">CARMEL ACADEMY</div>
                            <div class="text-h6">Balilihan, Bohol</div>
                            <div class="text-caption">MEMBER: Bohol Association of Catholic Schools (BACS),
                                Tagbilaran City<br>
                                :Catholic Educational Association of the Philippines (CEAP)
                            </div>
                        </div>
                    </div>
                <!-- </v-sheet> -->
                <br>
                <v-divider></v-divider>
                <v-container>
                    <v-sheet align="center" justify="center" class="py-4">
                        <div class="text-h5 font-weight-bold">CERTIFICATE</div>
                    </v-sheet>
                    <v-container>
                        <v-sheet>
                            <p class="font-weight-bold">To Whom It May Concern:</p>
                            <br>
                            <p>This is to certify that <strong>{{ ReportsStore.state.generateCOE.student_firstname }}
                                {{ ReportsStore.state.generateCOE.student_middlename }}
                                {{ ReportsStore.state.generateCOE.student_lastname }}</strong> is officially enrolled in Carmel
                                Academy, Balilihan, Bohol as <strong>{{ReportsStore.state.generateCOE.grade }}</strong> student
                                for <strong>S.Y. {{ ReportsStore.state.generateCOE.sy }}</strong>.
                            </p>
                            <p>This certification is issued upon the request of the above mentioned
                                name for whatever legal purpose it may serve.
                            </p>
                            <p>Issued this <strong>{{ date }}</strong> at CARMEL ACADEMY, Del Carmen Norte,
                                Balilihan, Bohol.
                            </p>
                            <br>
                        </v-sheet>
                    </v-container>
                    <v-sheet align="right">
                        <span>
                            <p class="font-weight-bold pa-0 ma-0" style="text-decoration:underline">EMETERIO C. JAVINEZ JR., LPT, MAED</p>
                            <em>School Principal</em>
                        </span>
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


