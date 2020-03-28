import Vue from 'vue'

Vue.prototype.$ruleString = (name = "", min = 0, max = 0) => {
  let arr = []
  if (min > 0) {
    arr.push({
      required: true,
      message: name + '不能为空',
      trigger: 'blur'
    })
    arr.push({
      min: min,
      message: name + '最少' + min + '个字符',
      trigger: 'blur'
    })
  }
  if (max > 0) {
    arr.push({
      max: max,
      message: name + '最多' + max + '个字符',
      trigger: 'blur'
    })
  }
  return arr
}

Vue.prototype.$ruleRequired = (name = '') => {
  return [{
    required: true,
    message: '必须选择 ' + name,
    trigger: 'blur',
  }]
}
