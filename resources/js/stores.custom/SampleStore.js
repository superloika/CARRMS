import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    categories: [],
});


const actions = {

};

export default {
    state,
    ...actions
};
