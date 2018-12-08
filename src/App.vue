<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/car">Car</router-link>
    </div>
    <h1>{{msg}}</h1>
    <app-car :carName="carName" :carYear="2015"></app-car>
    <router-view/>
  </div>
</template>

<script>
  import Car from './components/car/car.vue'
  export default {
      components: {
          appCar: Car,
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
  @import "./styles/main.scss";
</style>
