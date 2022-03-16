import request from '@/utils/request'

// 与组织架构模块相关的 API 接口请求。

// 查询组织架构数据。
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}
