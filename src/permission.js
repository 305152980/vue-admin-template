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
        const { roles } = await store.dispatch('user/getUserInfo')
        // 获取用户路由的权限。
        const routes = await store.dispatch('permission/filterRoutes', roles.menus)
        // 在路由上设置用户路由的权限。
        router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])
        // 执行完 router.addRoutes() 后， 必须执行 next(to.path)，不能执行 next()。
        next(to.path)
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
})

// 路由导航后置守卫。
router.afterEach(() => {
  NProgress.done() // 关闭进度条。
})
