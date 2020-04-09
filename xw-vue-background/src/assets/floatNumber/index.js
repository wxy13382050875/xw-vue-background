import Vue from 'vue'
import floatNumber from './floatNumber.js'

const install = function(Vue) {
  Vue.directive('floatNumber', floatNumber)
}

if (window.Vue) {
  window[ 'floatNumber' ] = floatNumber
  Vue.use(install);
}

floatNumber.install = install
export default floatNumber