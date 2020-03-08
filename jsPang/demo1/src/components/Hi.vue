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
  },
  beforeRouteEnter: (to,from,next) => {
    console.log('to', to)
    console.log('from', from)
    next()
  },
  beforeRouteLeave: (to,from,next) => {
    console.log('to', to)
    console.log('from', from)
    next()
  }
}
</script>