import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { tipMsg } from '../assets/lib/js/element.js'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // console.log(res)
    // if the custom code is not 20000, it is judged as an error.
    if (!res) {
      tipMsg('服务器开小差', 'error')
      return Promise.reject(res)
    }

    if (res.code == 0) {
      let now = new Date().getTime() / 1000
      SetCache('RequestAt', now)
      return res
    }
    else if (res.code == 3000) {
      window.location.href = window.location.origin
      return
    }
    else if (res.code == 3002) {
      window.location.href = window.location.origin + "/#/404"
      return
    }

    else if (res.code == 2003) {
      if (api == '/system/sign/logout') {
        return
      }
      showDialogLoginForPwd("登录超时")
      return
    }
    else if (res.code == 2004) {
      MessageBox.alert(`你没有操作权限，即将返回首页`, '提示', {
        confirmButtonText: '确定',
        callback: () => {
          window.location.href = window.location.origin
        }
      })
      return
    }
    else if (res.code == 2005) {
      tipMsg(res.data.msg)
      return
    } else {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }


    // if (res.code !== 0) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

    //   // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //   //   // to re-login
    //   //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //   //     confirmButtonText: 'Re-Login',
    //   //     cancelButtonText: 'Cancel',
    //   //     type: 'warning'
    //   //   }).then(() => {
    //   //     store.dispatch('user/resetToken').then(() => {
    //   //       location.reload()
    //   //     })
    //   //   })
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
