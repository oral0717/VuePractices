<template>
  <div>
    <div id="nav" v-show="$route.meta.navShow">
      <router-link to="/">首页</router-link> |
      <router-link to="/heart">心脏</router-link>
    </div>
    <router-view />
  </div>
</template>
