'use strict'

// ::::: 全局配置对象 :::::
var Config = {
  // 版本号
  Version: "v1.0.0",

  // 默认的会话时间
  SessionLifeTime: 1800,

  // 请求地址
  Url: {
    Api: "", // 业务接口
    Socket: "", // 长连接
    Upload: "", // 文件上传
    Download: "", // 文件下载
    Preview: "", // 文档预览
    Front: "", // 前端地址
    IsDebug: false, // 是否为开发环境
  }
}

let hosts = {
  "http://localhost:9528 | http://127.0.0.1:7502": {
    Api: "http://192.168.0.102:16002",
    Socket: "",
    Upload: "http://127.0.0.1:23000",
    Download: "http://127.0.0.1:23001",
    Preview: "http://127.0.0.1:23003",
    Front: "http://127.0.0.1:7502",
    IsDebug: true,
  },
  "http://ydmx.vip:7502 | http://www.ydmx.vip:7502": {
    Api: "http://ydmx.vip:17502",
    Socket: "",
    Upload: "http://ydmx.vip:23000",
    Download: "http://ydmx.vip:23001",
    Preview: "http://ydmx.vip:23003",
    Front: "http://ydmx.vip:7502",
    IsDebug: false,
  }
}

// 处理Hosts地址
let origin = window.location.origin
let exists = false
for (let key in hosts) {
  let arr = key.split("|")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim() == origin) {
      exists = true
      Config.Url = hosts[key]
      break
    }
  }
  if (exists) {
    break
  }
}
if (!exists) {
  alert("配置文件错误，请尝试Ctrl+F5强制刷新，或联系技术支持")
  throw new "config file error! ~ /static/config/env.js"
}
