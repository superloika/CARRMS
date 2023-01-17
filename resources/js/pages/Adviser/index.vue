<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" v-for="section in this.AdviserEnrollmentStore.state.sections"
                :key="section.section_id"
            >
                <v-card color="success" dark outlined link>
                    <v-card-title>

                        {{ section.level }}
                    </v-card-title>
                    <v-card-text>
                        <h1>{{ section.grade }} - {{ section.section }}</h1>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
export default {
    created() {
        this.AdviserEnrollmentStore.getSections(
            this.AdminSYStore.state.activeSYid,
            this.AuthUser.adviser_id
        );
    }
}
</script>
