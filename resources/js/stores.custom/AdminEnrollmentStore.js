import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: {
        'Preschool': 0,
        'Kinder': 0,
        'Elementary': 0,
        'Junior High': 0,
        'Senior High': 0,
    },
    sections: [],
});


const actions = {
    async getxxx() {
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
