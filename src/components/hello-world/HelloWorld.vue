<template>
    <div>
        <h1>{{name}} vue</h1>
        <h2>{{msg}}</h2>
        <a href="http://google.com">Пойди на гугл</a>
        <button @click="changeName()">Изменить Имя</button>
        <button @click="changeFunc()">Изменить Из Родителя</button>

        <ul>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasdasd</li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // import { Prop } from 'vue-property-decorator'

  import {eventEmitter} from '@/main.ts';

  export default Vue.extend({
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

    created(){
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
