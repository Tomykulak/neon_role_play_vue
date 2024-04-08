// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";

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
    }
  ]
})

export default router
