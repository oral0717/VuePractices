<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="title">万贝后台管理系统</h2>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="login-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入用户名"
            autocomplete="off"
            :prefix-icon="Search"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import type {FormRules} from 'element-plus'

export default defineComponent({
  setup () {
    const data = reactive({
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {}
    })
    const rules = reactive<FormRules>({
      username:[
        { required: true, message: '请输入用户名', trigger: 'blur'},
        { min: 3, max: 5, message: '用户名长度3-5'}
      ],
      password:[
        { required: true, message: '请输入密码', trigger: 'blur'},
        { min: 6, max: 8, message: '用户名长度6-8'}
      ]
    })

    return {...toRefs(data), rules}
  }
})
</script>

<style lang='scss' scoped>
.container {
  min-height: 100%;
  background: #1b1430;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper{
    transform: translateY(-80px)
  }
  .title {
    font-size: 40px;
    color: #fff;
    margin-bottom: 80px;
    text-align: center;
  }
  .login-ruleForm{
    width: 500px;
    margin: 0 auto;
  }
}
</style>