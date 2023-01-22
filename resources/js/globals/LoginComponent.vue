<template>
    <v-sheet class="pa-4 rounded">
        <div class="d-flex mb-4 justify-center">
            <v-img
                lazy-src="/img/ca.jfif"
                max-height="80"
                max-width="80"
                src="/img/ca.jfif"
            ></v-img>
            <!-- <img src="/img/ca.jfif" alt="logo" srcset=""> -->
            &nbsp;
            <div class="pt-1">
                <div class="pa-0 text-h3 primary--text">{{ AppStore.state.appName }}</div>
                <div class="pa-0 text-caption primary--text">{{ AppStore.state.appLongName }}</div>
            </div>
        </div>
        <v-card max-width="" min-width="300" elevation="0">
            <v-card-title>
                <v-icon class="mr-2">mdi-login</v-icon>
                <span class="text-subtitle-1">Login</span>
            </v-card-title>
            <v-card-text>
                <v-alert dense type="error" dismissible transition="scale-transition"
                    v-if="error_username" text>
                    {{ error_username }} <br> {{ error_password }}
                </v-alert>
                <form method="POST" action="">
                    <input type="hidden" name="_token" :value="CsrfToken">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                label="Username"
                                outlined
                                name="username"
                                type="text"
                                :value="old_username"
                                requiredx
                                densex
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                outlined
                                name="password"
                                requiredx
                                densex
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                                autocomplete="false"
                            ></v-text-field>
                            <div class="float-right">
                                <v-btn @click.stop="isLogging=true" color="primary"
                                    type="submit" :loading="isLogging">Login</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </form>
            </v-card-text>
        </v-card>

    </v-sheet>
</template>

<script>
export default {
    props: {
        old_username: null,
        error_username: null,
        error_password: null,

    },
    data: () => ({
        isLogging: false,
        showPassword: false,
    }),

    watch: {

    },

    mounted() {
        console.log('LoginComponent mounted');
    }
};
</script>
