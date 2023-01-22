<template>
    <v-list shaped dense>
        <v-list-item-group color="accent lighten-3">
            <v-list-item link to="/admin/dashboard">
                <v-list-item-icon class="mr-2">
                    <v-icon>mdi-cube</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <!-- <v-list-item link to="/admin/enrollment">
                <v-list-item-icon class="mr-2">
                    <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Enrollment Data</v-list-item-title>
                </v-list-item-content>
            </v-list-item> -->

            <v-list-group no-action color="dark">
                <template v-slot:activator>
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Enrollment Data</v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item link to="/admin/enrollment/nursery">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Nursery</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/admin/enrollment/kinder">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Kinder</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/admin/enrollment/elementary">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Elementary</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/admin/enrollment/jhs">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Junior High</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link to="/admin/enrollment/shs">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Senior High</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>

            <v-list-group no-action color="dark">
                <template v-slot:activator>
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-cog</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Setup</v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item link to="/admin/students">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Students</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/admin/sy">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-cube</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>School Year</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/admin/strands">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-cube</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Strands</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/admin/subjects">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-cube</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Subjects</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/admin/subtags">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-cube</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Subject Taggings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/admin/advisers">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Advisers</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/admin/sections">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Sections</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>

            <v-list-group no-action color="dark">
                <template v-slot:activator>
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Reports</v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item link to="/admin/reports/list-of-students">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>List of Students</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>

            <v-divider class="mt-2 mb-2"></v-divider>

            <v-list-item link to="/about">
                <v-list-item-icon class="mr-2">
                    <v-icon>mdi-information</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    mounted() {
        console.log("NavSide mounted");
    },
    computed: {
        current_route() {
            return this.$route.path;
        }
    },

    watch: {
        current_route() {
            this.AppStore.getNotifs(0);
        }
    },

    created() {
        this.AppStore.getNotifs(0);
    }
};
</script>
