<template>
  <div class="amap-page-container">
    <div>
      <el-amap
      vid="amap"
      class="amap-demo"
      :amap-manager="amapManager"
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
        :radius="marker.radius || 4"
        :stroke-color="marker.strokeColor || '#fff'"
        :stroke-opacity="marker.strokeOpacity || 0.4"
        :fill-color="marker.fillColor || '#fff'"
        :fill-opacity="marker.fillOpacity || 0.6"
        :events="marker.events"
      ></el-amap-circle-marker>
      </el-amap>
    </div>
    <button @click="addCircle">增加点</button>
    <button @click="newOrder(2)">新订单</button>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap'
let amapManager = new AMapManager()
export default {
  data() {
    return {
      currentCircle: null,
      mapStyle: 'amap://styles/grey',
      zoom: 9,
      center: [121.59996, 31.197646],
      amapManager,
      markers: [
        {
          center: [121.5273285, 31.21515044],
          id: 1
        },
        {
          center: [121.4093285, 31.31515044],
          id: 2
        }
      ]
    }
  },
  methods: {
    // 增加门店
    addCircle() {
      const { markers } = this
      markers.push({
        center: [121.4093285, 31.21515044],
        id: 3
      })
    },
    getIndex(arr = [], id) {
      return arr.findIndex(item => item.id === id)
    },
    newOrder(id) {
      const { markers } = this
      console.log(markers, id)
      const targetIndex = this.getIndex(markers, id)
      if (targetIndex >= 0) {
        markers[targetIndex].strokeColor = '#f00'
      }
    }
  }
}
</script>
<style scoped>
.amap-demo{
  width: 600px;
  height: 600px;
}
.play_drop{
  border: 1px solid red;
  height:20px;
  /* -webkit-animation: bounce 1.5s ease-in 0s 1;
  animation: bounce 1.5s ease-in 0s 1;
  will-change: transform; */
}
@keyframes myfirst01{
        0% {
            -moz-box-shadow: 0px 0px 10px 2px #00e921;
            box-shadow: 0px 0px 10px 2px #00e921;
        }
        50% {
            -moz-box-shadow: 0px 0px 20px 2px #00e921;
            box-shadow: 0px 0px 20px 2px #00e921;
        }
        100% {
            -moz-box-shadow: 0px 0px 10px 2px #00e921;
            box-shadow: 0px 0px 10px 2px #00e921;
        }
        
}
</style>