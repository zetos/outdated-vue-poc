import Vue from 'vue'
import Router from 'vue-router'
import Demons from './components/Demons.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demons',
      component: Demons
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})