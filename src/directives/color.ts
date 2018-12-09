export default {

  // первый жизненный этап
  // при инициализации элемент  байдинг и втртуальная нода ( последние две только на чтение)
  bind(el: HTMLElement, bindings: any, vnode: any) {
        el.style.color = '#2c6be0';
        console.log(bindings);
        console.log(vnode);
  },

  // вставлена
  inserted(el: HTMLElement, bindings: any, vnode: any){

  },

  // родитель обновился
  updated(el: HTMLElement, bindings: any, vnode: any, oldVinode: any) {

  },

  // все обновилось
  componentUpdated(el: HTMLElement, bindings: any, vnode: any, oldVinode: any){

  },

  // удаллилиась из дом дерева например с удалением компонента черех иф
  unbind(){

  }

}