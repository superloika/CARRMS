<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add School Year
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense icon color="primary" @click="saveSY()">
                <v-icon>mdi-floppy</v-icon>
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-text-field
                label="School Year"
                v-model="form.sy"
                outlined
            ></v-text-field>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                sy: '',
            },
        };
    },

    methods: {

        async saveSY() {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/sy/saveSY`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,3000,'success');
                this.resetForm(this.form);
                this.AdminSYStore.getSYs();
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
