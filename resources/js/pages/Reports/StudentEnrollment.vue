<template>
    <div>
        <v-app-bar v-if="AppStore.state.printMode==false">
            <v-toolbar-title class="text-overline">
                {{ $route.meta.name }}
                <!-- Reports -->
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-select outlined dense hide-details rounded filledx label="School Year"
                :items="AdminSYStore.state.sy"
                item-text="sy"
                item-value="id"
                v-model="sy_id"
                class="ml-2"
                style="max-width:200px"
            >
            </v-select>
            <v-select outlined dense hide-details rounded filledx label="Level"
                :items="AppStore.state.levels"
                v-model="level"
                class="ml-2"
                style="max-width:200px"
            >
            </v-select>
            <v-select outlined dense hide-details rounded
                label="Grade"
                :items="gradeLevels"
                v-model="grade"
                item-text="grade"
                item-value="grade"
                style="max-width:200px;"
                class="ml-2"
            >
            </v-select>
            <!-- <v-btn color="primary" class="ml-2" @click="generate"
                :disabled="sy_id=='' || level==''">Generate</v-btn> -->
            <v-btn color="primary" class="ml-2" @click="print"
                :disabled="sy_id=='' || level==''">Print</v-btn>
        </v-app-bar>

        <!-- <v-container v-if="level!='Senior High'"> -->
        <v-container>
            <v-card class="pa-2" v-if="keys.length">
                <v-row>
                    <v-col cols="4">
                        <v-sheet style="background-colorx:blue;" align="right" justify="right">
                            <v-img src="/img/ca.jfif"
                                height="80"
                                width="80"
                            >
                            </v-img>
                        </v-sheet>
                    </v-col>
                    <v-col cols="4">
                        <v-sheet class="text-align-center" align="center" justify="center">
                            <div class="text-h6">List of Students</div>
                            <div class="">{{ level }}</div>
                            <div class="">{{ AdminSYStore.state.activeSY }}</div>
                            <br>

                        </v-sheet>
                    </v-col>
                    <v-col cols="4">

                    </v-col>
                </v-row>
                <br>
                <br>
                <v-card-text >
                    <v-row v-for="k in keys" :key="k">
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="12" class="mb-0 pb-0">
                                    <div class="text-h6" style="border-bottom: 1px solid #c2c2c2">
                                        {{ k }}
                                    </div>
                                </v-col>
                                <v-col cols="6" style="borderx:1px dotted #cccccc;" class="">
                                    <div class="font-weight-bold">
                                        Male
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr v-for="(s,index) in ReportsStore.state.studentEnrollment[k]['Male']"
                                                :key="index">
                                                <td>{{ index+1 }}</td>
                                                <td>{{ s.student_firstname }} {{ s.student_middle }} {{ s.student_lastname }} {{ s.student_extname }}</td>
                                                <td v-if="s.strand_name!=null">{{ s.strand_name }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                                <v-col cols="6" style="borderx:1px dotted #cccccc;" class="">
                                    <div class="font-weight-bold">
                                        Female
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr v-for="(s,index) in ReportsStore.state.studentEnrollment[k]['Female']"
                                                :key="index">
                                                <td>{{ index+1 }}</td>
                                                <td>{{ s.student_firstname }} {{ s.student_middle }} {{ s.student_lastname }} {{ s.student_extname }}</td>
                                                <td v-if="s.strand_name!=null">{{ s.strand_name }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                            </v-row>
                            <v-row class="pt-6">
                                <v-col cols="6">
                                    <div style="text-align:center">
                                        <p class="font-weight-bold pa-0 ma-0">
                                            {{ extractAdviserName(ReportsStore.state.studentEnrollment[k]).toUpperCase() }}
                                        </p>
                                        <p class="pa-0 ma-0"><small>Adviser</small></p>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <div style="text-align:center">
                                        <p class="font-weight-bold pa-0 ma-0">
                                            EMETERIO C. JAVINEZ JR.,LPT,MAED
                                        </p>
                                        <p class="pa-0 ma-0"><small>Principal</small></p>
                                    </div>
                                </v-col>
                            </v-row>
                            <br>
                        </v-col>
                    </v-row>
                </v-card-text>

            </v-card>
        </v-container>
        <!-- <v-container v-else>
            gg
        </v-container> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            sy_id: '',
            level: '',
            grade: '',
        };
    },

    computed:{
        keys() {
            return Object.keys(this.ReportsStore.state.studentEnrollment);
        },
        gradeLevels() {
            if(this.level!='') {
                return this.AppStore.state.gradeLevels.filter(e=>{
                    return e.level==this.level;
                })
            } else {
                return [];
            }
        },
    },

    methods:{
        generate() {
            // this.ReportsStore.studentEnrollment(24, 'Senior High')
            this.ReportsStore.studentEnrollment(this.sy_id, this.level, this.grade);
        },

        print() {
            this.AppStore.state.printMode=true;
            setTimeout(()=>{
                window.print();
            }, 100)
            setTimeout(()=>{
                this.AppStore.state.printMode=false;
            }, 1000)
        },

        extractAdviserName(obj) {
            const f = obj['Female'];
            const m = obj['Male'];
            console.log(f,m);
            if(f!=undefined) {
                return `${f[0].adviser_firstname} ${f[0].adviser_middlename} ${f[0].adviser_lastname}`;
            } else if(m!=undefined) {
                return `${m[0].adviser_firstname} ${m[0].adviser_middlename} ${m[0].adviser_lastname}`;
            }
        },

    },

    watch: {
        sy_id() {
            this.level = '';
        },
        level() {
            this.grade = '';
            if(this.level != '') {
                this.generate();
            }
        },
        grade() {
            if(this.grade != '') {
                this.generate();
            }
        }
    },

    created(){
        this.AdminSYStore.getSYs();
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
    table tr td {
        border: 1px solid #cccccc;
    }
    table tr td {
        padding: 5px;
    }
</style>
