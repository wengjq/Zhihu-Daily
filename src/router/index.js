import Vue from 'vue'
import VueRouter from 'vue-router'
import latest from '../components/latest'
import story from '../components/story'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'index', component: latest},
  {path: '/story/:id', name: 'story', component: story},
  {path: '*', redirect: '/'}
]

export default new VueRouter({
  routes
})

