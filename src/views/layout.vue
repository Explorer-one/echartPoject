<template>
 <div>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
 </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/header.vue'
export default {
  name: 'layoutPage',
  components: {
    Footer,
    Header
  },
  data () {
    return {}
  }
}
</script>
