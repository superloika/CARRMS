<template>
    <div>
        <v-app-bar app elevation="0">
            <v-toolbar-title>
                {{ gradeAndSection }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
                <v-btn text color="primary"
                    title="Dashboard" link to="/adviser/dashboard"
                >
                    <v-icon>mdi-cube</v-icon> Go back to Dashboard
                </v-btn>
            </div>
        </v-app-bar>

        <List></List>
    </div>
</template>

<script>

export default {
    components:{
        List: ()=>import('./List.vue'),
    },
    data() {
        return {
        };
    },
    computed:{
        gradeAndSection() {
            return this.AdviserEnrollmentStore.state.sectionDetails.grade +
                ' - ' +  this.AdviserEnrollmentStore.state.sectionDetails.section;
        },
    },

    created() {
        this.AdviserEnrollmentStore.getSectionDetails(this.$route.params.head_id);
        this.AdviserEnrollmentStore.getSections();
        this.AdviserEnrollmentStore.getStudents(this.$route.params.head_id);
    },

    beforeDestroy() {
        this.AdviserEnrollmentStore.state.sectionDetails = {};
        this.AdviserEnrollmentStore.state.sectionStudents = [];
    }
};
</script>
