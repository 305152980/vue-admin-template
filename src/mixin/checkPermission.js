import store from '@/store'

export default {
  methods: {
    // key 是权限点，用户有这个权限点就返回 true，没有就返回 false。
    checkPermission(key) {
      const userInfo = store.state.user.userInfo
      if (userInfo && userInfo.roles && userInfo.roles.points && userInfo.roles.points.length) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false
    }
  }
}

