<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ $route.params.id }}</div>
    <div>{{ $route.params.slogan }}</div>
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