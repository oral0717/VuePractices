<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to='/'>首页</router-link> |
      <router-link to='/hi/123/do my best'>hi页</router-link> |
      <router-link to='/goHome'>返回首页</router-link> |
      <router-link to='/goHi/456/never give up, fight!?a=123'>返回hi页</router-link> |
      <router-link to='/hi1'>hi1页</router-link> |
      <router-link to='/alias'>alias别名页</router-link> |
      <router-link to='/xxxx'>页面不存在</router-link>
    </div>
    <router-view/>
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
