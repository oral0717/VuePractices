<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>{{$store.state.count}}</h2>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store"
export default {
  data() {
    return {
      msg: 'hello vuex'
    }
  },
  store
}
</script>