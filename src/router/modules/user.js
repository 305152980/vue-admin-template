
import Layout from '@/layout'

// 管理员模块的路由规则。
export default {
  path: '/user',
  component: Layout,
  hidden: true,
  name: 'User',
  children: [
    {
      path: '/user/info',
      component: () => import('@/views/user/info'),
      name: 'MyInfo',
      hidden: true,
      meta: {
        title: '我的信息'
      }
    }
  ]
}
