import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import permission from './modules/permission'

// 全局注册 Vuex。
Vue.use(Vuex)

// 实例化 Vuex 下的 Store 对象。
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    permission
  },
  getters
})

export default store
