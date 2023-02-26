import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    tabsMain: 0,
    students: [],

    studentDetailsID: null,
});


const actions = {
    async getStudents(level='') {
        await axios.get(
            `${AppStore.state.siteUrl}admin/students/getStudents?level=${level}`
        ).then(e=>{
            state.students = e.data;
        });
    },
};

export default {
    state,
    ...actions
};
