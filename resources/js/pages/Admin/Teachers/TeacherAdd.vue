<template>
    <div>
        <v-app-bar dense>
            <v-toolbar-title class="text-overline primary--text">
                Add Teacher
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense icon color="primary" @click="saveTeacher()">
                <v-icon>mdi-floppy</v-icon>
            </v-btn>
        </v-app-bar>

        <v-container>
            <v-text-field
                label="First Name"
                v-model="form.firstname"
                outlined dense filled
            ></v-text-field>
            <v-text-field
                label="Middle Name"
                v-model="form.middlename"
                outlined dense filled
            ></v-text-field>
            <v-text-field
                label="Last Name"
                v-model="form.lastname"
                outlined dense filled
            ></v-text-field>
            <v-radio-group v-model="form.gender" row>
                <template v-slot:label>
                    <div>Gender</div>
                </template>
                <v-radio label="Male" value="Male"></v-radio>
                <v-radio label="Female" value="Female"></v-radio>
            </v-radio-group>
            <v-text-field
                label="Address"
                v-model="form.address"
                outlined dense filled
            ></v-text-field>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                firstname: '',
                middlename: '',
                lastname: '',
                gender: '',
                address: '',
            },
        };
    },

    watch: {

    },

    methods: {
        async saveTeacher() {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/teachers/saveTeacher`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,3000,'success');
                this.resetForm(this.form);
                this.AdminTeachersStore.getTeachers();
            }).catch(e=>{
                if(e.response) {
                    this.AppStore.toast(e.response.data,3000,'error');
                }
            })
            ;
        },

        resetForm(obj) {
            let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
            setAll(obj, "");
        }
    }
};
</script>
