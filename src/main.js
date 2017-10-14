// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import toastr from 'toastr'
import router from './router'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/material.font.css'

const jsonBird = 'https://bird.ioliu.cn/v1/?url='
const zhihu = 'http://news-at.zhihu.com'

Vue.prototype.$url = `${jsonBird}${zhihu}`
Vue.prototype.$http = axios

Vue.filter('imageUrlPrefix', (value) => {
  const url = value.substr(7)
  const prefix = 'https://images.weserv.nl/?url='
  return prefix + url
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created () {
    toastr.success('Welcome!')
  },
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

