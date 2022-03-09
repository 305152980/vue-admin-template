import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'

const state = {
  // token 初始化。
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    // token 持久化。
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    // 删除本地缓存中的 token。
    removeToken()
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  // async function run() {
  //   try {
  //       await Promise.reject(new Error("错误信息"))
  //   } catch (error) {
  //       error.message // "错误信息"
  //   }
  // }
  async login(context, data) {
    const result = await login(data)
    // result 就是 token。
    context.commit('setToken', result)
    setTimeStamp()
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    const baseInfo = await getUserDetailById(result.userId)
    context.commit('setUserInfo', { ...result, ...baseInfo })
    return result
  },
  logout({ commit }) {
    commit('removeToken')
    commit('removeUserInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
