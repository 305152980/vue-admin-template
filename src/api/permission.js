import request from '@/utils/request'

// 与权限管理模块相关的 API 接口请求。

// 查询权限列表数据。
export function getPermissionList(params) {
  return request({
    url: '/sys/permission',
    params
  })
}
