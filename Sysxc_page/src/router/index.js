import Vue from 'vue'
import VueRouter from 'vue-router'
import Ordermeal from '../views/Ordermeal.vue'
import Takemeal from '../views/Takemeal.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
//xiaoyao
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Detail from '../views/Detail.vue'
//yanxiong
import Me from '../views/Me.vue'
import Address from '../views/Address.vue'
import Newaddress from '../views/Newaddress.vue'
//zhujianyang
import Settlement from '../views/Settlement.vue'
Vue.use(VueRouter)

const routes = [
  //xiaoyao
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //xuluyuan
  {
    path: '/ordermeal',
    component: Ordermeal,
    meta: {
      keepAlive: true // 需要缓存
      }
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
    component: Home,
  },
  {
    path: '/takemeal',
    component: Takemeal,
  },
  {
    path: '/me',
    component: Me,
  },
  {
    path: '/search',
    component:Search,
  },
  //yangjianxiong
  {
    path:'/newaddress',
    component:Newaddress
  },
  {
    path:'/address',
    component:Address
  },
  //zhujianyang
  {
    path:'/settlement',
    component:Settlement,
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
