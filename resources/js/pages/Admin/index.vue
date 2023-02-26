<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3" lg="2">
                <v-card color="secondary" dark outlined>
                    <v-card-title>
                        Active S.Y.
                    </v-card-title>
                    <v-card-text>
                        <h3>{{ AdminSYStore.state.activeSY }}</h3>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- <v-col cols="12" md="3" lg="2">
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
            </v-col> -->
            <v-col cols="12" md="3" lg="2">
                <v-card color="success" dark outlined link to="enrollment/nursery">
                    <v-card-title>
                        Nursery
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ nursery.length }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3" lg="2">
                <v-card color="success" dark outlined link to="enrollment/kinder">
                    <v-card-title>
                        Kinder
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ kinder.length }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3" lg="2">
                <v-card color="success" dark outlined link to="enrollment/elementary">
                    <v-card-title>
                        Elementary
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ elementary.length }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3" lg="2">
                <v-card color="success" dark outlined link to="enrollment/jhs">
                    <v-card-title>
                        Junior High
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ jhs.length }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3" lg="2">
                <v-card color="success" dark outlined link to="enrollment/shs">
                    <v-card-title>
                        Senior High
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ shs.length }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    computed:{
        nursery() {
            try {
                return this.AdminEnrollmentStore.state.studentsEnrolled.filter(e=>{
                    return e.level=="Nursery"
                });
            } catch (error) {
                return [];
            }
        },
        kinder() {
            try {
                return this.AdminEnrollmentStore.state.studentsEnrolled.filter(e=>{
                    return e.level=="Kinder"
                });
            } catch (error) {
                return [];
            }
        },
        elementary() {
            try {
                return this.AdminEnrollmentStore.state.studentsEnrolled.filter(e=>{
                    return e.level=="Elementary"
                });
            } catch (error) {
                return [];
            }
        },
        jhs() {
            try {
                return this.AdminEnrollmentStore.state.studentsEnrolled.filter(e=>{
                    return e.level=="Junior High"
                });
            } catch (error) {
                return [];
            }
        },
        shs() {
            try {
                return this.AdminEnrollmentStore.state.studentsEnrolled.filter(e=>{
                    return e.level=="Senior High"
                });
            } catch (error) {
                return [];
            }
        },
    },
    created() {
        // this.AdminStudentsStore.getStudents();
        // this.AdminAdvisersStore.getTeachers();
        // this.AdminAdvisersStore.getAdvisers();

        this.AdminEnrollmentStore.getStudentsEnrolled(
            this.AdminSYStore.state.activeSYid,
            null,
            null
        );
    },
    beforeDestroy() {
        this.AdminEnrollmentStore.state.studentsEnrolled = [];
    }
}
</script>
