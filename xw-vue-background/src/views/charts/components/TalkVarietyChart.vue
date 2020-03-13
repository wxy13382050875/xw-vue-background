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
              
              legend: {
                  left: 'center',
                  top: '30',
                  data: ['约谈提醒', '批评教育', '责令检查', '诫勉谈话']
              },

              series: [

                  {
                    top: '30',
                      type: 'pie',
                      roseType: 'area',
                      radius: [30, 110],
                      data: [
                          {value: 10, name: '约谈提醒'},
                          {value: 5, name: '批评教育'},
                          {value: 15, name: '责令检查'},
                          {value: 25, name: '诫勉谈话'},

                      ]
                  }
              ]
})
    }
  }
}
</script>
