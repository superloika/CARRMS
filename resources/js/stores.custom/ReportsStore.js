import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    studentEnrollment: [],
    permaRecord: {
        profile: {},
    },

    generateCOE: {},
});


const actions = {
    async studentEnrollment(sy_id,level,grade='') {
        state.studentEnrollment = [];
        await axios.post(
            `${AppStore.state.siteUrl}reports/studentEnrollment`,
            {
                sy_id: sy_id,
                level: level,
                grade: grade,
            }
        ).then(e=>{
            state.studentEnrollment = e.data;
            console.log(e.data);
        });
    },

    async permaRecord(student_id,level) {
        await axios.post(
            `${AppStore.state.siteUrl}reports/permaRecord`,
            {
                student_id: student_id,
                level: level,
            }
        ).then(e=>{
            state.permaRecord = e.data;
            console.log(e.data);
        });
    },

    async generateCOE(student_id) {
        await axios.post(
            `${AppStore.state.siteUrl}reports/generateCOE`,
            {
                student_id: student_id,
            }
        ).then(e=>{
            state.generateCOE = e.data;
            console.log(e.data);
        });
    },
};

export default {
    state,
    ...actions
};
