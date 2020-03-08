<template>
  <div>
    <div>{{ msg }}</div>
    <div>页面不存在</div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  data() {
    return {
      msg: '404'
    }
  }
}
</script>