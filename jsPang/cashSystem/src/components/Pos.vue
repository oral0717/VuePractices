<template>
  <div>
    <i class="icon iconfont icon-shengxianshuiguo"></i>
    <div><i class="icon iconfont icon-chaozhijifen"></i>{{msg}}</div>
    <el-button type="success">默认按钮</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button)

export default {
  data () {
    return {
      msg: 'Pos 页面'
    }
  }
}
</script>
