<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Add Strand
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dense iconx text color="primary" @click="saveStrand()">
                <v-icon>mdi-floppy</v-icon> Save
            </v-btn>
        </v-app-bar>

        <v-container class="pt-6">
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        label="Strand Name"
                        v-model="form.strand_name"
                        outlined densex
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="8">
                    <v-text-field
                        label="Strand Description"
                        v-model="form.strand_description"
                        outlined densex
                    ></v-text-field>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>


<script>
export default {
    data() {
        return {
            form: {
                strand_name: '',
                strand_description: '',
            },
        };
    },

    methods: {
        async saveStrand() {
            await axios.post(
                `${this.AppStore.state.siteUrl}admin/strands/saveStrand`,
                {
                    data: this.form
                }
            ).then(e=>{
                this.AppStore.toast(e.data,2000,'success');
                this.AppStore.resetForm(this.form);
                this.AdminStrandsStore.getStrands();
            }).catch(e=>{
                if(e.response) {
                    console.log(e.response);
                    this.AppStore.toast("An error has occured",3000,'error');
                }
            })
            ;
        },
    }
};
</script>
