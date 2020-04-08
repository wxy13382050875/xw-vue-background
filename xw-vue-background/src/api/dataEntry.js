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
//创建离职交接
export function createLeaveOffice(param) {
  return request({
    url: '/biz/leave/create',
    method: 'post',
    data:param
  })
}
//创建创建获奖记录
export function createPrize(param) {
  return request({
    url: '/biz/prize/create',
    method: 'post',
    data:param
  })
}

//创建年度考核记录
export function createAssessment(param) {
  return request({
    url: '/biz/assessment/create',
    method: 'post',
    data:param
  })
}

//创建信访记录
export function createPetition(param) {
  return request({
    url: '/biz/petition/create',
    method: 'post',
    data:param
  })
}
//创建问责处理记录
export function createPunish(param) {
  return request({
    url: '/biz/petition/create',
    method: 'post',
    data:param
  })
}
