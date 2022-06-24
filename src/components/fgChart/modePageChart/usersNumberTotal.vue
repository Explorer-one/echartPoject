<template>
<!-- 全国用户总量统计 -->
  <div ref="dataTotal" style="width:100%; height:100%"></div>
</template>

<script>
import * as echarts from 'echarts'
import resize from '../mixins/resize'
export default {
  mixins: [resize],
  data () {
    return {
      chart: null,
      entiretyRate: [],
      entiretyName: []
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.dataTotal)
      this.setOption()
    },
    setOption () {
      const item = {
        name: '',
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
          color: '#254065'
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
          itemStyle: {
            color: '#254065'
          }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
          extraCssText: 'opacity: 0'
        }
      }
      // 1.实例化对象
      // 指定配置项和数据
      // 配置项和数据给我们实例化的对象
      // 指定配置项和数据
      const option = {
        // 提示框组件
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(169,169,169,0.3)',
          borderColor: 'gray',
          textStyle: {
            color: '#fff' // 设置文字颜色
          },
          formatter: '<span style="color: #fff",>{a} <br/>{b} : {c}</span>',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效  这个模块我们此时不需要删掉即可
            type: 'shadow'// 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // 直角坐标系内绘图网格（区域）
        grid: {
          left: '0%',
          right: '3%',
          bottom: '3%',
          top: '3%',
          //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
          containLabel: true,
          // 是否显示直角坐标系网格
          show: true,
          // grid 四条边框的颜色
          borderColor: 'rgba(0,240,255,0.3)'
        },
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#00fffb' // 0% 处的颜色
          }, {
            offset: 1, color: '#0061ce' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
        // 控制x轴
        xAxis: [
          {
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
              // true意思：图形和刻度居中中间
              // false意思：图形在刻度之间
              alignWithLabel: false,
              show: false
            },
            axisLabel: {
              color: '#4c9bfd'
            },
            // x坐标轴颜色设置
            axisLine: {
              lineStyle: {
                color: 'rgba(0,240,255,0.3)'
                // width: 3,
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              alignWithLabel: false,
              show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
              color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
              lineStyle: {
                color: 'rgba(0,240,255,0.3)'
                // width:8,  x轴线的粗细
                // opcity: 0,   如果不想显示x轴线 则改为 0
              }
            },
            // y轴 分割线的样式
            splitLine: {
              lineStyle: {
                color: 'rgba(0,240,255,0.3)'
              }
            }
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item,
              item, 900, 750, 600, 480, 240]
          }
        ]
      }
      this.chart.setOption(option)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  }
}
</script>

<style>

</style>
