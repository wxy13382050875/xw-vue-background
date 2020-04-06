import request from '@/utils/request'

//创建人员档案
export function createPerArchives(param) {
  return request({
    url: '/biz/person/create',
    method: 'post',
    data:param
  })
}

// 2.0、人员档案列表
export function getPerArchiversList(param) {
  return request({
    url: '/biz/person/list',
    method: 'post',
    data:param
  })
}
//创建婚丧事宜记录
export function createBanquet(param) {
  return request({
    url: '/biz/banquet/create',
    method: 'post',
    data:param
  })
}
