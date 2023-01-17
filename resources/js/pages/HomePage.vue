<template>
<v-container>

</v-container>
</template>

<script>
// import UnitStore from '../stores.custom/UnitStore';

export default {
    data() {
        return {

        }
    },

    created() {
        // UnitStore.initUnits();
    },

    mounted() {
        console.log("HomePage component mounted.");
        console.log(this.AppStore.state.strDate);
    }
};
</script>
