import Vue from 'vue'

Vue.prototype.$enumKv = (field, name) => {
  if (!Enum[field]) {
    return 0
  }
  let arr = Object.keys(Enum[field])
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    let v = Enum[field][key] || ''
    if (v == name) {
      return parseInt(key)
    }
  }
  return 0
}