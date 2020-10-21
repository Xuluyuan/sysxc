import Vue from 'vue'
import VueRouter from 'vue-router'
import Ordermeal from '../views/Ordermeal.vue'
import Home from '../views/Home.vue'
import Takemeal from '../views/Takemeal.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
//yanxiong
import Me from '../views/Me.vue'
import Address from '../views/Address.vue'
import Newaddress from '../views/Newaddress.vue'
import AAA from '../views/111.vue'
//zhujianyang

Vue.use(VueRouter)

const routes = [
  {
    path: '/ordermeal',
    component: Ordermeal
  },
  {
    path: '/aaa',
    component: AAA
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/reg',
    component: Reg
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/takemeal',
    component: Takemeal
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/search',
    component:Search
  },
  //yanxiong
  {
    path:'/newaddress',
    component:Newaddress
  },
  {
    path:'/address',
    component:Address
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
