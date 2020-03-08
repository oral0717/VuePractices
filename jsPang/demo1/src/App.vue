<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to='/'>首页</router-link> |
      <router-link to='/hi'>hi页</router-link> |
      <router-link :to="{name: 'Hi/Hi1', params: {username:'oral'}}">hi页1</router-link> |
      <router-link to='/hi/hi2'>hi页2</router-link>
    </div>
    <router-view/>
    <router-view name='left'/>
    <router-view name='right'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
