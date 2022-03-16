import request from '@/utils/request'

// 与员工模块相关的 API 接口请求。

// 查询员工的综合列表数据。
export function getEmployeeList(params) {
  return request({
    url: '/sys/user',
    params
  })
}
