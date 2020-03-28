import Vue from 'vue'

Vue.prototype.$user = (key = '') => {
  let user = GetCache('User') || {}
  if (!user) {
    return ''
  }
  if (key == "") {
    return user
  }
  return user[key] || ''
}

Vue.prototype.$token = () => {
  return GetCache('Token') || ""
}

Vue.prototype.$hasRole = (role) => {
  let arr = GetCache('Roles') || []
  return arr.includes(role)
}

Vue.prototype.$hasAuth = (auth) => {
  let arr = GetCache('Auth') || []
  return arr.includes(auth)
}