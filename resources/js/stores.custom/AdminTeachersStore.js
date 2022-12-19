import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    teachers: [],
});


const actions = {
    async getTeachers() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/teachers/getTeachers`
        ).then(e=>{
            state.teachers = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
