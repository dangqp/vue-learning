import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)


import axios from 'axios'
import './axios.js'
import store from "./store/store.js";

Vue.prototype.$axios = axios

import './filter/filter.js'
Vue.config.productionTip = false

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)
import './permission.js' // 路由拦截

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
