<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title>
                {{ $route.meta.name }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
                <v-btn icon color="primary" @click="AdminTeachersStore.state.tabsMain=0"
                    title="Teachers List"
                >
                    <v-icon>mdi-file-outline</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="AdminTeachersStore.state.tabsMain=1"
                    title="Add Teacher"
                >
                    <v-icon>mdi-file-plus-outline</v-icon>
                </v-btn>
            </div>
        </v-app-bar>

        <v-tabs-items v-model="AdminTeachersStore.state.tabsMain">
            <v-tab-item>
                <TeacherList></TeacherList>
            </v-tab-item>
            <v-tab-item>
                <TeacherAdd></TeacherAdd>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import { cancel } from "raf";

export default {
    components:{
        TeacherList: ()=>import('./TeacherList.vue'),
        TeacherAdd: ()=>import('./TeacherAdd.vue'),
    },
    data() {
        return {
        };
    }
};
</script>
