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

let data = {
        "one": [
            {
                "name": "警告",
                "value": 1,
                "title": "党纪处分"
            },
            {
                "name": "警告",
                "value": 0,
                "title": "政纪处分"
            },
            {
                "name": "通报",
                "value": 0,
                "title": "组织调整或组织处理"
            }
        ],
        "two": [
            {
                "name": "严重警告",
                "value": 2,
                "title": "党纪处分"
            },
            {
                "name": "记过",
                "value": 1,
                "title": "政纪处分"
            },
            {
                "name": "诫勉谈话",
                "value": 0,
                "title": "组织调整或组织处理"
            }
        ],
        "three": [
            {
                "name": "留党察看",
                "value": 1,
                "title": "党纪处分"
            },
            {
                "name": "记大过",
                "value": 1,
                "title": "政纪处分"
            },
            {
                "name": "检查",
                "value": 0,
                "title": "组织调整或组织处理"
            }
        ],
        "four": [
            {
                "name": "撤销党内职务",
                "value": 0,
                "title": "党纪处分"
            },
            {
                "name": "降级",
                "value": 0,
                "title": "政纪处分"
            },
            {
                "name": "其他",
                "value": 1,
                "title": "组织调整或组织处理"
            }
        ],
        "five": [
            {
                "name": "开除党籍",
                "value": 7,
                "title": "党纪处分"
            },
            {
                "name": "撤职",
                "value": 1,
                "title": "政纪处分"
            }
        ],
        "six": [
            {
                "name": "",
                "value": null,
                "title": null
            },
            {
                "name": "开除",
                "value": 7,
                "title": "政纪处分"
            }
        ]
    }
let seriesArry = [];
    for ( let i in data ) {
        seriesArry.push({
            type:'bar',
            barWidth: '12',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    textStyle: {color: '#000'},
                    formatter: function(a){
                        return a.data.name
                    },
                    interval:0,//横轴信息全部显示
                }
            },
            data:data[i],
        })
        console.log(data[i])
    }
      this.chart.setOption({
                    color: ['#3e6591', '#eb7d22', '#d73f45','#f2c955', '#00a69d', '#46d185', '#ec5845','#3398DB','#c487ee'],
                    grid: {
                        left: 210,
                        bottom:'10%',
                    },
                    title: {
                        text: title,
                        x:'center',
                        top:10,
                        textStyle:{
                            color:'#504e4e'
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    xAxis: {
                        axisLine: {
                            lineStyle: {color: '#ccc'}
                        },
                        axisLabel: {
                            textStyle: {color: '#777'}
                        }
                    },
                    yAxis: [{
                        name: '问责类型',
                        // nameLocation: 'start',
                        axisLabel: {
                            show: true,
                            interval: 0,
                            rotate: -10
                        },
                        nameTextStyle: {
                            fontWeight: 'bold',
                            padding:[0,0,0,50]
                        },
                        position: 'left',
                        left:200,
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
                        data: ['党纪处分', '政纪处分', '组织调整或组织处理']
                    },{
                        type : 'category',
                        data : ['党纪处分', '政纪处分', '组织调整或组织处理'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#0c3b71'
                            }
                        },
                        axisLabel: {
                            show: false,
                        }
                    }],
                    series:seriesArry,
                })
    }
  }
}
</script>
