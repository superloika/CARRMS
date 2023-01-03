import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    sections: [],
});


const actions = {
    async getSections() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/sections/getSections`
        ).then(e=>{
            state.sections = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
