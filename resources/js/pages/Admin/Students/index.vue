<template>
    <div>
        <v-app-bar app elevation="0">
            <v-toolbar-title>
                {{ $route.meta.name }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
                <v-btn icon color="primary" @click="AdminStudentsStore.state.tabsMain=0"
                    title="Students List"
                >
                    <v-icon>mdi-file-multiple</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="AdminStudentsStore.state.tabsMain=1"
                    title="Add Student"
                >
                    <v-icon>mdi-file-plus</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="AdminStudentsStore.state.tabsMain=2"
                    title="Import Student List"
                >
                    <v-icon>mdi-import</v-icon>
                </v-btn>
            </div>
        </v-app-bar>

        <v-tabs-items v-model="AdminStudentsStore.state.tabsMain">
            <v-tab-item>
                <List></List>
            </v-tab-item>
            <v-tab-item>
                <Add></Add>
            </v-tab-item>
            <v-tab-item>
                <Import></Import>
            </v-tab-item>
            <v-tab-item>
                <Details></Details>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>

export default {
    components:{
        List: ()=>import('./List.vue'),
        Add: ()=>import('./Add.vue'),
        Import: ()=>import('./Import.vue'),
        Details: ()=>import('./Details.vue'),
    },
    data() {
        return {

        };
    }
};
</script>
