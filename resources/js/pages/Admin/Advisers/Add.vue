<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add Adviser
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" title="Save" @click="saveAdviser()">
                <v-icon>mdi-floppy</v-icon> Save
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
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
        async saveAdviser() {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/advisers/saveAdviser`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,3000,'success');
                this.resetForm(this.form);
                this.AdminAdvisersStore.getAdvisers();
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
