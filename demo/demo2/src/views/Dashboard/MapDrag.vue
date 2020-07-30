<template>
  <div class="m-map">
    <div class="search" v-if="placeSearch">
    </div>
    <div id="js-container" class="map">
      <dragMap @drag="dragMap" :lat="defaultLatitude" :lng="defaultLongitude" :searchKeyVal="defaultSearchAddress"></dragMap>
    </div>
  </div>
</template>

<script>
import remoteLoad from '@/utils/remoteLoad.js'
export default {
  data () {
      return {
        mapKey: 'b950f9dc04152b72b84cabbea21112d3', //高德地图的key
        mapCityName: '全国',
        placeSearch: null,
        dragStatus: false,
        AMapUI: null,
        AMap: null
      }
    },
    props: {
      searchKeyVal: String,
      lat: Number,
      lng: Number
    },
    watch: {
      searchKeyVal () {
        if (this.searchKeyVal === '') {
          this.placeSearch.clear()
        }
        this.handleSearch()
      }
    },
    methods: {
      // 搜索
      handleSearch () {
        if (this.searchKeyVal) {
          this.placeSearch.search(this.searchKeyVal)
        }
      },
      // 实例化地图
      initMap () {
        // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
        let AMapUI = this.AMapUI = window.AMapUI
        let AMap = this.AMap = window.AMap
 
        let $this = this
 
        let mapObj = new AMap.Map('js-container')
        mapObj.plugin('AMap.Geolocation', function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, // 是否使用高精度定位，默认:true
            timeout: 10000,          // 超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           // 定位结果缓存0毫秒，默认：0
            convert: true,           // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        // 显示定位按钮，默认：true
            buttonPosition: 'LB',    // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        // 定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        // 定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     // 定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true      // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          })
          mapObj.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', function (data) {
            $this.complete(data, AMapUI, AMap)
          }) // 返回定位信息
          AMap.event.addListener(geolocation, 'error', function (data) {
            $this.$http({
              url: 'https://ipinfo.io/geo',
              method: 'GET',
              body: {}
            }).then(function (response) {  // 请求成功回调
              var loc = response.data.loc.split(',')
              var coords = {
                position: {
                  lat: loc[0],
                  lng: loc[1]
                }
              }
              $this.complete(coords, AMapUI, AMap)
            }, function (error) {
              // 请求失败回调
              this.errorResponse(error)
            })
            console.log(data)
          }) // 返回定位出错信息
        })
      },
      complete (data, AMapUI, AMap) {
        let lat = this.lat === '' || this.lat === 0 || this.lat === undefined ? data.position.lat : this.lat
        let lng = this.lng === '' || this.lng === 0 || this.lng === undefined ? data.position.lng : this.lng
        AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
          let mapConfig = {
            zoom: 16,
            cityName: this.mapCityName,
            center: [lng, lat]
          }
          let map = new AMap.Map('js-container', mapConfig)
          // 加载地图搜索插件
          AMap.service('AMap.PlaceSearch', () => {
            this.placeSearch = new AMap.PlaceSearch({
              pageSize: 5,
              pageIndex: 1,
              city: this.mapCityName,
              map: map
            })
            this.placeSearch.search(this.searchKeyVal, function (status, result) {
              console.log(result)
            })
          })
          // 启用工具条
          AMap.plugin(['AMap.ToolBar'], function () {
            map.addControl(new AMap.ToolBar({
              position: 'RB'
            }))
          })
          // 创建地图拖拽
          let positionPicker = new PositionPicker({
            mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
            map: map, // 依赖地图对象
            iconStyle: { // 自定义外观
              url: '', // 图片地址
              size: [48, 48],  // 要显示的点大小，将缩放图片
              ancher: [24, 40] // 锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
            }
          })
          // 拖拽完成发送自定义 drag 事件
          positionPicker.on('success', positionResult => {
            // 过滤掉初始化地图后的第一次默认拖放
            if (!this.dragStatus) {
              this.dragStatus = true
            } else {
              this.$emit('drag', positionResult)
            }
          })
          // 启动拖放
          positionPicker.start()
        })
      }
    },
  created () {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
    // 未载入高德地图API，则先载入API再初始化
    } else {
      // 载入高德地图和UI组件
      Promise.all([
        remoteLoad(`https://webapi.amap.com/maps?v=1.4.15&key=${this.mapKey}`),
        remoteLoad('https://webapi.amap.com/ui/1.0/main.js')
      ]).then(() => {
        this.initMap()
      })
    }
  }
}
</script>
<style lang="css">
  .m-map{ min-height: 400px; position: relative; }
  .m-map .map{ width: 100%!important; height: 400px!important; }
  .m-map .search{ position: absolute; top: 10px; left: 10px; width: 285px; z-index: 1; }
  .m-map .search input{ width: 180px; border: 1px solid #ccc; line-height: 20px; padding: 5px; outline: none; }
  .m-map .search button{ line-height: 26px; background: #fff; border: 1px solid #ccc; width: 50px; text-align: center; }
  .m-map .result{ max-height: 300px; overflow: auto; margin-top: 10px; }
</style>
