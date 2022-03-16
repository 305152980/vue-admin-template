import Layout from '@/layout'

// 公司设置模块的路由规则。
export default {
  path: '/setting',
  name: 'settings',
  component: Layout,
  redirect: '/setting',
  children: [{
    path: '',
    name: 'Setting',
    component: () => import('@/views/setting'),
    meta: {
      title: '公司设置',
      icon: 'setting'
    }
  }]
}
