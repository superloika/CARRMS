import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    advisers: [],
});


const actions = {
    async getAdvisers() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/advisers/getAdvisers`
        ).then(e=>{
            state.advisers = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
