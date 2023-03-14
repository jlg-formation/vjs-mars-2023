import { stockRouteConfig } from '@/stock'
import { createRouter, createWebHistory } from 'vue-router'
import HomeRoute from '../components/routes/HomeRoute.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeRoute
    },
    {
      path: '/legal',
      name: 'legal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/routes/LegalRoute.vue')
    },
    stockRouteConfig('stock')
  ]
})

export default router
