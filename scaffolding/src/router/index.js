import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入页面组件
import Header from '../components/MintUI/Header.vue';
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';
import Navbar from '../components/MintUI/Navbar.vue';

// 项目实战组件
import Settlement from '../views/Settlement.vue';

Vue.use(VueRouter)

const routes = [{
        path: "/navbar",
        component: Navbar
    },
    {
        path: "/header",
        component: Header
    },
    {
        path: "/field",
        component: Field
    },
    {
        path: "/button",
        component: Button
    },
    {
        path: "/settlement",
        component: Settlement
    }
]

const router = new VueRouter({
    mode: 'history', // hash
    base: process.env.BASE_URL,
    routes
})

export default router