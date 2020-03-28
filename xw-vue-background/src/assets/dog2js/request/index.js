import Vue from 'vue'
import axios from 'axios'
import { tipMsg } from '../../lib/js/element'
import { MessageBox } from 'element-ui'

// 登录弹框状态（避免重复弹框）
let loginTimeoutFlag = false

// HTTP请求接口
let http = (api, params = {}, rejectBack = false) => {
  let headers = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Token': GetCache('Token')
    }
  }
  return new Promise((resolve, reject) => {
    axios.post(Config.Url.Api + api, params, headers).then(res => {
      if (!res.data) {
        tipMsg('服务器开小差', 'error')
        return reject(res)
      }
      if (res.data.code == 0) {
        let now = new Date().getTime() / 1000
        SetCache('RequestAt', now)
        return resolve(res.data)
      }
      if (res.data.code == 3000) {
        window.location.href = window.location.origin
        return
      }
      if (res.data.code == 3002) {
        window.location.href = window.location.origin + "/#/404"
        return
      }
      if (res.data.code == 3001) {
        window.location.href = window.location.origin + "/#/reset-pwd"
        return
      }
      if (res.data.code == 2003) {
        if (api == '/system/sign/logout') {
          return
        }
        showDialogLoginForPwd("登录超时")
        return
      }
      if (res.data.code == 2004) {
        MessageBox.alert(`你没有操作权限，即将返回首页`, '提示', {
          confirmButtonText: '确定',
          callback: () => {
            window.location.href = window.location.origin
          }
        })
        return
      }
      if (res.data.code == 2005) {
        tipMsg(res.data.msg)
        return
      }
      tipMsg(res.data.msg)
      if (rejectBack) {
        reject(res.data)
      }
    }).catch(err => {
      tipMsg(`连接服务器失败`, 'error')
      reject(err)
    })
  })
}

Vue.prototype.$http = http

// 账号密码登录+获取系统配置
let login = (account, pwd, callback, errorCb = function () { }) => {
  http('/system/sign/login', { account: account, pwd: pwd }, true).then(res => {
    let user = res.data
    
    SetCache('UUID', user.Token)
    SetCache('User', user.User)
    SetCache('Roles', user.Roles)
    SetCache('Auth', user.Auth)
    SetCache('Token', user.Token)
    http('/system/config/query', {}, true).then(res => {
      
      let cfg = res.data
      console.log('cfg =' + JSON.stringify(cfg))
      // 写入缓存
      SetCache('Config', cfg)
      // 跳转处理
      loginTimeoutFlag = false
      callback()
    }).catch(() => {
      errorCb()
    })
  }).catch(() => {
    errorCb()
  })
}

Vue.prototype.$login = login

// 密码登录方式：会话超时弹框
let showDialogLoginForPwd = (title) => {
  if (loginTimeoutFlag) {
    return
  }
  loginTimeoutFlag = true
  let account = GetCache("User.Account")
  let message = `
    <div>当前账号：` + account + `</div>
    <div>请输入密码，重新激活登录状态</div>
  `
  MessageBox.prompt('', title, {
    confirmButtonText: '登录',
    cancelButtonText: '取消',
    message: message,
    dangerouslyUseHTMLString: true,
    closeOnClickModal: false,
    inputPattern: /^.{1,50}$/,
    inputErrorMessage: '请输入密码，不能超过50个字符',
    beforeClose: (action, instance, done) => {
      if (action !== 'confirm') {
        done()
        loginTimeoutFlag = false
        return
      }
      instance.confirmButtonLoading = true
      instance.confirmButtonText = '正在登录...'
      let pwd = instance.inputValue
      login(account, pwd, () => {
        instance.confirmButtonLoading = false
        instance.confirmButtonText = '登录'
        loginTimeoutFlag = false
        done()
      }, () => {
        instance.confirmButtonLoading = false
        instance.confirmButtonText = '登录'
      })
    }
  }).then(value => {
    loginTimeoutFlag = false
  }).catch(() => {
    loginTimeoutFlag = false
  })
}

export {
  http,
  loginTimeoutFlag
}
