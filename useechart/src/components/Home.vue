<template>
  <div>
    <h2>{{msg}}</h2>
    <div class="home">
      <div id="chart2" style="width:100%;height:300px;"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data(){
    return {
      msg: '疫情趋势'
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      const myChart = echarts.init(document.getElementById('chart2'));
      const option = {
        backgroundColor: 'pink',
        title: {
          text: '全国 新增确诊/疑似 趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新增确诊', '新增疑似'],
          bottom: 0,
          left: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '13%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: ['2.11','2.12','2.13']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '新增确诊',
            type: 'line',
            smooth: true,
            data: [2022, 15153, 5093]
          },
          {
            name: '新增疑似',
            type: 'line',
            smooth: true,
            data: [3342, 2807, 2450]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>