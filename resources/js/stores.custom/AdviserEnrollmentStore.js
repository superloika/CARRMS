import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";
import AdminSYStore from "./AdminSYStore";

const state = Vue.observable({
    sections: [],
    sectionDetails: {},
    sectionStudents: [],
    viewDialog: null,
    selectedELID: null,
    selectedStudentSubjects: [],
});


const actions = {
    async getSections(sy_id,adviser_id) {
        state.sections = [];
        await axios.post(
            `${AppStore.state.siteUrl}adviser/sections/getSections`,
            {
                sy_id: sy_id,
                adviser_id: adviser_id,
            }
        ).then(e=>{
            state.sections = e.data;
            console.log(e.data)
        });
    },

    async getSectionDetails(head_id) {
        await axios.post(
            `${AppStore.state.siteUrl}adviser/sections/getSectionDetails`,
            {
                head_id: head_id
            }
        ).then(e=>{
            state.sectionDetails = e.data;
            console.log(e.data)
        });
    },

    async getStudents(head_id) {
        state.sectionStudents = [];
        await axios.post(
            `${AppStore.state.siteUrl}adviser/sections/getStudents`,
            {
                head_id: head_id
            }
        ).then(e=>{
            state.sectionStudents = e.data;
            console.log(e.data)
        });
    },
    async getSubjects(enrollment_line_id) {
        state.selectedStudentSubjects = [];
        await axios.post(
            `${AppStore.state.siteUrl}adviser/sections/getSubjects`,
            {
                enrollment_line_id: enrollment_line_id
            }
        ).then(e=>{
            state.selectedStudentSubjects = e.data;
            console.log(e.data)
        });
    },
};

export default {
    state,
    ...actions
};
