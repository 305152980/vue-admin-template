import Layout from '@/layout'

// 社保模块的路由规则。
export default {
  path: '/social_securitys',
  name: 'social_securitys',
  component: Layout,
  redirect: '/social_securitys',
  children: [{
    path: '',
    name: 'SocialSecuritys',
    component: () => import('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}
