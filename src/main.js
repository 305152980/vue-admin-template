import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

// 等价于 import { val1, val2, val3... } as directives from '@/directives'
import * as directives from '@/directives'
import Components from '@/components'

import '@/icons' // icon
import '@/permission' // permission control

// 全局注册自定义指令。
// directives 是所有自定义指令的一个集合。
Object.keys(directives).forEach(key => {
  // key 是指令名称。
  Vue.directive(key, directives[key])
})

// 全局注册自定义组件。
Vue.use(Components)

// 全局注册 ElementUI 组件库。
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

// 实例化 Vue 对象，并在此对象上挂载 路由 和 Vuex 的实例化对象。
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
