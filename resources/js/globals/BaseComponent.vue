<template>
    <v-app>
        <!-- <v-system-bar app>
            <v-btn
                @click="toggleDrawerState()"
                icon
            >&#9776;</v-btn>

            <v-toolbar-title class="ml-1">
                <a href="/" style="text-decoration:none;" class="white--text">
                    {{ AppStore.state.appName }}
                </a>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <span class="text-caption white--text mr-3 overflow-auto">
                Howdy, {{ AuthUser.name }}!
            </span>

            <UserMenu></UserMenu>

            <v-progress-linear
                :indeterminate="AppStore.state.showTopLoading"
                :active="AppStore.state.showTopLoading"
                absolute
                bottom
                stream
                color="white"
            ></v-progress-linear>
        </v-system-bar> -->

        <!-- top error bar (supposed to be) -->
        <!-- <v-system-bar v-if="AppStore.state.errorBar.show"
            height="20" color="red darken-4" app dark elevation="1">
            {{ AppStore.state.errorBar.msg }}
        </v-system-bar> -->

        <!-- SIDE NAV -->
        <v-navigation-drawer v-model="navDrawerState" app color="primary darken-1" dark
            v-if="AppStore.state.printMode==false"
        >
            <v-list color="primary darken-1">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6" dark>
                            {{ AppStore.state.appName }}
                        </v-list-item-title>

                        <small class="" dark>
                            {{ AppStore.state.appLongName }}
                        </small>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <UserMenu></UserMenu>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <!-- Side Navigation (Main Nav) -->
            <NavSideAdmin v-if="AppStore.isSuperAdmin() || AppStore.isAdmin()"></NavSideAdmin>
            <NavSideAdviser v-else-if="AppStore.isAdviser()"></NavSideAdviser>

            <!-- Side Nav Footer -->
            <template v-slot:append>
                <v-footer color="primary">
                    <v-col class="pa-0">
                        <div class="text-caption" >
                            <div>
                                Prev SY: {{ AdminSYStore.state.prevSY}}
                            </div>
                            <div>
                                Active SY: {{ AdminSYStore.state.activeSY}}
                            </div>
                        </div>
                    </v-col>
                </v-footer>
            </template>
        </v-navigation-drawer>


        <!-- MAIN -->
        <v-main>
            <v-container class="pa-0" fluid>
                <!-- <keep-alive> -->
                    <router-view></router-view>
                <!-- </keep-alive> -->
            </v-container>

        </v-main>

        <!-- MISC -->
        <v-snackbar
            v-model="AppStore.state.snackBar.show"
            :timeout="AppStore.state.snackBar.timeout"
            top center
            :color="AppStore.state.snackBar.color"
        >
            {{ AppStore.state.snackBar.text }}
        </v-snackbar>

        <v-overlay
            :value="AppStore.state.overlay.show"
            z-index="999999"
            opacity="0.2"
        >
            <v-chip>
                <v-progress-circular
                    :value="64"
                    indeterminate
                    size="20"
                ></v-progress-circular>
                &nbsp;
                {{ AppStore.state.overlay.msg }}
            </v-chip>
        </v-overlay>


    </v-app>
</template>

<script>
import NavSideAdmin from './NavSideAdmin.vue';
import NavSideAdviser from './NavSideAdviser.vue';


export default {
    components: { NavSideAdmin, NavSideAdviser },
    data: () => ({
        navDrawerState: null,
    }),
    // computed: {
    // },
    methods: {
        toggleDrawerState() {
            this.navDrawerState = !this.navDrawerState;
        },
    },
    watch: {},
    mounted() {
        console.log("BaseComponent mounted");
        if(this.$route.meta.name=='Home') {
            if(this.AuthUser.user_type=='super_admin' || this.AuthUser.user_type=='admin') {
                this.$router.replace('admin/dashboard');
            } else {
                this.$router.replace('adviser/dashboard');
            }
        }
    },

    created() {
        this.AdminSYStore.activeSY();
        this.AdminSYStore.prevSY();
    }
};
</script>

<style>
    .v-toolbar__content {
        /* border-bottom: 1px solid #222222; */
        /* border-bottom: 1px solid #e9e9e9; */
    }

    .search-field{
        border: 1px solid #f1f1f1;
    }

    /* .v-data-table__wrapper table tbody tr{

    } */
    .v-data-table__wrapper table tbody tr td.text-start{
        /* color: #222222; */
        /* font-size: 12px; */
    }

    .theme--dark.v-data-table
    > .v-data-table__wrapper
    > table
    > tbody
    > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
        background-color: #000000;
    }

    div.v-tab {
        padding: 0px 5px;
    }

</style>
