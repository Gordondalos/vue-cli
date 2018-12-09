import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Validation from './views/Validation.vue'
import Car from './components/car/car.vue'


Vue.use(Router);

export default new Router({
  mode: 'history', // убрать решетки в роутере
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/validation',
      name: 'Validation',
      component: Validation
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
