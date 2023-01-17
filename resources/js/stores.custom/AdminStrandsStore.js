import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    strands: [],
});


const actions = {
    async getStrands() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/strands/getStrands`
        ).then(e=>{
            state.strands = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
