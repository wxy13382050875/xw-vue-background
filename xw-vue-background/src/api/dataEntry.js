import request from '@/utils/request'

//创建人员档案
export function createPerArchives(param) {
  return request({
    url: '/biz/person/create',
    method: 'post',
    data:param
  })
}
