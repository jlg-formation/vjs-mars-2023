import type { RouteRecordRaw } from 'vue-router'
import ListRouteVue from './routes/ListRoute.vue'
import AddRouteVue from './routes/AddRoute.vue'

export const stockRouteConfig: RouteRecordRaw = {
  path: '/stock',
  children: [
    {
      path: '',
      component: ListRouteVue
    },
    {
      path: 'add',
      name: 'toto',
      component: AddRouteVue
    }
  ]
}
