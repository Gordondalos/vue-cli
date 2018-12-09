import Vue from 'vue'
import App from './App.vue'
import router from './router'

// глобальная регистрация импорт
// import Car from './components/car/car.vue'

import ColorDirective from './directives/color'

Vue.config.productionTip = false;

// // глобальная регистрация
// Vue.component('app-car', Car);
 Vue.directive('colored', ColorDirective);

export const eventEmitter = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
