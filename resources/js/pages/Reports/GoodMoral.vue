<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline">
                Good Moral
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

            <v-btn color="primary" class="ml-2" @click="generate"
                :disabled="false">Generate</v-btn>
        </v-app-bar>

        <v-container>

            <v-card class="pa-2">
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
                            <p>This is to certify that <strong>{{ ReportsStore.state.generateCOE.student_firstname }}
                                {{ ReportsStore.state.generateCOE.student_middlename }}
                                {{ ReportsStore.state.generateCOE.student_lastname }}</strong> was a bonafide student in
                                this institution as <strong>{{ReportsStore.state.generateCOE.grade }}</strong> student
                                for the school year <strong>{{ ReportsStore.state.generateCOE.sy }}</strong>.
                            </p>
                            <p>This is to certify futher that during his studies here in this school, we observed him
                                as a student of:
                            </p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Very good moral character</td>
                                        <td style="width:10%"></td>
                                        <td>Fair in moral character</td>
                                        <td style="width:10%"></td>
                                    </tr>
                                    <tr>
                                        <td>Good moral character</td>
                                        <td style="width:10%"></td>
                                        <td>Needs moral and extra attention</td>
                                        <td style="width:10%"></td>
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
            date: new Date().toDateString(),
        };
    },

    computed:{

    },

    methods:{
        generate() {
            this.ReportsStore.generateCOE(this.student.id);
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
