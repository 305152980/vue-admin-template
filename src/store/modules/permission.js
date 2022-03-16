import { constantRoutes, asyncRoutes } from '@/router'

const state = {
  routes: constantRoutes // 默认所有人都拥有静态路由的权限。
}

const mutations = {
  // newRoutes 是用户的 静态 + 动态 路由的权限。
  setRoutes(state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes]
  }
}

const actions = {
  // menus 是当前用户资料的 menus 属性，代表用户所拥有的动态路由的权限。
  // menus  ['setting', 'approvals']
  filterRoutes(context, menus) {
    var newRoutes = []
    menus.forEach(item => {
      newRoutes.push(...asyncRoutes.filter(route => route.name === item))
    })
    context.commit('setRoutes', newRoutes)
    return newRoutes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
