import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/js/bootstrap.min'
import Router from 'vue-router'
import myBottom from './components/Bottom'
import './assets/css/iconfont.css'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
// axios.defaults.baseURL = 'http://127.0.0.1:8888'
axios.defaults.baseURL="/api"
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false
Vue.use(MintUi)

// 注册全局组件
Vue.component("myBottom", myBottom)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')