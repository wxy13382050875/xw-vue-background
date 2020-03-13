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
              title: {
                  text: '职级统计',
                  left: 'center'
              },

              legend: {
                  left: 'center',
                  top: '30',
                  data: ['正处', '副处', '正科', '副科']
              },

              series: [

                  {
                    top: '30',
                      name: '面积模式',
                      type: 'pie',
                      roseType: 'area',
                      radius: [30, 110],
                      data: [
                          {value: 10, name: '正处'},
                          {value: 5, name: '副处'},
                          {value: 15, name: '正科'},
                          {value: 25, name: '副科'},

                      ]
                  }
              ]
})
    }
  }
}
</script>
