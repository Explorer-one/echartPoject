<template>
<!-- 渠道分布 -->
  <div ref="earchPage" style="width:100%; height:100%"></div>
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
      this.chart = echarts.init(this.$refs.earchPage)
      this.setOption()
    },
    setOption () {
    //   var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
    //   this.chart.setOption(option)
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
