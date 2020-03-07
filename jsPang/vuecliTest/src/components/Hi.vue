<template>
  <div class="hi">{{msg}}</div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'hi页面'
    }
  }
}
</script>

<style>
.hi {border:1px solid red;}
</style>
