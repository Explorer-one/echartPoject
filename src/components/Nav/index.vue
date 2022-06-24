<template>
  <div class="navbar">
    <template v-for="(item,i) in routes">
      <template  v-if="item.meta && item.meta.title && !item.meta.hidden">
          <template v-if="item.meta.dropDown">
            <i v-if="item.meta.icon" :class="item.meta.icon" :key="i+'i'"></i>
            <el-dropdown :key="i" @command="goPage">
              <span class="el-dropdown-link cursor" :class="activename.startsWith(item.path) ? 'active':''">
                <i class="dsicon ds-shujujieru"></i>{{item.meta.title}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="navbar dropdown-css-k">
                <template v-for="(it,ii) in item.children">
                  <el-dropdown-item v-if="it.meta && it.meta.title && (!it.meta.usertype || (it.meta.usertype && $store.state.app.usertype && $store.state.app.usertype != '1' ))" :key="ii" :command=" '/' + item.path + '/' + it.path">
                      {{it.meta.title}}
                  </el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
          <template v-else>
            <router-link class="navbar-item" v-if="item.meta && item.meta.title && (!item.meta.usertype || (item.meta.usertype && $store.state.app.usertype && $store.state.app.usertype != '1' ))" :to="item.path=='/'? (item.redirect? '/' + item.redirect:item.path): '/' + item.path" :key="i">
              <i v-if="item.meta.icon" :class="item.meta.icon"></i>{{item.meta.title}}
            </router-link>
          </template>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      routes: []
    }
  },
  computed: {
    activename: function () {
      const path = this.$route.path.replace(/\//g, '')
      return path
    }
  },
  methods: {
    goPage (path) {
      this.$router.replace({ path: '/redirect', query: { path } })
    }
  },
  mounted () {
    const routes = this.$router.options.routes.filter(item => {
      return item.path === '/'
    })
    if (routes.length && routes[0].children) {
      this.routes = routes[0].children
    }
  }
}
</script>
<style lang="scss">
$font-size:18px;
.navbar{
  min-width: 1042px;;
  font-size: $font-size;
  margin: 0 !important;
  &-item{
    display: inline-block;
    padding:8px 26px;
    line-height: 28px;
    color: rgba($color: #fff, $alpha: 0.7);
    &.router-link-exact-active,&.router-link-active{
      color: #fff;
      font-weight:bold;
      background: rgba($color: #000, $alpha: 0.2);
      border-radius: 23px;
      text-decoration:none;
    }
    .dsicon{
      font-size: 19px;
      margin-right: 3px;
    }
    &:hover{
     text-decoration:none;
    }
  }
  &-item + &-item,&-item + .el-dropdown, .el-dropdown + &-item{
    margin-left: 35px;
  }
  .el-dropdown{
      color: #b0d9ff !important;
      font-size: $font-size;
      .el-dropdown-link{
        padding: 9px 26px;
        &:hover{
          color: white;
        }
      }
      .el-dropdown-link.active{
        color: #fff;
        background: rgba($color: #000, $alpha: 0.2);
        font-weight:bold;
        border-radius: 23px;
      }
    }
    .el-dropdown-menu__item{
      .navbar-item{
        color: #333;
      }
    }
  .dsicon{
    font-size: 22px;
    vertical-align: -3px;
    margin-right: 4px;
  }
  a{
    &:hover{
      color: white;
    }
  }
}

.dropdown-css-k.el-dropdown-menu{
    border:1px solid #1c63f3;
    // display: block !important;
    min-width: 150px;
    border-radius: 0;
    .el-dropdown-menu__item{
      // font-size: 15px;
      color: #222;
      padding-left: 25px;
      line-height: 36px;
      border: 1px solid transparent;
      &:hover{
        color: white;
        background-color: #1c63f3;
        border: 1px solid white;
      }
    }
}
</style>
