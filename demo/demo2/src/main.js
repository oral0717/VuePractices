import Vue from 'vue'
import AMap from 'vue-amap'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(AMap)

AMap.initAMapApiLoader({
  // 高德key
  key: 'b950f9dc04152b72b84cabbea21112d3',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
