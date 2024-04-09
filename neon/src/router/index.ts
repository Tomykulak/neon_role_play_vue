// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: 'Home',
  },
  {
    path: '/about-us',
    component: () => import('@/views/AboutUs.vue'),
    name: 'AboutUs',
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
    name: 'NotFound',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Or import.meta.env.BASE_URL
  routes,
})

export default router
