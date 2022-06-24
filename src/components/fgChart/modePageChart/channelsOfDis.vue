<template>
<!-- 渠道分布 -->
  <div ref="channelsOfDis" style="width:100%; height:100%"></div>
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
      this.chart = echarts.init(this.$refs.channelsOfDis)
      this.setOption()
    },
    setOption () {
      const option = {
        tooltip: {
          show: true,
          // 控制提示框组件的显示位置
          position: ['60%', '10%']
        },
        radar: {
          indicator: [
            { name: '机场', max: 100 },
            { name: '商场', max: 100 },
            { name: '火车站', max: 100 },
            { name: '汽车站', max: 100 },
            { name: '地铁', max: 100 }
          ],
          // 修改雷达图的大小
          radius: '65%',
          shape: 'circle',
          // 分割的圆圈个数
          splitNumber: 4,
          // 修饰雷达图文本颜色
          axisName: {
            color: '#4c9bfd'
          },
          // 分割的圆圈线条的样式
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)'
            },
            splitArea: {
              show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }
        },
        series: [
          {
            name: '北京',
            type: 'radar',
            // 填充区域的线条颜色
            lineStyle: {
              color: '#fff',
              width: 1,
              opacity: 0.5
            },
            data: [[90, 19, 56, 11, 34]],
            // 设置图形标记 （拐点）
            symbol: 'circle',
            // 这个是设置小圆点大小
            symbolsize: 5,
            // 设置小圆点颜色
            itemStyle: {
              color: '#fff'
            },
            label: {
              show: true,
              color: '#fff',
              fontSize: '10'
            },
            // 填充区域的背景颜色
            areaStyle: {
              color: 'rgba(238, 197, 102, 0.6)'
            }
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
