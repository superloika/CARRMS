<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3" lg="2">
                <v-card color="primary" dark outlined>
                    <v-card-title>
                        Students
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ AdminStudentsStore.state.students.length }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3" lg="2">
                <v-card color="primary" dark outlined>
                    <v-card-title>
                        Advisers
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ AdminAdvisersStore.state.advisers.length }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    created() {
        this.AdminStudentsStore.getStudents();
        // this.AdminAdvisersStore.getTeachers();
        this.AdminAdvisersStore.getAdvisers();
    }
}
</script>
