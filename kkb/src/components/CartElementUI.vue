<template>
  <div style="width: 1151px;">
    <p>购物车ElementUI元素</p>
    <el-table
      :data="cartArr"
      :stripe="true"
      :show-header="true"
      :highlight-current-row="true"
      :cell-style="{textAlign: 'center', color:'#f00'}"
      :header-cell-style="{background:'pink',color:'#a00',textAlign: 'center'}"
      :span-method="spanMethod"
      border>
      <el-table-column
        prop="masterNumber"
        label="订单号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="id"
        label="商品编码"
        width="150">
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="150">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量"
        width="150">
      </el-table-column>
      <el-table-column
        label="价格"
        width="150">
        <template slot-scope="scope">{{ scope.row.price * scope.row.count }}</template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            round
            @click="add(scope.$index)"> + </el-button>
          <el-button
            type="warning"
            size="mini"
            round
            @click="reduce(scope.$index)"> - </el-button>
          <el-button
            type="primary"
            size="mini"
            round @click="del(scope.$index)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
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
      console.log(i)
      this.$emit('add', {index: i})
    },
    reduce(i) {
      this.$emit('reduce', {index: i})
    },
    del(i) {
      this.$emit('del', {index:i})
    },
    spanMethod(args) {
      console.log(args)
    }
  }
}
</script>

<style scoped>
.header {
  text-align:center;
}
</style>