<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>{{msg}}</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
      data () {
          return {
              msg: 'Добро пожаловать'
          }
      }
  }
</script>

<style>
  @import "./styles/main.scss";
</style>
