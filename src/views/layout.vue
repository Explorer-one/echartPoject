<template>
 <div class="layout_page">
   <div class="columnLayOut">
     <div class="columnLayOut-left">
       <Nav style="border:1px solid black"/>
     </div>
     <div class="routerShow">
        <Header></Header>
        <router-view></router-view>
     </div>
   </div>
 </div>
</template>
<script>
import Header from '@/components/header.vue'
import Nav from '@/components/Nav/index.vue'
export default {
  name: 'layoutPage',
  components: {
    Header,
    Nav
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
.layout_page {
  .columnLayOut {
    display: flex;
    &-left {
      width:200px;
      height: 100%;
    }
    .routerShow {
      width: 100%;
    }
  }
}
</style>
