import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VureResource from 'vue-resource'

import Vuelidate from 'vuelidate'
import * as _ from 'lodash';

// глобальная регистрация импорт
// import Car from './components/car/car.vue'

import List from '@/views/List.vue'

import ColorDirective from './directives/color'
import Inputs from './views/Inputs.vue'

Vue.component('list', List);
Vue.component('inputs', Inputs);


Vue.use(Vuelidate);
Vue.use(_);
Vue.use(VureResource);

// глобальный миксин будет применен ко всем компонентам
Vue.mixin({
  beforeCreate(){
    // console.log('beforeCreate');
  }
});


Vue.http.options.root = 'http://localhost:9999/';

// регистрация фильтров глобально
Vue.filter('uppercaseMy', (value: string) => value.toUpperCase());

Vue.config.productionTip = false;

// // глобальная регистрация
// Vue.component('app-car', Car);
 Vue.directive('colored', ColorDirective);

export const eventEmitter = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
