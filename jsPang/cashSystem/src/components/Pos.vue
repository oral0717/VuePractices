<template>
  <div>
    <div>{{msg}}</div>
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
      msg: 'Pos页面'
    }
  }
}
</script>
