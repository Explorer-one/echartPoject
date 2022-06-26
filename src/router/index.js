import Vue from 'vue'
import Router from 'vue-router'
// import {configinfo} from '@/api/login'

Vue.use(Router)

const router = new Router({
  model: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout'),
      redirect: '/frontDesk',
      children: [
        // {
        //   path: '/modePage',
        //   name: 'modePage',
        //   meta: {
        //     title: '首页'
        //   },
        //   component: () => import('@/views/ModePage')
        // }
        {
          path: '/frontDesk',
          name: 'forntDesk',
          meta: {
            title: '首页',
            icon: ''
          },
          component: () => import('@/views/FrontDesk.vue')
        },
        {
          path: '/editCenter',
          redirect: '/editWork',
          name: 'editWork',
          meta: {
            title: '编辑中心',
            icon: 'el-icon-price-tag'
          },
          component: () => import('@/views/ChildLayout.vue'),
          children: [
            {
              path: '/editCenter/editWork',
              name: 'editWork',
              meta: {
                title: '编辑器一',
                icon: 'el-icon-chat-dot-round'
              },
              component: () => import('@/views/EditCenter/Codemirror.vue')
            }
            // {
            //   path: '/editCenter/editWork',
            //   name: 'editWork',
            //   meta: {
            //     title: '编辑器一',
            //     icon: 'el-icon-chat-dot-round'
            //   },
            //   component: () => import('@/views/EditCenter/Codemirror.vue')
            // }
          ]
        }
      ]
    },
    {
      path: '/modePage',
      name: 'modePage',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/ModePage')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/HomeView')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }
    // {
    //   path: '/redirect',//报404时  打开当前页面
    //   name: 'redirect',
    //   component: () => import('@/views/redirect')
    // }

  ]
})

// router.beforeEach((to, from, next) => {
//   goNext(to, from, next)
// })

// const whitelist = ['/login', '/census']

// function goNext (to, from, next) {
//   // let meta = to.meta
//   if (whitelist.indexOf(to.path) > -1) {
//     next()
//     return
//   }
//   // if (meta.requiresAuthen) {
//   const userstr = sessionStorage.getItem('authen_user')
//   if (userstr != null) {
//     next()
//   } else {
//     const query = {
//       ...to.query,
//       redirect: to.path
//     }
//     sessionStorage.setItem('path_query', JSON.stringify(query))
//     next('/login')
//   }
//   // } else {
//   //     next()
//   // }
// }
export default router
