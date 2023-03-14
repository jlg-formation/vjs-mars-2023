import type { RouteRecordRaw } from 'vue-router'

export const stockRouteConfig: RouteRecordRaw = {
  path: '/stock',
  children: [
    {
      path: '',
      component: () => import('./routes/ListRoute.vue')
    },
    {
      path: 'add',
      name: 'toto',
      component: () => import('./routes/AddRoute.vue')
    }
  ]
}
