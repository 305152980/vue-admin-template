import Layout from '@/layout'

// 公司设置模块的路由规则。
export default {
  path: '/setting',
  name: 'Setting',
  component: Layout,
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
