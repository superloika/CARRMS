import Vue from "vue";

import VueRouter from "vue-router";

// OTHER PAGES
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

// ACCOUNT
import AccountPage from "./pages/AccountPage";
import ManageAccounts from "./pages/ManageAccounts";

// ERROR PAGES
import ErrorPage404 from "./pages/ErrorPages/ErrorPage404";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        // TEACHER =================================================
        {
            path: "/teacher",
            name: "teacher",
            component: { render: h => h('router-view') },
            children: [
                {
                    path: "dashboard",
                    name: "teacher.dashboard",
                    component: ()=>import("./pages/Teacher"),
                    meta: {
                        name: "Dashboard"
                    }
                },
            ]
        },
        // /TEACHER =================================================


        // ADMIN ====================================================
        {
            path: "/admin",
            name: "admin",
            component: { render: h => h('router-view') },
            children: [
                {
                    path: "dashboard",
                    name: "admin.dashboard",
                    component: ()=>import("./pages/Admin"),
                    meta: {
                        name: "Dashboard"
                    }
                },
                {
                    path: "students",
                    name: "admin.students",
                    component: ()=>import("./pages/Admin/Students"),
                    meta: {
                        name: "Students"
                    }
                },
                {
                    path: "teachers",
                    name: "admin.teachers",
                    component: ()=>import("./pages/Admin/Teachers"),
                    meta: {
                        name: "Teachers"
                    }
                },
            ]
        },
        // /ADMIN ====================================================


        // OTHER PAGES ===============================================
        {
            path: "/",
            component: HomePage,
            meta: {
                name: "Home"
            }
        },
        {
            path: "/about",
            component: AboutPage,
            meta: {
                name: "AboutPage"
            }
        },
        // /OTHER PAGES ===============================================


        // ACCOUNT ====================================================
        {
            path: "/manage-accounts",
            component: ManageAccounts,
            meta: {
                name: "Manage Accounts"
            }
        },
        {
            path: "/account",
            component: AccountPage,
            meta: {
                name: "Account"
            }
        },
        // /ACCOUNT ====================================================


        // =============================================================
        {
            path: "/:pathMatch(.*)*",
            component: ErrorPage404
        }
    ]
});


router.beforeEach((to, from, next) => {
    next();
    // window.cancelTokenSource.cancel();
});

export default router;
