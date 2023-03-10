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
        // ADVISER =================================================
        {
            path: "/adviser",
            name: "adviser",
            component: { render: h => h('router-view') },
            children: [
                {
                    path: "dashboard",
                    name: "adviser.dashboard",
                    component: ()=>import("./pages/Adviser"),
                    meta: {
                        name: "Dashboard"
                    }
                },
                {
                    path: "enrollment/:head_id",
                    name: "adviser.enrollment",
                    component: ()=>import("./pages/Adviser/Enrollment"),
                    meta: {
                        name: "Advisory"
                    }
                },
            ]
        },
        // /ADVISER =================================================


        // ADMIN ====================================================
        {
            path: "/admin",
            name: "admin",
            component: { render: h => h('router-view') },
            children: [
                {
                    path: "notifications",
                    name: "admin.notifications",
                    component: ()=>import("./pages/Notifs"),
                    meta: {
                        name: "Notifications"
                    }
                },
                {
                    path: "dashboard",
                    name: "admin.dashboard",
                    component: ()=>import("./pages/Admin"),
                    meta: {
                        name: "Dashboard"
                    }
                },
                {
                    path: "sy",
                    name: "admin.sy",
                    component: ()=>import("./pages/Admin/SY"),
                    meta: {
                        name: "School Year"
                    }
                },
                {
                    path: "students",
                    name: "admin.students",
                    component: ()=>import("./pages/Admin/Students"),
                    meta: {
                        name: "Students Masterfile"
                    }
                },
                {
                    path: "advisers",
                    name: "admin.advisers",
                    component: ()=>import("./pages/Admin/Advisers"),
                    meta: {
                        name: "Advisers"
                    }
                },
                {
                    path: "sections",
                    name: "admin.sections",
                    component: ()=>import("./pages/Admin/Sections"),
                    meta: {
                        name: "Sections"
                    }
                },
                {
                    path: "subjects",
                    name: "admin.subjects",
                    component: ()=>import("./pages/Admin/Subjects"),
                    meta: {
                        name: "Subjects"
                    }
                },
                {
                    path: "strands",
                    name: "admin.strands",
                    component: ()=>import("./pages/Admin/Strands"),
                    meta: {
                        name: "Strands"
                    }
                },
                {
                    path: "subtags",
                    name: "admin.subtags",
                    component: ()=>import("./pages/Admin/Subtags"),
                    meta: {
                        name: "Subject Tagging"
                    }
                },
                {
                    path: "enrollment",
                    name: "admin.enrollment",
                    component: ()=>import("./pages/Admin/Enrollment"),
                    meta: {
                        name: "Enrollment"
                    },
                    children: [
                        {
                            path: "nursery",
                            name: "admin.enrollment.nursery",
                            component: ()=>import("./pages/Admin/Enrollment"),
                            meta: {
                                name: "Nursery",
                                level: "Nursery"
                            }
                        },
                        {
                            path: "kinder",
                            name: "admin.enrollment.kinder",
                            component: ()=>import("./pages/Admin/Enrollment"),
                            meta: {
                                name: "Kinder",
                                level: "Kinder"
                            }
                        },
                        {
                            path: "elementary",
                            name: "admin.enrollment.elementary",
                            component: ()=>import("./pages/Admin/Enrollment"),
                            meta: {
                                name: "Elementary",
                                level: "Elementary"
                            }
                        },
                        {
                            path: "jhs",
                            name: "admin.enrollment.jhs",
                            component: ()=>import("./pages/Admin/Enrollment"),
                            meta: {
                                name: "Junior High",
                                level: "Junior High"
                            }
                        },
                        {
                            path: "shs",
                            name: "admin.enrollment.shs",
                            component: ()=>import("./pages/Admin/Enrollment"),
                            meta: {
                                name: "Senior High",
                                level: "Senior High"
                            }
                        },
                    ]
                },
            ]
        },
        // /ADMIN ====================================================


        // REPORTS =================================================
        {
            path: "/reports",
            name: "reports",
            component: { render: h => h('router-view') },
            children: [
                {
                    path: "list-of-students",
                    name: "reports.student_enrollment",
                    component: ()=>import("./pages/Reports/StudentEnrollment.vue"),
                    meta: {
                        name: "List of Students"
                    }
                },
                {
                    path: "permarecord",
                    name: "reports.permarecord",
                    component: ()=>import("./pages/Reports/PermaRecord.vue"),
                    meta: {
                        name: "Student Permanent Record"
                    }
                },
                {
                    path: "coe",
                    name: "reports.coe",
                    component: ()=>import("./pages/Reports/COE.vue"),
                    meta: {
                        name: "Certificate of Enrollment"
                    }
                },
                {
                    path: "goodmoral",
                    name: "reports.goodmoral",
                    component: ()=>import("./pages/Reports/GoodMoral.vue"),
                    meta: {
                        name: "Good Moral"
                    }
                },

            ]
        },
        // /REPORTS =================================================


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
