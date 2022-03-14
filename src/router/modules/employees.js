import Layout from '@/layout'

// 员工模块的路由规则。
export default {
  path: '/employees',
  component: Layout,
  redirect: '/employees',
  children: [{
    path: '', //  子级路由地址如果为空，意味着此组件是父级路由的默认路由组件。
    name: 'Employees', // 给路由规则加上 name 属性，方便后面进行的权限设置。
    component: () => import('@/views/employees'),
    meta: {
      // 路由元信息，里面可以存储一些路由信息。
      title: '员工', // 当前模块的中文名称。
      icon: 'people'
    }
  // }, {
  //   path: 'detail/:id', // 动态路由参数：/:id 表示 id 必须填；/:id? 表示 id 可填可不填。
  //   component: () => import('@/views/employees/detail'),
  //   hidden: true,
  //   meta: {
  //     title: '员工详情'
  //   }
  // }, {
  //   path: 'print/:id', // 子级路由：写 / 表示从根路径开始算起，不写 / 表示从父级路由的路径开始算起。
  //   component: () => import('@/views/employees/print'),
  //   hidden: true
  // }]
  }]
}
