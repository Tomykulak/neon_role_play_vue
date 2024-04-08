// Composables
import {createRouter, createWebHistory} from 'vue-router'

import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',

        },
        {
            path: '/about-us',
            component: AboutUs,
            name: 'AboutUs',
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: 'NotFound',
        }
    ]
})

export default router
