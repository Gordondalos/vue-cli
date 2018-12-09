export default {

  // первый жизненный этап
  // при инициализации элемент  байдинг и втртуальная нода ( последние две только на чтение)
  bind(el: HTMLElement, bindings: any, vnode: any) {
        el.style.color = bindings.value; // bindings.value лежит передаваемый параметр тут передали грин
        console.log(bindings);
        console.log(vnode);
        const arg = bindings.arg // тут лежат аргументы, типа беграунда

        el.style[arg] = arg
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