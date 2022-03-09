import Cookies from 'js-cookie'

const TokenKey = 'hr_sass_token'

const timeKey = 'hr_sass_time_key' // 存储时间戳的 key。

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}

export function getTimeStamp() {
  return Cookies.get(timeKey)
}
