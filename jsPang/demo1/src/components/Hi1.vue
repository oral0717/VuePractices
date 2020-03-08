<template>
  <div class="msg">{{ msg }}--{{$route.params.username}}</div>
</template>

<script>
export default {
  name: 'Hi1',
  data() {
    return {
      msg: 'hi1页面1'
    }
  }
}
</script>

<style scoped>
.msg {
  background:green;
}

</style>