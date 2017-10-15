import Vue from 'vue'
import VueRouter from 'vue-router'
import latest from '../components/latest'
import subject from '../components/subject'
import story from '../components/story'
import hot from '../components/hot'
import favorites from '../components/favorites'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'index', component: latest},
  {path: '/hot', name: 'hot', component: hot},
  {path: '/story/:id', name: 'story', component: story},
  {path: '/subject/:id', name: 'subject', component: subject},
  {path: '/favorites', name: 'favorites', component: favorites},
  {path: '*', redirect: '/'}
]

export default new VueRouter({
  routes
})

