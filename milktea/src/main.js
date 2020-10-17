import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入Mint UI
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css';
//注册为Vue的插件
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
