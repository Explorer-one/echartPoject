<template>
  <!-- 周期 -->
  <div ref="cycle" style="width:100%;height:100%"></div>
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
      this.chart = echarts.init(this.$refs.cycle)
      this.setOption()
    },
    setOption () {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          position: function (p) {
            // 其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10]
          }
        },
        legend: {
          top: '90%',
          itemWidth: 10,
          itemHeight: 10,
          data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
          textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize: '12'
          }
        },
        series: [
          {
            name: '年龄分布',
            type: 'pie',
            center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: [
              '#065aab',
              '#066eab',
              '#0682ab',
              '#0696ab',
              '#06a0ab',
              '#06b4ab',
              '#06c8ab',
              '#06dcab',
              '#06f0ab'
            ],
            label: { show: false },
            labelLine: { show: false },
            data: [
              { value: 1, name: '0岁以下' },
              { value: 4, name: '20-29岁' },
              { value: 2, name: '30-39岁' },
              { value: 2, name: '40-49岁' },
              { value: 1, name: '50岁以上' }
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
