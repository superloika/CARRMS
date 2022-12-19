import axios from "axios";
import Vue from "vue";
import AppStore from "./AppStore";

const state = Vue.observable({
    categories: [],
});


const actions = {
    async initCategories() {
        console.log('initCategories() invoked');
        await axios.get(
            `${AppStore.state.siteUrl}categories`
        ).then(e=>{
            state.categories = e.data;
        });
    }
};

export default {
    state,
    ...actions
};
