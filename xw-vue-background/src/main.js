import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// 引入dog2框架逻辑
import '@/assets/dog2js/index.js'
// 引入框架级UI库
// import dog2ui from '@/assets/dog2ui/index.js'

// Vue.use(dog2ui)

// 正整数和浮点数输入自定义指令
import floatNumber from '@/assets/floatNumber'
Vue.use(floatNumber)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$w = window



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
