<template>
    <v-card outlined>
        <!-- <v-card-title class="grey lighten-5"> -->
        <v-card-title>
            <span>Edit Account: {{ ManageAccounts.state.toEdit.name }} ({{
                    ManageAccounts.state.toEdit.username
                }})
            </span>
            <v-spacer></v-spacer>
            <v-btn icon @click="ManageAccounts.state.modalEditIsOpen = false">
                <v-icon>mdi-close-box-outline</v-icon>
            </v-btn>
        </v-card-title>
        <v-tabs v-model="tab">
            <v-tab>
                Profile
            </v-tab>
            <v-tab>
                Password
            </v-tab>
        </v-tabs>
        <v-card-text>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <br />
                    <AccountsEditProfile></AccountsEditProfile>
                </v-tab-item>
                <v-tab-item>
                    <br />
                    <AccountsEditPassword></AccountsEditPassword>
                </v-tab-item>
            </v-tabs-items>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    components: {
        AccountsEditProfile: () => import("./AccountsEditProfile.vue"),
        AccountsEditPassword: () => import("./AccountsEditPassword.vue"),
    },
    data() {
        return {
            tab: null
        };
    },
};
</script>
