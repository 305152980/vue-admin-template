import axios from 'axios'
import { Message } from 'element-ui'
import { setTimeStamp, getTimeStamp } from '@/utils/auth'
import store from '@/store'
import router from '@/router'

const TimeOut = 90 * 60 * 1000 // 定义 token 的过期时间（这个需要与后端约定），单位毫秒。

// create an axios instance
const service = axios.create(
  {
    // 环境变量 npm run dev  /dev-api   生产环境 npm run build  /prod-api
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10000 // 请求的超时时间。
  }
)

// request interceptor
service.interceptors.request.use(async config => {
  if (store.getters.token) {
    if (CheckIsTimeOut()) {
      // token 已过期。
      await store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('您的 token 已经失效'))
    }
    // token 未过期。
    config.headers.Authorization = `Bearer ${store.getters.token}`
    // 这是我修改的一处 bug。
    setTimeStamp()
    return config
  }
  return config
}, error => {
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, async error => {
  if (error.response && error.response.data && error.response.data.code === 10002) {
    // 后端告诉前端 token 超时了。
    await store.dispatch('user/logout')
    router.push('/login')
  }
  Message.error(error.message)
  return Promise.reject(error)
})

// 检查 token 是否过期。
function CheckIsTimeOut() {
  return (Date.now() - getTimeStamp()) > TimeOut
}

export default service
