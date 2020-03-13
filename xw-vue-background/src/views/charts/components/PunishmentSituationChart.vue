<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'

// const animationDuration = 6000

export default {
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        color: ['#3e6591', '#eb7d22', '#d73f45'],
        tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
          grid: {
              left: 250
          },
          xAxis: {
          },
          yAxis: [{
              nameLocation: 'start',
              nameTextStyle: {
                  fontWeight: 'bold'
              },
          position: 'left',
              offset: 200,
              axisLine: {
                  onZero: false,
                  show: false
              },
              axisTick: {
                  length: 200,
                  inside: true,
                  lineStyle: {color: '#ccc'}
              },
              axisLabel: {
                  inside: true
              },
              inverse: true,
              data: ['政务处分', '党记处分', '问责处分']
          }],
          series: [{
          name:"火警未处理",
          stack: '火警',
              type: 'bar',
              data:[220, 182, 191, 234, 290,123, 131, 254, 278,121],
              label: {
                normal: {
                      show: true,
                      position: 'left',
                      textStyle: {color: '#008000'},
                      formatter: '警告',
                      seriesIndex:1,
                  }
              }
          }, {
          name:"任务完成",
              type: 'bar',
          stack: '巡检',
              data:[210, 132, 91, 204, 220,132, 131, 254, 278,121],
              label: {
                normal: {
                      show: true,
                      position: 'left',
                      textStyle: {color: '#FFA500'},
                      formatter: '记过',
                      name:'政务处分'
                  }
              }
          }, {
          name:"告警数",
              type: 'bar',
          stack: '电气火灾',
              data:[210, 132, 91, 204, 220,261, 131, 254, 278,121],
              label: {
                normal: {
                      show: true,
                      position: 'left',
                      textStyle: {color: '#B10E81'},
                      formatter: '记大过',
                      name:'政务处分'
                  }
              }
          }, {
          name:"告警数",
              type: 'bar',
          stack: '防火门',
              data:[210, 132, 91, 204, 220,211, 131, 254, 278,121],
              label: {
                normal: {
                      show: true,
                      position: 'left',
                      textStyle: {color: 'cadetblue'},
                      formatter: '降级',
                  }
              }
          }, {
          name:"压力异常",
              type: 'bar',
          stack: '水',
              data:[120, 132, 131, 254, 278,162, 131, 254, 278,121],
              label: {
                normal: {
                      show: true,
                      position: 'left',
                      textStyle: {color: '#000'},
                      formatter: '撤职',
                  }
              }
          }]
      })
    }
  }
}
</script>
