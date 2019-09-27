import Vue from 'vue'
import VueRouter from 'vue-router'

import Movie from './pages/Movie'
import Cinema from './pages/Cinema'
import My from './pages/My'

import BeingHotting from './pages/Movie/BeingHotting'
import WillHotting from './pages/Movie/WillHotting'

Vue.use(VueRouter)

const routes = [
  // 路由
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    component: Movie,
    children: [
      {
        path: '/movie',
        redirect: '/movie/being'
      },
      {
        path: '/movie/being',
        component: BeingHotting
      },
      {
        path: '/movie/will',
        component: WillHotting
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/my',
    component: My
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router