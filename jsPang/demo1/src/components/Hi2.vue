<template>
  <div class="msg">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Hi2',
  data() {
    return {
      msg: 'hi2页面2'
    }
  }
}
</script>

<style scoped>
.msg {
  background: blue;
}

</style>