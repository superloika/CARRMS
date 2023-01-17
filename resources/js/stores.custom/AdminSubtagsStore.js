import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    subtags: [],
});


const actions = {
    async getSubtags() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/subtags/getSubtags`
        ).then(e=>{
            state.subtags = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
