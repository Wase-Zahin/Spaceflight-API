import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home.vue';
import Articles from '../components/Articles.vue';
import Blogs from '../components/Blogs.vue';
import Info from '../components/Info.vue';
import Reports from "../components/Reports.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: Blogs,
    },
    {
        path: "/articles",
        name: "Articles",
        component: Articles,
    },
    {
        path: "/info",
        name: "Info",
        component: Info,
    },
    {
        path: "/reports",
        name: "Reports",
        component: Reports,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router