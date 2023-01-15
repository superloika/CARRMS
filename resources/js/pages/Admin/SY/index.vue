<template>
    <div>
        <v-app-bar app elevation="0">
            <v-toolbar-title>
                {{ $route.meta.name }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
                <v-btn icon color="primary" @click="AdminSYStore.state.tabsMain=0"
                    title="List"
                >
                    <v-icon>mdi-file-multiple</v-icon>
                </v-btn>
                <v-btn icon color="primary" @click="AdminSYStore.state.tabsMain=1"
                    title="Add"
                >
                    <v-icon>mdi-file-plus</v-icon>
                </v-btn>
            </div>
        </v-app-bar>

        <v-tabs-items v-model="AdminSYStore.state.tabsMain">
            <v-tab-item>
                <List></List>
            </v-tab-item>
            <v-tab-item>
                <Add></Add>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>

export default {
    components:{
        List: ()=>import('./List.vue'),
        Add: ()=>import('./Add.vue'),
    },
    data() {
        return {
        };
    }
};
</script>
