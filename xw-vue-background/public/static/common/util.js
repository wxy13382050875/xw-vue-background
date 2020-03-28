var log = console.log

function GetCache(key = '') {
  if (typeof (key) != 'string') {
    return ""
  }
  if (key == "") {
    return ""
  }

  let arr = key.split(".")
  let data = window.localStorage.getItem(arr[0]) || ""

  if (data === "") {
    return ""
  }
  data = JSON.parse(data)

  if (arr.length == 1 || !data || Object.prototype.toString.call(data) != "[object Object]") {
    return data
  }

  for (let i = 1; i < arr.length; i++) {
    key = arr[i]
    data = data[key] || ""
    if (!data || Object.prototype.toString.call(data) != "[object Object]") {
      return data
    }
  }
  return data
}

function SetCache(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function ClearCache() {
  window.localStorage.clear()
}

function GetSessionCache(key) {
  if (typeof (key) != 'string') {
    return ""
  }
  if (key == "") {
    return ""
  }

  let arr = key.split(".")
  let data = window.sessionStorage.getItem(arr[0]) || ""

  if (data === "") {
    return ""
  }
  data = JSON.parse(data)

  if (arr.length == 1 || !data || Object.prototype.toString.call(data) != "[object Object]") {
    return data
  }

  for (let i = 1; i < arr.length; i++) {
    key = arr[i]
    data = data[key] || ""
    if (!data || Object.prototype.toString.call(data) != "[object Object]") {
      return data
    }
  }
  return data
}

function SetSessionCache(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

function ClearSession() {
  window.sessionStorage.clear()
}

function GetUrlParam(key) {
  let hash = window.location.hash
  if (hash == "") {
    return ""
  }
  let arr = hash.split("?")
  if (arr.length < 2) {
    return ""
  }
  if (arr[1] == "") {
    return ""
  }
  arr = arr[1].split("&")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(key + "=") !== 0) {
      continue
    }
    return arr[i].substr((key + "=").length)
  }
  return ""
}

function Uuid() {
  var s = []
  var hexDigits = "0123456789abcdef"
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = "4"
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = ""

  var uuid = s.join("")
  return uuid
}

function ToLoginPage(next) {
  ClearCache()
  ClearSession()
  if (next) {
    next('/login?origin=' + encodeURIComponent(window.location.href))
  } else {
    window.location.href = "/#/login?origin=" + encodeURIComponent(window.location.href)
  }
}

function GetEnumArr(key) {
  let res = []
  let arr = Object.keys(Enum[key])
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i]
    res.push({
      value: parseInt(k),
      label: Enum[key][k]
    })
  }
  return res
}

function StrCut(str, len) {
  if (str.length <= len) {
    return str
  }
  return str.substr(0, len) + "..."
}