import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './layout/index.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios  // 给Vue原型绑定http  我们在项目中全局可用 this.$http 

window.bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
