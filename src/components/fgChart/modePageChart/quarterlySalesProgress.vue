<template>
<!-- 季度销售进度 -->
  <div ref="quarterlySalesProgress" style="width:100%; height:100%"></div>
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
      this.chart = echarts.init(this.$refs.quarterlySalesProgress)
      this.setOption()
    },
    setOption () {
      const option = {
        series: [
          {
            name: '销售进度',
            type: 'pie',
            radius: ['130%', '150%'],
            // 移动下位置  套住50%文字
            center: ['48%', '80%'],
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            startAngle: 180,
            // 鼠标经过不需要放大图形
            hoverOffset: 0,
            data: [
              {
                value: 100,
                itemStyle: {
                  // 颜色渐变#00c9e0->#005fc1
                  color: new echarts.graphic.LinearGradient(
                    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                    0,
                    0,
                    0,
                    1,
                    [
                      { offset: 0, color: '#00c9e0' }, // 0 起始颜色
                      { offset: 1, color: '#005fc1' } // 1 结束颜色
                    ]
                  )
                }
              },
              {
                value: 100,
                itemStyle: { color: '#12274d' }
              },
              {
                value: 200,
                itemStyle: {
                  color: 'transparent'
                }
              }
            ]
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
