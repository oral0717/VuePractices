<template>
  <div>
    <h1>xx{{count}}</h1>
    <ul>
      <li v-for="(good, index) in goods" :key="good.id">
        {{index + 1}}: {{good.text}} | {{good.price}}
        <button @click="addCart(index)">加入购物车</button>
      </li>
    </ul>
    <p>购物车展示</p>
    <table border="1">
      <thead>
        <th>商品编码</th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>数量</th>
        <th>总价</th>
      </thead>
      <tbody>
        <tr v-for="good in cart" :key="good.id">
          <td>{{good.id}}</td>
          <td>{{good.text}}</td>
          <td>{{good.price}}</td>
          <td>{{good.count}}</td>
          <td>{{good.price*good.count}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
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