<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title>
                {{ $route.meta.name }}
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div>
                <v-btn color="primary" @click="AdminAdvisersStore.state.tabsMain=0"
                    title="Advisers List"
                >
                    <v-icon>mdi-file-outline</v-icon> List
                </v-btn>
                <v-btn color="primary" @click="AdminAdvisersStore.state.tabsMain=1"
                    title="Add Adviser"
                >
                    <v-icon>mdi-file-plus-outline</v-icon> Add
                </v-btn>
            </div>
        </v-app-bar>

        <v-tabs-items v-model="AdminAdvisersStore.state.tabsMain">
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
