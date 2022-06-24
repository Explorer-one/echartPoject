<template>
  <!-- 分布 -->
  <div ref="distribute" style="width:100%;height:100%"></div>
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
      this.chart = echarts.init(this.$refs.distribute)
      this.setOption()
    },
    setOption () {
      const data = [70, 34, 60, 78, 69]
      const titlename = ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE']
      const valdata = [702, 350, 610, 793, 664]
      const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
      const option = {
        // 图标位置
        grid: {
          top: '10%',
          left: '22%',
          bottom: '10%'
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',

              rich: {
                lg: {
                  backgroundColor: '#339911',
                  color: '#fff',
                  borderRadius: 15,
                  // padding: 5,
                  align: 'center',
                  width: 15,
                  height: 15
                }
              }
            }
          },
          {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barCategoryGap: 50,
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: function (params) {
                  const num = myColor.length
                  return myColor[params.dataIndex % num]
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
              }
            }
          },
          {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barCategoryGap: 50,
            data: [100, 100, 100, 100, 100],
            barWidth: 15,
            itemStyle: {
              normal: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15
              }
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
