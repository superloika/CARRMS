import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    students: [],
});


const actions = {
    async getStudents() {
        await axios.get(
            `${AppStore.state.siteUrl}admin/students/getStudents`
        ).then(e=>{
            state.students = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
