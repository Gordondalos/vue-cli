import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Validation from './views/Validation.vue'
import Car from './components/car/car.vue'
import CarFull from './components/car/car-full.vue'


Vue.use(Router);

export default new Router({
  mode: 'history', // убрать решетки в роутере
  scrollBehavior(to, from, savedPosition) {

    if(savedPosition) {
      return savedPosition; // если на этой странице мы ходили и скролили то пойдет к этой позиции
    }

    if (to.hash) {
      return { selector: to.hash } // если тут есть хеш то пойдет к нему
    }

    return { // в просивном случае пойдет к верху страницы
      x: 0,
      y: 0,
    }
  },
  routes: [
    {
      path: '/car/:id',
      name: 'car',
      component: Car,
      children: [
        {
          path: 'full', // localhost:8080/car/10/full
          name: 'carFull',
          component: CarFull,
        }
      ]
    },

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
    },
    {
      path: '/none',
      redirect: '/'
    },

    {
      path: '/none',
      redirect: 'carrFull'
    },
    {
      path: '*',
      redirect: '/car' // b
    }
  ]
})
