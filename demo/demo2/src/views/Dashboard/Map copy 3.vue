<template>
  <div class="amap-page-container">
    <div :style="{width:'900px',height:'800px'}">
      <el-amap
      vid="amap"
      class="amap-demo"
      :resizeEnable="true"
      :zoomEnable="false"
      :dragEnable="false"
      :keyboardEnable="false"
      :mapStyle="mapStyle"
      :zoom="zoom"
      :center="center">
      <el-amap-circle-marker
        v-for="marker in markers"
        :key="marker.id"
        :center="marker.center"
        :radius="marker.radius"
        :stroke-color="marker.strokeColor"
        :stroke-opacity="marker.strokeOpacity"
        :fill-color="marker.fillColor"
        :fill-opacity="marker.fillOpacity"
        :events="marker.events"
      ></el-amap-circle-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapStyle: 'amap://styles/grey',
      zoom: 10,
      center: [121.59996, 31.197646],
      markers: [
        {
          center: [121.5273285, 31.21515044],
          radius: 5,
          strokeColor: '#fff',
          strokeOpacity: 0.4,
          fillOpacity: 0.6,
          fillColor: '#fff'
        },
        {
          center: [121.4093285, 31.31515044],
          radius: 5,
          strokeColor: '#fff',
          strokeOpacity: 0.4,
          fillOpacity: 0.6,
          fillColor: '#fff'
        }
      ]
    }
  }
}
</script>
