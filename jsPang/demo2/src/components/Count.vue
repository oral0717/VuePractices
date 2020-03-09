<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>{{$store.state.count}}---{{count}}</h2>
    <div>
      <button @click="$store.commit('add', 10)">+</button>
      <button @click="add(5)">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store"
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      msg: 'hello vuex'
    }
  },
  computed: mapState(['count']),
  methods: mapMutations(['add', 'reduce']),
  store
}
</script>