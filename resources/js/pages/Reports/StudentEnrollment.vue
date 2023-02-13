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
                <v-sheet class="text-align-center" align="center" justify="center">
                    <div class="text-h6">List of Students</div>
                    <div class="">{{ level }}</div>
                    <div class="">{{ AdminSYStore.state.activeSY }}</div>
                    <br>
                    <v-divider></v-divider>
                </v-sheet>
                <v-card-text >
                    <v-row v-for="k in keys" :key="k">
                        <v-col>
                            <v-row>
                                <v-col xs="12" sm="12" md="12" lg="12" class="mb-0 pb-0">
                                    <div class="text-h6">
                                        {{ k }}
                                    </div>
                                </v-col>
                                <v-col xs="6" sm="6" md="6" lg="6" style="borderx:1px dotted #cccccc;" class="">
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
                                <v-col xs="6" sm="6" md="6" lg="6" style="borderx:1px dotted #cccccc;" class="">
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
        }
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
