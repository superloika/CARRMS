<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline primary--text">
                Import Student List
            </v-toolbar-title>
            <v-spacer></v-spacer>

        </v-app-bar>

        <v-container class="pt-6">
            <v-row>
                <v-col md="10">
                    <v-file-input
                        accept=".txt"
                        placeholder="Select textfile"
                        prepend-icon="mdi-file"
                        label="Import textfile"
                        show-size
                        outlined
                        dense
                        v-model="file" :disabled="isImporting"
                    ></v-file-input>
                </v-col>
                <v-col md="2">
                    <v-btn color="primary" @click="importFile"
                        :disabled="isImporting || file==null || file==''" :loading="isImporting">Import</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isImporting: false,
            file: null,
        };
    },

    methods: {
        async importFile() {
            this.isImporting = true;
            console.log(this.file);
            // return;
            let data = new FormData();
            data.append('file', this.file);
            // for(let i=0;i<this.file.length;i++) {
            //     data.append('files[' + i + ']', this.file[i]);
            // }

            await axios.post(
                `${this.AppStore.state.siteUrl}admin/students/import`,
                data,
                {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
            ).then(e=>{
                this.AppStore.toast(e.data,3000,'success');
                this.file = null;
                this.AdminStudentsStore.getStudents();
                this.isImporting = false;
            }).catch(e=>{
                if(e.response) {
                    this.AppStore.toast(e.response.data,3000,'error');
                }
            })
            ;
        },

        onChange(e) {
            console.log(e.target.files[0]);
            this.form.file = e.target.files[0]
        }
    }
};
</script>
