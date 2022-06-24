<template>
  <header>
    <div class="head-left">
      <router-link to="/">
        <!-- <img :src="getUrl" class="logo" /> -->
        <!-- <span class="sub-title">{{$store.state.winInfo.subtitle}}</span> -->
        <span class="sub-title">智慧监督应用设计平台</span>
      </router-link>
    </div>
    <template>
      <div class="user-box">
        <div class="navbox">
          <navbar />
        </div>
      </div>
      <div class="user-box">
        <div class="user userbtn">
          <i class="dsicon ds-user1"></i>
          <el-dropdown class="username" @command="handleClick">
            <span class="el-dropdown-tit">
              {{ $store.state.username }}
              <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item command="/system">系统设置</el-dropdown-item> -->
              <!-- <el-dropdown-item command="/userinfo">个人信息</el-dropdown-item> -->
              <el-dropdown-item command="meCommis"
                >我的待办</el-dropdown-item
              >
              <el-dropdown-item command="meCommis"
                >我的申请</el-dropdown-item
              >
              <el-dropdown-item command="LogOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </template>
  </header>
</template>
<script>
import navbar from '@/components/Nav/index.vue'
export default {
  components: {
    navbar
  },
  data () {
    return {
      route: [],
      logData: null
    }
  },
  computed: {
    getUrl () {
      return 'images/logo.png'
      // return logoUrl(this.$store.state.winInfo.appicon)
    }
  },
  methods: {
    // 退出
    LogOut () {
      this.$confirm('该操作会退出登录,是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // sessionStorage.removeItem("isSuper");
          localStorage.clear()
          const _ssoinfo = sessionStorage.getItem('_ssoinfo')
          if (_ssoinfo == null) {
            sessionStorage.clear()
            return
          }
          sessionStorage.clear()
          const ssoinfo = JSON.parse(_ssoinfo)
          if (ssoinfo.ssocenter == null || ssoinfo.clientid == null) {
            return
          }

          window.location.href =
            ssoinfo.ssocenter +
            '/oauth/ssologout?next=' +
            window.location.href.substring(
              0,
              window.location.href.indexOf('#/')
            )
        })
        .catch(() => {})
    },
    handleClick (cmd) {
      if (cmd === 'LogOut') {
        this.LogOut()
      } else {
        this.$router.push({
          path: '/redirect',
          query: {
            path: cmd
          }
        })
      }
      if (cmd === 'meCommis') {
        this.$router.push({ path: '/store/meCommission' })
      }
    },
    gopage (path) {
      this.$router.push(path)
    }
  },
  created () {
    const route = this.$router.options.routes.filter((item) => {
      return item.path === '/'
    })
    if (route.length && route[0].children) {
      this.route = route[0].children
    }
    // 获取是否为超级管理员 isSuper 是的话为true 不是为false
    setTimeout(() => {
      this.logData = JSON.parse(sessionStorage.getItem('isSuper'))
    }, 500)
  }
}
</script>

<style lang="scss">
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  // width: 100%;
  height: 70px;
  border-bottom: solid 1px rgba(219, 228, 236, 0.15);
  color: #ffffff;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  box-sizing: border-box;
  // background: #1c63f3;
  z-index: 10;
  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.34);
  &.position {
    position: absolute;
  }
  .head-left {
    > a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    img {
      margin-right: 10px;
      width: 44px;
      height: 26px;
      vertical-align: bottom;
      flex-shrink: 0;
    }
    .title {
      font-size: 36px;
      font-weight: bold;
    }
    .sub-title {
      min-width: 260px;
      display: inline-block;
      font-size: 26px;
      font-weight: bold;
      // padding-left: 15px;
      // margin-left: 10px;
      color: #fff;
      line-height: 36px;
    }
  }
  button.login {
    width: 88px;
    height: 42px;
    font-size: 13px;
    border-radius: 10px;
  }

  .user-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .car {
      font-size: 18px;
      cursor: pointer;
      .dsicon {
        position: relative;
        font-size: 24px;
        vertical-align: -2px;
        span {
          position: absolute;
          top: -5px;
          left: 16px;
          padding: 1px 3px;
          background: #fa1d1d;
          color: #fff;
          font-size: 14px;
          border-radius: 8px;
        }
      }
    }
    .user {
      margin: 0 0px 0 40px;
      display: flex;
      align-items: center;

      .user-photo {
        font-size: 30px;
        margin-right: 5px;
      }
    }
    .el-dropdown {
      color: #fff;
      &.dropdown-router {
        margin-left: 30px;
      }
      &-tit {
        // font-size: 14px;
        font-size: 18px;
        cursor: pointer;
        // i {
        //   font-size: 18px;
        // }
      }
    }
    .userbtn {
      min-width: 78px;
      font-size: 18px;
      .username {
        font-size: 18px;
        &.el-dropdown {
          color: #fff;
        }
      }
      .dsicon {
        font-size: 36px;
        margin-right: 5px;
        vertical-align: -8px;
      }
      &.navbox {
        a {
          color: #abcae4;
        }
        a + a {
          margin-left: 30px;
        }
        .router-link-exact-active {
          color: #fff;
        }
        .el-dropdown {
          color: #abcae4;
          font-size: 14px;
        }
      }
    }
  }
}

// .el-dropdown {
//   vertical-align: top;
// }
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
