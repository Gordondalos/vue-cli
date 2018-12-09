<template>
    <div>
        <h1 v-colored:background.font.delay="'#fff'">{{name | lowercase }} vue</h1>
        <h2>{{msg | uppercase}}</h2>
        <a href="http://google.com">Пойди на гугл</a>
        <button @click="changeName()">Изменить Имя</button>
        <button @click="changeFunc()">Изменить Из Родителя</button>

        <slot name="title"></slot>

        <ul>
            <li>{{'asdasd' | uppercase}}</li>
            <li>asdasd</li>
            <li>asdasdasd</li>
        </ul>

        <slot name="text"></slot>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { eventEmitter } from '@/main.ts';
  import { Colored } from '@/directives/color'
  import lowercase from '@/filters/my-filter.filter.ts'
  // import { Prop } from 'vue-property-decorator'

  export default Vue.extend({

    filters: {
      lowercase,
      uppercase(value){
        return value.toUpperCase();
      }
    },

    // локальная регистрация директив
    directives: {
      'v-colored': Colored
    },

    name: 'HelloWorld',
    props: {
      msg: String,
      changeFunc: Function,
    },
    data() {
      return {
        name: 'Привет'
      }
    },
    methods: {
      changeName() {
        //this.msg = 'Пока';
        this.$emit('messageChange', 'Пока')
      }
    },

    created() {
      eventEmitter.$on('sendCurrentNAme', (event) => {
        console.log(event);
        this.name = event;
      })
    }

  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "./HelloWorld.scss";

</style>
