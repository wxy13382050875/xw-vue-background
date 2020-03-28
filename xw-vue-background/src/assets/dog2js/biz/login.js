import Vue from 'vue'
import { http, loginTimeoutFlag } from '../request/index'

Vue.prototype.$visit = (path, value) => {
  let uuid = GetCache("UUID")
  if (!uuid) {
    uuid = Uuid()
    SetCache("UUID", uuid)
  }

  let param = {
    Path: path,
    Value: String(value),
    Uuid: uuid,
  }
  http('/system/log/visit', param).then(res => { })
}