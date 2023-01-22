import Vue from "vue";

const host = `http://${window.location.host}/`;
// const localStorage = window.localStorage;

const state = Vue.observable({
    appName: 'CARRMS',
    appLongName: "Carmel Academy Registrar\'s Record Management System",
    siteUrl: host,
    snackBar: {
        show: false,
        text: "",
        timeout: -1,
        color: 'secondary'
    },
    overlay: {
        show: false,
        msg: '',
    },
    errorBar: {
        show: true,
        msg: "Error"
    },
    guardMsgs: {
        accessDenied: "Access Denied",
    },
    showTopLoading: false,
    strDate: [new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)],

    gradeLevels: [
        {grade:"Nursery",level: "Nursery"},
        {grade:"Kinder 1",level: "Kinder"},
        {grade:"Kinder 2",level: "Kinder"},
        {grade:"Grade 1",level: "Elementary"},
        {grade:"Grade 2",level: "Elementary"},
        {grade:"Grade 3",level: "Elementary"},
        {grade:"Grade 4",level: "Elementary"},
        {grade:"Grade 5",level: "Elementary"},
        {grade:"Grade 6",level: "Elementary"},
        {grade:"Grade 7",level: "Junior High"},
        {grade:"Grade 8",level: "Junior High"},
        {grade:"Grade 9",level: "Junior High"},
        {grade:"Grade 10",level: "Junior High"},
        {grade:"Grade 11",level: "Senior High"},
        {grade:"Grade 12",level: "Senior High"},
    ],
    levels: [
        'Nursery',
        'Kinder',
        'Elementary',
        'Junior High',
        'Senior High'
    ],
    notifs: [],
});


const actions = {
    toast(text, timeout, color='secondary') {
        state.snackBar.show = true;
        state.snackBar.text = text;
        state.snackBar.timeout = timeout == null ? 3000 : timeout;
        state.snackBar.color = color;
    },

    overlay(show = true, text = "Loading...") {
        state.overlay.show = show;
        state.overlay.msg = text;
    },

    isSuperAdmin() {
        if(window.AuthUser.user_type == 'super_admin') {
            return true;
        }
        return false;
    },

    isAdmin() {
        if(window.AuthUser.user_type == 'admin') {
            return true;
        }
        return false;
    },

    // isTeacher() {
    //     if(window.AuthUser.user_type == 'teacher') {
    //         return true;
    //     }
    //     return false;
    // },

    isAdviser() {
        if(window.AuthUser.user_type == 'adviser') {
            return true;
        }
        return false;
    },

    formatAsCurrency(number) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'PHP',
            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });

        return formatter.format(number).replace('php','').replace('₱','');
    },

    resetForm(obj) {
        let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
        setAll(obj, "");
    },

    async getNotifs(status) {
        state.notifs = [];
        await axios.post(
            `${state.siteUrl}admin/notifs/getNotifs`,
            {
                // sy_id: sy_id,
                status: status
            }
        ).then(e=>{
            state.notifs = e.data;
            console.log(e.data)
        });
    },

};

export default {
    state,
    // localStorage,
    ...actions
};
