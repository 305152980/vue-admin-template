
import Layout from '@/layout'

// 考勤模块的路由规则。
export default {
  path: '/attendances',
  component: Layout,
  redirect: '/attendances',
  children: [{
    path: '',
    name: 'Attendances',
    component: () => import('@/views/attendances'),
    meta: {
      title: '考勤',
      icon: 'excel'
    }
  }]
}
