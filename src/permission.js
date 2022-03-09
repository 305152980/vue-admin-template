// 路由的权限拦截。
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // 引入进度条。
import 'nprogress/nprogress.css' // 引入进度条样式。

// 路由导航前置守卫。
const whileList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  NProgress.start() // 开启进度条。
  // next() 是一个必须执行的钩子函数，不执行程序就会被卡住。
  // next() 放行。
  // next(false) 终止。
  // next(地址) 跳到某个地址。
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/') // 跳到主页。
    } else {
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
        next()
      } else {
        next()
      }
    }
  } else {
    if (whileList.indexOf(to.path) > -1) {
      // 表示访问的页面路径在白名单里面。
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done() // 解决手动输入地址时，进度条不关闭的问题。
})

// 路由导航后置守卫。
router.afterEach(() => {
  NProgress.done() // 关闭进度条。
})
