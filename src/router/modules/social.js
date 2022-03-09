import Layout from '@/layout'

// 社保模块的路由规则。
export default {
  path: '/social_securitys',
  name: 'Social_securitys',
  component: Layout,
  children: [{
    path: '',
    name: 'Social_securitys',
    component: () => import('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}
