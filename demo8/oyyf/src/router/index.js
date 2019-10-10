import Vue from 'vue'
import VueRouter from 'vue-router'



const Home = () => import( /* webpackChunkName: "group-foo" */ 'pages/home')
const AddStore = () => import('pages/add-data/Addstore')
const Chart = () => import('pages/chart')
const MenageData = () => import('pages/menagedata')
const Redact = () => import('pages/redact')
const Setting = () => import('pages/setting')
const State = () => import('pages/state')
const Login = () => import('pages/login-register/login')
const Register = () => import('pages/login-register/register')
const Error = () => import('comp/content/error')

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/addstore',
      component: AddStore
    },
    {
      path: '/chart',
      component: Chart
    },
    {
      path: '/menagedata',
      component: MenageData
    },
    {
      path: '/redact',
      component: Redact
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/state',
      component: State
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/register',
      component:Register
    },
    {
      path: '*',
      component: Error
    }
  ]
})

export default router