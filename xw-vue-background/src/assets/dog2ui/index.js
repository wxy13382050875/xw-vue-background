import Dialog from './base/Dialog.vue'
import Table from './base/Table.vue'

let components = {
  Dialog,
  Table
}

const customComponents = {
  install: function (Vue) {
    for (let key in components) {
      let name = `D2${key}`
      Vue.component(name, components[key])
    }
  }
}

export default customComponents
