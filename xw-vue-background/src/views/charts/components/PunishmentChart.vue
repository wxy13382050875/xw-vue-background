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
            text: '处分影响期统计',
            left: 'center'
        },

        legend: {
            // orient: 'vertical',
            // top: 'middle',
            top: 30,
            left: 'center',
            data: ['半年', '一年', '一年半', '两年', '三年','五年','长期']
        },
        series: [
            {
                type: 'pie',
                top: 30,
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    {value: 535, name: '半年'},
                    {value: 510, name: '一年'},
                    {value: 634, name: '一年半'},
                    {value: 735, name: '两年'},
                    {value: 735, name: '三年'},
                    {value: 735, name: '五年'},
                    {value: 735, name: '长期'}
                ],

            }
        ]
      })
    }
  }
}
</script>
