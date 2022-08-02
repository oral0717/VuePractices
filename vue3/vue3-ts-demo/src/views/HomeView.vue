<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <el-icon size="22" color="#f00"><IconIcBaseline5g /></el-icon>
    <!-- IconSystemUiconsBell -> IconSystemBell -->
    <el-icon size="22" color="#f00"><IconSystemBell /></el-icon>
    <el-icon size="22" color="#000"><IconHomeJiHua /></el-icon>
    <el-icon size="22" color="#000"><IconAboutKeFu /></el-icon>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
