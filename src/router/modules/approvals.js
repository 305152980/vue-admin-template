import Layout from '@/layout'

// 审批模块的路由规则。
export default {
  path: '/approvals',
  name: 'Approvals',
  component: Layout,
  children: [{
    path: '',
    name: 'Approvals',
    component: () => import('@/views/approvals'),
    meta: {
      title: '审批',
      icon: 'tree-table'
    }
  }]
}
