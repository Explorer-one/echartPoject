<template>
  <div class="head_page">
    <div>
      面包屑
    </div>
    <el-dropdown class="username" @command="handleClick">
        <span class="el-dropdown-tit">
          {{ name }}
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
</template>
<script>
export default {

  data () {
    return {
      route: [],
      logData: null,
      name: '谢石长'
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
.head_page {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  background: #ffffff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>
