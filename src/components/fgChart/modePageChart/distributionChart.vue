<template>
<!-- 点位分布统计数图 -->
  <div ref="distributionChart" style="width:100%; height:100%"></div>
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
      this.chart = echarts.init(this.$refs.distributionChart)
      this.setOption()
    },
    setOption () {
      // 指定配置项和数据
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // 注意颜色写的位置
        color: [
          '#006cff',
          '#60cda0',
          '#ed8884',
          '#ff9f7f',
          '#0096ff',
          '#9fe6b8',
          '#32c5e9',
          '#1d9dff'
        ],
        series: [
          {
            name: '点位统计',
            type: 'pie',
            // 如果radius 是百分比则必须加引号
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',

            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 20, name: '云南' },
              { value: 26, name: '北京' },
              { value: 24, name: '山东' },
              { value: 25, name: '河北' },
              { value: 20, name: '江苏' },
              { value: 25, name: '浙江' },
              { value: 30, name: '四川' },
              { value: 42, name: '湖北' }

            ],
            // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
            label: {
              fontSize: 10,
              color: '#4c9bfd'
            },
            labelLine: {
              length: 6,
              ength2: 8
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
