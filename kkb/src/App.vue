<template>
  <div>
    <h1>xx{{count}}</h1>
    <ul>
      <li v-for="(good, index) in goods" :key="good.id">
        {{index + 1}}: {{good.text}} | {{good.price}}
        <el-button
          type="danger"
          size="mini"
          round
          @click="addCart(index)">加入购物车</el-button>
      </li>
    </ul>
    <Cart :cartArr="cart" @add="onAdd" @reduce="onReduce" @del="onDel"/>
    <CartElementUI :cartArr="cart" @add="onAdd" @reduce="onReduce" @del="onDel"/>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cart from './components/Cart'
import CartElementUI from './components/CartElementUI'

Vue.use(ElementUI)

export default {
  components: {
    Cart,
    CartElementUI
  },
  data() {
    return {
      count: 1,
      goods: [
        {id: 123, text: "商品一", price: 10},
        {id: 245, text: "商品二", price: 20},
        {id: 3674, text: "商品三", price: 50},
      ],
      cart: []
    }
  },
  methods: {
    onAdd(arg) {
      const { index } = arg
      this.cart[index].count += 1
    },
    onReduce(arg) {
      const { index } = arg
      if (this.cart[index].count > 1) {
        this.cart[index].count -= 1
      } else {
        console.log('不能更少了')
      }
    },
    onDel(arg){
      const { index } = arg
      this.cart.splice(index, 1)
    },
    addCart(index) {
      let item = this.goods[index]
      let good = this.cart.find(v => v.id === item.id)
      if (good) {
        good.count += 1
      } else {
        this.cart.push({...item, count:1})
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>