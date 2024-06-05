import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-train',
    name: 'AddTrain',
    component: () => import(/* webpackChunkName: "train" */ '../views/AddTrain.vue')
  },
  {
    path: '/query-ticket',
    name: 'QueryTicket',
    component: () => import(/* webpackChunkName: "ticket" */ '../views/QueryTicket.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
