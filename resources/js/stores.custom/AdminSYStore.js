import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    sy: [],
    activeSY: null,
    activeSYid: null,

    prevSY:null,
    prevSYid:null,
});


const actions = {
    async activeSY() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/sy/activeSY`
        ).then(e=>{
            state.activeSY = e.data.sy;
            state.activeSYid = e.data.id;
        });
    },
    async prevSY() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/sy/prevSY`
        ).then(e=>{
            state.prevSY = e.data.sy;
            state.prevSYid = e.data.id;
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
