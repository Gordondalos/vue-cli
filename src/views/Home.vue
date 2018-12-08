<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <hello-world
                :changeFunc="changeNameToAudi"
                :msg="msg"
                @messageChange="change($event)"/>
    </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import HelloWorld from '@/components/hello-world/HelloWorld.vue'; // @ is an alias to /src

  export default Vue.extend({
    name: 'home',
    data() {
      return {
        msg: "Welcome to TypeScript App",
      }
    },
    components: {
      'hello-world': HelloWorld,
    },
    methods: {
      change(event) {
        this.msg = event;
        console.log(event);
      },
      changeNameToAudi() {
        this.msg = 'И снова сдрасте';
      }
    }
  });
</script>
