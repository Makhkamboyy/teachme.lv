import {createRouter, createWebHistory} from "vue-router"
import HomePage from "@/pages/HomePage";
import store from "@/plugins/store";

const ifNotAuthorized = (to, from, next) => {
    if(store.getters.isAuthorized) {
        next('/')
    } else {
        next()
    }
}

const ifAuthorized = (to, from, next) => {
    if(store.getters.isAuthorized) {
        next()
    } else {
        next('/login')
    }
}


const routes = [
    {
        path: "/",
        component: HomePage,
        beforeEnter: ifAuthorized
    },
    {
        path: "/home",
        component: HomePage,
        beforeEnter: ifAuthorized
    },
    {
        path: "/about",
        component: () => import("../pages/AboutPage"),
        beforeEnter: ifAuthorized
    },
    {
        path: "/course",
        component: () => import("../pages/CoursesPage"),
        beforeEnter: ifAuthorized
    },
    {
        path: "/trainers",
        component: () => import("../pages/TrainersPage"),
        beforeEnter: ifAuthorized
    },
    {
        path: "/events",
        component: () => import("../pages/EventsPage"),
        beforeEnter: ifAuthorized
    },
    // {
    //     path: "/pricing",
    //     component: () => import("../pages/PricingPage")
    // },
    {
        path: "/contact",
        component: () => import("../pages/ContactPage"),
        beforeEnter: ifAuthorized
    },
    {
        path: "/course/:courseId",
        component: () => import("../pages/CourseDetailsPage"),
        beforeEnter: ifAuthorized
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import("../pages/NotFoundPage")

    },
    {
        path: "/register",
        component: () => import("../pages/RegisterPage"),
        beforeEnter: ifNotAuthorized
    },
    {
        path: "/login",
        component: () => import("../pages/LoginPage"),
        beforeEnter: ifNotAuthorized
    },
    {
        path: "/favorite/:favoriteId",
        component: () => import("../pages/FavoriteDetailsPage"),
        beforeEnter: ifAuthorized
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})