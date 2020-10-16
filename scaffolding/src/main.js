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
axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(MintUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
