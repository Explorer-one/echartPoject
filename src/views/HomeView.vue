<template>
  <div class="fg_hold_page">
    <div class="fg_hold_page-header">
    </div>
    <div class="echartContent">
        <div class="chartLeft">
          <div class="warehouse">
            <warehouse/>
          </div>
          <div class="branch">
            <products class="branchChart"/>
          </div>
          <div class="products">
            <branch class="productsChart"/>
          </div>
        </div>

        <div class="chartCenter">
          <div class="center_top">
            <div class="smartPlanet">
              <img class="imgMove oneImg" src="../assets/images/echartImg/star_tv.png" alt="">
              <img class="imgMove twoImg" src="../assets/images/echartImg/star_tv.png" alt="">
              <img class="imgMove threeImg" src="../assets/images/echartImg/star_tv.png" alt="">
              <img class="imgMove fourImg" src="../assets/images/echartImg/star_tv.png" alt="">
              <img class="imgMove fiveImg" src="../assets/images/echartImg/star_tv.png" alt="">
              <img class="imgMove sixImg" src="../assets/images/echartImg/star_tv.png" alt="">
              <div class="bigPlanet">
                <span class="newDateissue">今日发布</span>
              </div>
            </div>
          </div>
          <div class="center_bottom">
              <div class="bucketList">
                <div v-for="(item, index) in list" :key="index">
                  <div class="imgIsTitle">
                    <img :src="item.titleImg" alt="">
                    <span class="num">{{item.num}}</span>
                  </div>
                  <div>
                    <img :src="item.centerImg" alt="" style="width:86px; height:106px">
                  </div>
                  <div class="lasteMsg">
                    {{item.msg}}
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div class="chartRight">
          <div class="warehouse">
            <!-- 分布 -->
            <distribute/>
          </div>
          <div class="branch">
            <!-- 周期 -->
            <cycle class="branchChart"/>
          </div>
          <div class="products">
            <!-- 原因 -->
            <cause class="productsChart"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import warehouse from '@/components/fgChart/chartTable/warehouse.vue'
import products from '@/components/fgChart/chartTable/products.vue'
import branch from '@/components/fgChart/chartTable/branch.vue'
import distribute from '@/components/fgChart/chartTable/distribute.vue'
import cycle from '@/components/fgChart/chartTable/cycle.vue'
import cause from '@/components/fgChart/chartTable/cause.vue'

import title from '@/assets/images/echartImg/title.png'
import bucket from '@/assets/images/echartImg/bucket.png'

export default {
  data () {
    return {
      list: [
        {
          titleImg: title,
          num: 10,
          centerImg: bucket,
          msg: '11111'
        },
        {
          titleImg: title,
          num: 10,
          centerImg: bucket,
          msg: '2222'
        },
        {
          titleImg: title,
          num: 10,
          centerImg: bucket,
          msg: '3333'
        },
        {
          titleImg: title,
          num: 10,
          centerImg: bucket,
          msg: '4444'
        }
      ]
    }
  },
  components: {
    warehouse,
    products,
    branch,
    distribute,
    cycle,
    cause
  }

}
</script>

<style>

</style>
