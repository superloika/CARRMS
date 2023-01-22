<template>
    <v-container>
        <div class="text-h5 primary--text mb-4">Notifications</div>
        <v-row>
            <v-col md="12" v-for="n in AppStore.state.notifs" :key="n.id">
                <v-card>
                    <v-card-text>
                        {{ n.message }}
                        <br>
                        <em><small>{{ n.created_at }}</small></em>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="primary" @click="markRead(n.id)">Mark as read</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <div v-if="!this.AppStore.state.notifs.length" class="mt-4 primary--text">
            <em>No unread notifications</em>
        </div>
    </v-container>
</template>

<script>
    export default {
        methods: {
            async markRead(id) {
                await axios.post(
                    `${this.AppStore.state.siteUrl}admin/notifs/markRead`,
                    {
                        id: id
                    }
                ).then(e=>{
                    this.AppStore.getNotifs(0);
                });
            }
        },
        mounted() {
            console.log('Notifs page mounted.');
        }
    }
</script>
