<template>
  <div class="navbar_page">
    <div class="navbar">
      <div class="logo">
        <span v-if="!collapsedTitle">作业中心</span>
      </div>
      <div>
      <el-menu
        :default-active="path"
        class="el-menu-vertical-demo"
        :router="true"
      >
          <template v-for="(item, index) in routes">
            <template v-if="item.children && item.children.length">
                <template slot="title"> <i v-if="item.meta.icon" :class="item.meta.icon"></i>{{item.meta.title}}</template>
              <el-submenu  :index="item.path" :key="index">
                <el-menu-item v-for="(it,i) in item.children" :key="i" :index="it.path"><i v-if="it.meta.icon" :class="it.meta.icon"></i>{{it.meta.title}}</el-menu-item>
              </el-submenu>
            </template>
            <template v-else >
              <el-menu-item  :index="item.path" :key="index">
                <i class="el-icon-setting"></i>
                <span slot="title">{{item.meta.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      routes: [],
      openeds: ['/frontDesk'],
      collapsed: '',
      width: '100px',
      collapsedTitle: false,
      path: '/frontDesk'
    }
  },
  methods: {
    // handleOpen (key, keyPath) {
    //   console.log('111111', key, keyPath)
    // },
    // handleClose (key, keyPath) {
    //   console.log('2222', key, keyPath)
    // },
    hasSubmenu (item) {
      console.log(Array.isArray(item.children) && item.children.length > 0)
      return Array.isArray(item.children) && item.children.length > 0
    },
    // a标签路由禁止点击跳转
    linkClickHandle (e) {
      if (e && e.preventDefault) {
        e.preventDefault()
      } else {
        window.event.returnValue = false // 兼容IE
      }
      return false
    }
  },
  mounted () {
    const routes = this.$router.options.routes.filter(item => {
      return item.path === '/'
    })
    if (routes.length && routes[0].children) {
      this.routes = routes[0].children
    }
    console.log('this.routes', this.routes)
  }
}
</script>
<style lang="scss">
$nav-width: 200px;
$nav-width-collapse: 64px;
$transition: 0.3s ease-in-out;

// .aside {
//   z-index: 2;
//   height: 100%;
//   overflow: hidden;
//   overflow-y: auto;
//   background-color: #2B333E;
//   box-shadow: 2px 0 3px rgba(0, 21, 41, 0.35);
//   transition: width $transition;

//   .iconfont {
//     display: inline-block;
//     width: 24px;
//     margin-right: 5px;
//     text-align: center;
//     font-size: 18px;
//     vertical-align: middle;
//     color: #409EFF;
//   }
//   .bi{
//     display: inline-block;
//     width: 24px;
//     margin-right: 5px;
//     text-align: center;
//     font-size: 18px;
//     vertical-align: middle;
//     color: #409EFF;
//   }

//   .active-icon {
//     color: #ffd04b;
//   }
// }
.navbar_page {
  // overflow-y: scroll;
  width: 200px;
  .navbar {
    height: calc(100vh - 50px);
    width: 200px;
    .nav-menu {
      /* 指定菜单展开时的宽度，否则过渡动画不生效 */
      width: 200px !important;
      border-right: 0;
      &.el-menu--collapse {
        width: 64px;
      }
      &.horizontal-collapse-transition {
        transition: 200px 0.3s ease-in-out;
      }
    }
  }
  .logo {
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: rgba(63, 67, 72, 0.5);
  }

  .aside.collapsed .logo {
    // background: #fff url('../assets/images/logo.png') center/auto 80% no-repeat;
    // span {
    //   display: none;
    // }
  }

}

</style>
