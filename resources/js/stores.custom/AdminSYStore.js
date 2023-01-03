import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    sy: [],
    activeSY: null,
});


const actions = {
    async activeSY() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/sy/activeSY`
        ).then(e=>{
            state.activeSY = e.data.sy;
        });
    },
    async getSYs() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/sy/getSYs`
        ).then(e=>{
            state.sy = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
