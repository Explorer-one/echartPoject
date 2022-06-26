<template>
<div>
    <Plan>
        <div slot="header" class="clearfix">首页</div>
        <div class="boxList">
            <div class="box" v-for="(item, index) in list" :key="index" @click="goAllPage(item)">
                <span>{{item.name}}</span>
            </div>
        </div>
    </Plan>
</div>
</template>

<script>
import Plan from '@/components/plan.vue'
export default {
  components: { Plan },
  data () {
    return {
      list: [
        {
          name: '立可得智能看板',
          url: '/modePage'
        },
        {
          name: 'FG-HOLD可视化看板',
          url: '/home'
        }
      ]
    }
  },
  methods: {
    goAllPage (val) {
      this.$router.push(val.url)
    }
  }
}
</script>

<style lang="scss">
.boxList {
    display: inline-block;
   .box {
        display: inline-block;
        width: 200px;
        height: 100px;
        border: 1px solid #dbdcdd;
        text-align: center;
        line-height: 100px;
        border-radius: 10px;
        cursor: pointer;
        margin-right:20px;
        margin-top: 20px;
   }
   .box:hover {
       margin-top: 10px;
   }
}
</style>
