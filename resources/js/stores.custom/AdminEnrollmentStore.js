import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";
import AdminSYStore from "./AdminSYStore";

const state = Vue.observable({
    tabsMain: {
        'Nursery': 0,
        'Kinder': 0,
        'Elementary': 0,
        'Junior High': 0,
        'Senior High': 0,
    },
    studentsForEnrollment: [],
    studentsEnrolled: [],

    viewDialog: null,
    selectedELID: null,
});


const actions = {
    async getStudentsForEnrollment(grade) {
        console.log('prevSYid:', AdminSYStore.state.prevSYid);
        console.log('activeSYid:', AdminSYStore.state.activeSYid);
        state.studentsForEnrollment = [];
        await axios.post(
            `${AppStore.state.siteUrl}admin/enrollment/getStudentsForEnrollment`,
            {
                grade: grade,
                prevSYid: AdminSYStore.state.prevSYid ?? null,
                activeSYid: AdminSYStore.state.activeSYid,
            }
        ).then(e=>{
            state.studentsForEnrollment = e.data;
        });
    },
    async getStudentsEnrolled(sy_id, section_id, level) {
        state.studentsEnrolled = [];
        await axios.post(
            `${AppStore.state.siteUrl}admin/enrollment/getStudentsEnrolled`,
            {
                sy_id: sy_id,
                section_id: section_id,
                level: level
            }
        ).then(e=>{
            state.studentsEnrolled = e.data;
            console.log(e.data)
        });
    }
};

export default {
    state,
    ...actions
};
