<!--
 * @Descripttion: 
 * @Author: Oral
 * @Date: 2022-07-29 13:55:14
 * @LastEditTime: 2022-07-29 17:01:01
-->
<template>
  <nav>
    <el-button type="primary">I am ElButton</el-button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
