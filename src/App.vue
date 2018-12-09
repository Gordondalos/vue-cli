<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/car">Car</router-link> |
      <router-link to="/car/3">Car</router-link> |
      <router-link to="/validation">Validation</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Car from './components/car/car.vue'
  export default {
      components: {
         // appCar: Car,
      },
      methods: {
          sendNewNAme(event){

          }
      },
      data () {
          return {
              msg: 'Добро пожаловать',
              carName: 'Ford'
          }
      }
  }
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "./styles/main.scss";
</style>
