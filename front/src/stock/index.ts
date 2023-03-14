import type { RouteRecordRaw } from 'vue-router'

export const stockRouteConfig = (prefix: string): RouteRecordRaw => ({
  path: '/' + prefix,
  children: [
    {
      path: '',
      name: prefix + ':list',
      component: () => import('./routes/ListRoute.vue')
    },
    {
      path: 'add',
      name: prefix + ':add',
      component: () => import('./routes/AddRoute.vue')
    }
  ]
})
