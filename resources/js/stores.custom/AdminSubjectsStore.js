import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    subjects: [],
});


const actions = {
    async getSubjects() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/subjects/getSubjects`
        ).then(e=>{
            state.subjects = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
