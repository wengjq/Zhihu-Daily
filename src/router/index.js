import Vue from 'vue'
import VueRouter from 'vue-router'
import latest from '../components/latest'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'index', component: latest},
  {path: '*', redirect: '/'}
]

export default new VueRouter({
  routes
})

