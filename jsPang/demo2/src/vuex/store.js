import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add(){
    return state.count++
  },
  reduce(){
    return state.count--
  }
}
export default new Vuex.Store({
  state,
  mutations
})