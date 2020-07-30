<template>
  <div class="amap-page-container">
    <div :style="{width:'800px',height:'600px'}">
      <el-amap
      vid="amap"
      class="amap-demo"
      :center="center">
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapStyle: 'amap://styles/1de318cbb8d12c02303a22c550b9ccc9',
      zoom: 5,
      center: [121.59996, 31.197646]
    }
  }
}
</script>

<style>
  .amap-demo {
    width: 800px;
    height: 600px;
  }
</style>