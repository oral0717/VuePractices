import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    order: 11,
    count: 1
  },
  mutations
})

export default store
