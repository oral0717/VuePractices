<template>
  <div>
    <p>购物车</p>
    <table border="1">
      <thead>
        <th>订单号</th>
        <th>商品编码</th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>数量</th>
        <th>价格</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(good,index) in cartArr" :key="good.id">
          <td>{{good.masterNumber}}</td>
          <td>{{good.id}}</td>
          <td>{{good.text}}</td>
          <td>{{good.price}}</td>
          <td>{{good.count}}</td>
          <td>{{good.price * good.count}}</td>
          <td>
            <button @click="add(index)"> + </button>
            <button @click="reduce(index)"> - </button>
            <button @click="del(index)"> x </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>总共：{{totalNumber}}件商品</p>
    <p>总价：{{total}}元</p>
  </div>
</template>
<script>
export default {
  props: ["cartArr"], // 接收父组件传入的数据
  computed: {
    totalNumber() {
      return this.cartArr.reduce((sum, next)=>{
        return sum += next.count
      }, 0)
    },
    total() {
      return this.cartArr.reduce((sum, next)=>{
        return sum += next.price * next.count
      }, 0)
    }
  },
  methods: {
    add(i){
      this.$emit('add', {index: i})
    },
    reduce(i) {
      this.$emit('reduce', {index: i})
    },
    del(i) {
      this.$emit('del', {index:i})
    }
  }
}
</script>
