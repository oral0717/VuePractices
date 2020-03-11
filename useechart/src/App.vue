<template>
  <div id="app">
    <div id="nav">
      <router-link to='/'>累计确诊</router-link> |
      <router-link to='/about'>疫情动态</router-link>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
