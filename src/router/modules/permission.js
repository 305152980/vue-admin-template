
import Layout from '@/layout'

// 权限管理模块的路由规则。
export default {
  path: '/permission',
  name: 'permissions',
  component: Layout,
  redirect: '/permission',
  children: [{
    path: '',
    name: 'Permission',
    component: () => import('@/views/permission'),
    meta: {
      title: '权限管理',
      icon: 'lock'
    }
  }]
}
