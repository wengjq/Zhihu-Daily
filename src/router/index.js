import Vue from 'vue'
import VueRouter from 'vue-router'
import latest from '../components/latest'

Vue.use(VueRouter)

const routers = [
  {path: '/', name: 'index', component: latest}
]

export default new VueRouter({
  routers
})

