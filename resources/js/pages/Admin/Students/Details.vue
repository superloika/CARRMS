<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Student Details
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" @click="updateStudent()">
                <v-icon>mdi-floppy</v-icon> Update
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-text-field
                label="LRN"
                v-model="form.lrn"
                outlined densex filledx
            ></v-text-field>
            <v-text-field
                label="First Name"
                v-model="form.firstname"
                outlined densex filledx
            ></v-text-field>
            <v-text-field
                label="Middle Name"
                v-model="form.middlename"
                outlined densex filledx
            ></v-text-field>
            <v-text-field
                label="Last Name"
                v-model="form.lastname"
                outlined densex filledx
            ></v-text-field>
            <v-text-field
                label="Extension Name"
                v-model="form.extname"
                outlined densex filledx
            ></v-text-field>
            <v-radio-group v-model="form.gender" row>
                <template v-slot:label>
                    <div>Gender</div>
                </template>
                <v-radio label="Male" value="Male"></v-radio>
                <v-radio label="Female" value="Female"></v-radio>
            </v-radio-group>
            <v-menu
                ref="dobMenu"
                v-model="dobMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="form.dob"
                        label="Date of Birth"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined densex filledx
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="form.dob"
                    :active-picker.sync="dobActivePicker"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="saveDOB"
                ></v-date-picker>
            </v-menu>
            <v-text-field
                label="Place of Birth"
                v-model="form.pob"
                outlined densex filledx
            ></v-text-field>
            <v-text-field
                label="Address"
                v-model="form.address"
                outlined densex filledx
            ></v-text-field>
            <v-text-field
                label="Parent/Guardian"
                v-model="form.guardian"
                outlined densex filledx
            ></v-text-field>
            <v-text-field
                label="Parent/Guardian Address"
                v-model="form.guardian_address"
                outlined densex filledx
            ></v-text-field>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                id: '',
                lrn: '',
                firstname: '',
                middlename: '',
                lastname: '',
                extname: '',
                gender: '',
                dob: '',
                pob: '',
                address: '',
                guardian: '',
                guardian_address: '',
            },
            //dob
            dob: null,
            dobActivePicker: null,
            dobMenu: false,
        };
    },

    watch: {
        dobMenu(val){
            val && setTimeout(() => (this.dobActivePicker = 'YEAR'));
        },

        student_id() {
            this.edit();
        }
    },

    methods: {
        saveDOB(date) {
            this.$refs.dobMenu.save(date);
        },

        async updateStudent() {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/students/updateStudent`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,3000,'success');
                // this.resetForm(this.form);
                this.AdminStudentsStore.getStudents();
            }).catch(e=>{
                if(e.response) {
                    this.AppStore.toast(e.response.data,3000,'error');
                }
            })
            ;
        },

        edit() {
            const student = this.AdminStudentsStore.state.students.filter(e=>{
                return e.id == this.student_id;
            });

            this.form.id = student[0].id;
            this.form.lrn = student[0].lrn;
            this.form.firstname = student[0].firstname;
            this.form.middlename = student[0].middlename;
            this.form.lastname = student[0].lastname;
            this.form.extname = student[0].extname;
            this.form.gender = student[0].gender;
            this.form.dob = student[0].dob;
            this.form.pob = student[0].pob;
            this.form.address = student[0].address;
            this.form.guardian = student[0].guardian;
            this.form.guardian_address = student[0].guardian_address;
        }
    },

    computed: {
        student_id() {
            return this.AdminStudentsStore.state.studentDetailsID;
        }
    },

    created() {
        this.edit();
    }

};
</script>
