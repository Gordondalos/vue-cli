import Vue from 'vue'
import App from './App.vue'
import router from './router'

// глобальная регистрация импорт
// import Car from './components/car/car.vue'

Vue.config.productionTip = false;

// // глобальная регистрация
// Vue.component('app-car', Car);

export const eventEmitter = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
