<template>
    <div>
        <v-app-bar app elevation="0">
            <v-toolbar-title>
                {{ $route.meta.name }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
                <v-btn icon color="primary" @click="AdminEnrollmentStore.state.tabsMain[level]=0"
                    title="Enrolled Students List"
                >
                    <v-icon>mdi-file-multiple</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="AdminEnrollmentStore.state.tabsMain[level]=1"
                    title="Add Enrollment Data"
                >
                    <v-icon>mdi-file-plus</v-icon>
                </v-btn>
            </div>
        </v-app-bar>

        <v-tabs-items v-model="AdminEnrollmentStore.state.tabsMain[level]">
            <v-tab-item>
                <List></List>
            </v-tab-item>
            <v-tab-item>
                <Add></Add>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>

export default {
    components:{
        List: ()=>import('./List.vue'),
        Add: ()=>import('./Add.vue'),
    },
    data() {
        return {
        };
    },
    computed:{
        level() {
            return this.$route.meta.level;
        }
    },
    watch: {
        level() {
            this.AdminEnrollmentStore.state.studentsForEnrollment = [];
            this.AdminEnrollmentStore.state.studentsEnrolled = [];
            this.AdminEnrollmentStore.state.tabsMain = {
                'Nursery': 0,
                'Kinder': 0,
                'Elementary': 0,
                'Junior High': 0,
                'Senior High': 0,
            };
        }
    },

    created() {
        // this.AdminStudentsStore.getStudents();
        this.AdminSectionsStore.getSections();
        this.AdminStrandsStore.getStrands();
    },
    mounted() {
        console.log('Enrollment component mounted: ' + this.level);
    },
    beforeDestroy() {
        this.AdminEnrollmentStore.state.studentsForEnrollment = [];
        this.AdminEnrollmentStore.state.studentsEnrolled = [];
        this.AdminEnrollmentStore.state.tabsMain = {
            'Nursery': 0,
            'Kinder': 0,
            'Elementary': 0,
            'Junior High': 0,
            'Senior High': 0,
        };
    }
};
</script>
