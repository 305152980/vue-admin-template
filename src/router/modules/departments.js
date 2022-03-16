
import Layout from '@/layout'

// 组织架构模块的路由规则。
export default {
  path: '/departments',
  name: 'departments',
  component: Layout,
  redirect: '/departments',
  children: [{
    path: '',
    name: 'Departments',
    component: () => import('@/views/departments'),
    meta: {
      title: '组织架构',
      icon: 'tree'
    }
  }]
}
