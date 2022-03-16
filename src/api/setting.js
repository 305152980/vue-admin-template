import request from '@/utils/request'

// 与公司设置模块相关的 API 接口请求。

// 查询角色列表信息。
export function getRoleList(params) {
  return request({
    url: '/sys/role',
    params
  })
}
