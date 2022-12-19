<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title>
                {{ $route.meta.name }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
                <v-btn icon color="primary" @click="AdminStudentsStore.state.tabsMain=0"
                    title="Students List"
                >
                    <v-icon>mdi-file-outline</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="AdminStudentsStore.state.tabsMain=1"
                    title="Add Student"
                >
                    <v-icon>mdi-file-plus-outline</v-icon>
                </v-btn>
            </div>
        </v-app-bar>

        <v-tabs-items v-model="AdminStudentsStore.state.tabsMain">
            <v-tab-item>
                <StudentList></StudentList>
            </v-tab-item>
            <v-tab-item>
                <StudentAdd></StudentAdd>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import { cancel } from "raf";

export default {
    components:{
        StudentList: ()=>import('./StudentList.vue'),
        StudentAdd: ()=>import('./StudentAdd.vue'),
    },
    data() {
        return {
        };
    }
};
</script>
