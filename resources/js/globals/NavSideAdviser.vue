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
