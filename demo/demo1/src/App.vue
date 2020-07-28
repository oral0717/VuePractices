<template>
  <div id="app">
    <TitledFrame>
      <template v-slot:header>wo</template>
      xxx
      <template v-slot:demo>
        <p>p元素</p>
      </template>
    </TitledFrame>
    分隔
    <CurrentUser v-slot="{user}">
      <template>
        {{user.firstName}}
      </template>
    </CurrentUser>
  </div>
</template>

<script>
import TitledFrame from './components/TitledFrame.vue'
import CurrentUser from './components/CurrentUser.vue'

export default {
  name: 'App',
  components: {
    TitledFrame,
    CurrentUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
