<template>
  <div>
    <el-row>
      <el-col
        :span="6"
        v-for="item in goods"
        :key="item.id"
      >
        <el-card>
          <img
            :src="item.img"
            class="image"
            :alt="item.title"
          />
          <div class="option">
            <el-col :span="14">
              <span>{{item.title}}</span>
            </el-col>
            <el-col :span="10">
              <el-button type="danger" size="mini">
                <i class="el-icon-plus"></i>
                加入购物车
              </el-button>
            </el-col>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h1>xx{{count}}</h1>
    <ul>
      <li v-for="(good, index) in goods" :key="good.id">
        {{index + 1}}: {{good.title}} | {{good.price}}
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
import axios from 'axios'

Vue.use(ElementUI)

export default {
  components: {
    Cart,
    CartElementUI
  },
  data() {
    return {
      count: 1,
      goods: [],
      cart: []
    }
  },
  async created() {
    let {data} = await axios.get('/api/goods')
    this.goods = data.data
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
.image{
  width: 100%;
  height: 150px;
}
.option{
  margin-bottom: 20px;
}
</style>