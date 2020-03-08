<template>
  <div>
    <div class="msg">{{ msg }}</div>
    <router-view/>
  </div>
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
.msg {
  border:1px solid red;
}
</style>