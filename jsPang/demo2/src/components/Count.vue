<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>{{$store.state.count}}---{{count}}</h2>
    <div>
      <button @click="$store.commit('add', 10)">+</button>
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store"
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
  data() {
    return {
      msg: 'hello vuex'
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods: mapMutations(['add', 'reduce']),
  store
}
</script>