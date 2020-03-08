<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'Hi',
  data() {
    return {
      msg: 'hi页面'
    }
  }
}
</script>

<style scoped>
div {
  border:1px solid red;
}
</style>