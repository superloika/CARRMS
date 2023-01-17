import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";
import AdminSYStore from "./AdminSYStore";

const state = Vue.observable({
    sections: [],
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
    }
};

export default {
    state,
    ...actions
};
