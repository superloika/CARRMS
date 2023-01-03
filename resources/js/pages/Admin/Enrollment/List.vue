<template>
    <div>
        <v-app-bar>
            <v-toolbar-title class="text-overline font-weight-bold">
                Enrollment Data
                <v-chip small color="accent">
                    {{ AdminSYStore.state.activeSY }}
                </v-chip>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                class=""
                placeholder="Search"
                style="max-width:200px;"
                clearable
                hide-details
                solo-inverted
                rounded
                dense
                flat
                v-model="searchKey"
            ></v-text-field>
        </v-app-bar>

        <v-data-table
            :headers="tblHeaders"
            :items="[]"
            class="elevation-1"
            pagination.sync="pagination"
            :search="searchKey"
        >
            <template v-slot:[`item.actions`]="{item}">
                <v-btn small color="primary" title="Edit" disabled>
                    <v-icon>mdi-pencil</v-icon> Edit
                </v-btn>
                <v-btn small color="error" title="Delete" @click="deleteSection(item.id)">
                    <v-icon>mdi-delete</v-icon> Delete
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchKey: "",
            tblHeaders: [
                { text: "Section Name", value: "section" },
                { text: "Actions", value: "actions" },
            ],
        };
    },

    methods:{

    },

    created(){
        this.AdminSectionsStore.getSections();
    }
};
</script>
