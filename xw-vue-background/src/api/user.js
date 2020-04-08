import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/system/sign/login',
    method: 'post',
    data:data
  })
}

export function getInfo() {
  return request({
    url: '/system/config/query',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/system/sign/logout',
    method: 'post',
    data:{}
  })
}
