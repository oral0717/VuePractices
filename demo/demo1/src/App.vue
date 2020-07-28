<template>
  <div id="app">
    <slotView></slotView>
  </div>
</template>

<script>
import slotView from './views/slotView/index.vue'

export default {
  name: 'App',
  components: {
    slotView
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
