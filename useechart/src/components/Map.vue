<template>
  <div class="map">
    <div ref="mapbox" id="chart" style="height:500px;width:100%;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import jsonp from 'jsonp'
import 'echarts/map/js/china'
const option = {
  backgroundColor: 'pink',
  title: {
    text: "vue实现疫情地图数据展示",
    x: 'center',
    textStyle: {
      color: "#333"
    }
  },
  tooltip:{
    trigger:'item',
    formatter:'<div style="text-align:left">地区：{b}<br/>确诊：{c}</div>'
  },
  visualMap:[{
    type:'piecewise',
    show:true,
    pieces:[
      {min:10000},
      {min:1000,max:9999},
      {min:100,max:999},
      {min:10,max:99},
      {min:1,max:9},
      {value:0},
    ],
    inRange:{
      color:['#fff','#ffaa85','#660208']
    },
    itemWidth:10,
    itemHeight:10
  }],
  toolbox:{
    show:true,
    orient:'horizontall',
    left:'right',
    top:'top',
    feature:{
      dataView:{readOnly:false},
      restore:{},
      saveAsImage:{}
    }
  },
  series: [{
    type: "map",
    map: "china",
    layoutCenter: ['50%', '50%'],
    layoutSize: '70%',
    label:{
      show:true,
      color:'red',
      fontSize:10
    },
    itemStyle:{
      borderColor: 'blue',
      borderWidth:1
    },
    zoom:1.3,
    emphasis:{
      label:{
        color:'#fff',
        fontSize:14
      },
      itemStyle:{
        areaColor:'green',
        borderColor:'orange'
      }
    }
  }]
}
export default {
  name: 'Map',
  mounted(){
    this.getData()
    this.mychart = echarts.init(document.getElementById('chart'))
  },
  methods: {
    getData(){
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', (err,data)=>{
        if(!err){
          let list=data.data.list.map((item)=>({name:item.name,value:item.value}))
          option.series[0].data=list
          this.mychart.setOption(option)
        }
      })
    }
  }
}
</script>