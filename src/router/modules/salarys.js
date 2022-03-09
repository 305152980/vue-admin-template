
import Layout from '@/layout'

// 工资模块的路由规则。
export default {
  path: '/salarys',
  name: 'Salarys',
  component: Layout,
  children: [{
    path: '',
    name: 'Salarys',
    component: () => import('@/views/salarys'),
    meta: {
      title: '工资',
      icon: 'money'
    }
  }]
}
