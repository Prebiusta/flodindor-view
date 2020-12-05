import { createRouter, createWebHistory } from 'vue-router'
import Latest from '../views/Latest.vue'

const routes = [
  {
    path: '/latest',
    name: 'Latest',
    component: Latest
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
