<template>
    <v-list shaped dense>
        <v-list-item-group color="accent lighten-3">
            <v-list-item link to="/adviser/dashboard">
                <v-list-item-icon class="mr-2">
                    <v-icon>mdi-cube</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-group no-action color="dark">
                <template v-slot:activator>
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Reports</v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item link to="/reports/list-of-students">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>List of Students</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/reports/permarecord">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Student Permanent Record</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>

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
    }
};
</script>
