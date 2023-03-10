<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Assign Student/s
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary"
                :disabled="btnSaveStatus"
                @click="saveStudentEnrollment"
            >
                <v-icon>mdi-floppy</v-icon> Save
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-row>
                <v-col cols="12" md="9">
                    <v-row>
                        <v-col>
                            <v-select outlined densex filledx label="Add to Grade & Section"
                                v-model="selectedSection"
                                :items="sections"
                                item-value="id"
                                return-object
                                hint="Only the sections with a class adviser are selectable"
                                persistent-hint
                                v-on:input="onChangeGradeSection"
                            >
                                <template slot="item" slot-scope="data">
                                    {{ data.item.grade }} - {{ data.item.section }}
                                </template>
                                <template slot="selection" slot-scope="data">
                                    {{ data.item.grade }} - {{ data.item.section }}
                                </template>
                            </v-select>
                        </v-col>

                        <v-col cols="5" v-if="level=='Senior High'">
                            <v-select outlined densex filledx label="Select Strand"
                                v-model="selectedStrand"
                                :items="strands"
                                item-value="id"
                                return-object
                            >
                                <template slot="item" slot-scope="data">
                                    {{ data.item.strand_name }}
                                </template>
                                <template slot="selection" slot-scope="data">
                                    {{ data.item.strand_name }}
                                </template>
                            </v-select>
                        </v-col>


                        <!-- SELECT STUDENTS -->
                        <v-col cols="12" md="12">
                            <v-card :key="level">
                                <v-toolbar elevation="0">
                                    <v-text-field
                                        hide-details dense flat solo-inverted rounded
                                        placeholder="Search student(s) to add"
                                        v-model="tblLeftSearch"
                                        style="max-width:300px;"
                                    >
                                    </v-text-field>
                                </v-toolbar>
                                <v-card-text>
                                    <v-data-table
                                        :headers="[
                                            {text:'SID',value:'id'},
                                            {text:'First Name',value:'firstname'},
                                            {text:'Middle Name',value:'middlename'},
                                            {text:'Last Name',value:'lastname'},
                                            //{text:'Ext. Name',value:'extname'},
                                            {text:'Actions',value:'actions'},
                                        ]"
                                        :items="students"
                                        v-model="selectedToAdd"
                                        :search="tblLeftSearch"
                                        show-select
                                    >
                                        <template v-slot:[`item.name`]="{item}">
                                            {{ item.firstname }} {{ item.middlename }} {{ item.lastname }}
                                        </template>

                                        <template v-slot:[`item.actions`]="{item}">
                                            <v-btn iconx small text color="primary" title="View"
                                                @click.stop="
                                                    viewDialog(
                                                        item.enrollment_line_id,
                                                        item.enrollment_head_id,
                                                        `${item.firstname} ${item.middlename} ${item.lastname}`
                                                    )
                                                "
                                            >
                                                <v-icon>mdi-eye</v-icon> View Previous Record
                                            </v-btn>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>

                <!-- SELECTED STUDENTS -->
                <v-col cols="12" md="3">
                    <v-card :key="level">
                        <v-toolbar elevation="0">
                            <v-toolbar-title>
                                Selected Students
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-data-table
                                :headers="[
                                    {text:'Student Name',value:'name'},
                                ]"
                                :items="selectedToAdd"
                                :items-per-page="-1"
                                :search="tblRightSearch"
                                hide-default-footer
                            >
                                <template v-slot:[`item.name`]="{item}">
                                    {{ item.firstname }} {{ item.middlename }} {{ item.lastname }}
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            selectedSection: null,
            selectedStrand: null,
            selectedToAdd: [],
            tblLeftSearch: '',
            tblRightSearch: '',
        };
    },

    computed: {
        sections() {
            return this.AdminSectionsStore.state.sections.filter(e=>{
                return e.adviser_id != null && e.level==this.level;
            });
        },
        level() {
            return this.$route.meta.level;
        },
        students() {
            return this.AdminEnrollmentStore.state.studentsForEnrollment;
        },
        strands() {
            return this.AdminStrandsStore.state.strands;
        },

        btnSaveStatus() {
            return !this.selectedToAdd.length || this.selectedSection==null
                || (this.level=='Senior High' && this.selectedStrand==null)
            ;
        }
    },

    watch: {
        level() {
            this.selectedSection=null;
            this.selectedToAdd=[];
        }
    },

    methods: {
        async saveStudentEnrollment() {
            console.log(this.selectedSection);
            console.log(this.selectedToAdd);
            console.log(this.AdminSYStore.state.activeSY);

            const selectedStrandId = this.selectedStrand!=null?this.selectedStrand.id:null;

            await axios.post(
                `${this.AppStore.state.siteUrl}admin/enrollment/saveStudentEnrollment`,
                {
                    head: {
                        sy_id: this.AdminSYStore.state.activeSYid,
                        adviser_id: this.selectedSection.adviser_id,
                        section_id: this.selectedSection.id,
                        grade: this.selectedSection.grade,
                        strand_id: selectedStrandId,
                    },
                    line: this.selectedToAdd.map(e=>{
                        return e.id
                    })
                }
            ).then(e=>{
                this.AppStore.toast(e.data,2000,'success');
                this.AdminEnrollmentStore.getStudentsForEnrollment(this.selectedSection.grade);
                this.selectedToAdd = [];
                this.selectedStrand = null;
                this.AdminSectionsStore.getSections();
            }).catch(e=>{
                if(e.response) {
                    this.AppStore.toast(e.response.data,3000,'error');
                }
            })
            ;
        },
        onChangeGradeSection(section) {
            console.log(section);
            this.selectedToAdd = [];
            this.selectedStrand = null;
            this.AdminEnrollmentStore.getStudentsForEnrollment(section.grade);
        },
        viewDialog(enrollment_line_id,enrollment_head_id, studentName) {
            this.AdminEnrollmentStore.state.selectedELID=enrollment_line_id;
            this.AdminEnrollmentStore.state.studentName = studentName;
            this.AdminEnrollmentStore.state.viewDialog=true;
            this.AdviserEnrollmentStore.getSectionDetails(enrollment_head_id);
        }
    },

    created() {
    }
};
</script>
