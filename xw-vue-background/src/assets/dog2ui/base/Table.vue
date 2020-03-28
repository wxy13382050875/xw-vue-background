<template>
  <section class="table">
    <el-table
      :data="table.list"
      :border="border"
      height="100%"
      :header-row-style="headerStyle"
      :showIndex="showIndex"
    >
      <el-table-column
        type="index"
        width="50"
        v-if="showIndex"
        label="序号"
        header-align="center"
        align="center"
      ></el-table-column>
      <el-table-column
        v-for="(column,index) in table.column"
        :key="index"
        :label="column.title"
        :width="column.width"
        :min-width="column.minWidth"
        header-align="center"
        :align="column.align"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(btn,i) in column.btn"
            :size="btn.size"
            :plain="btn.plain"
            :round="btn.round"
            :circle="btn.circle"
            :loading="btn.loading"
            :disabled="btn.disabled"
            :icon="btn.icon"
            :key="i"
            :type="btn.type"
            @click.stop="btn.callback(self,scope.row,$event)"
          >{{btnLabel(btn.label, scope.row)}}</el-button>
          {{scope.row[column.name]}}
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
export default {
  props: {
    table: {
      type: Object,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    },
    headerStyle: {
      type: Object,
      default: () => ({})
    },
    showIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      self: this
    }
  },
  methods: {
    filterList() {
      this.table.column.map(item => {
        if (!item.filter) {
          return
        }
        let filters = this.$w.vm.$options.filters
        let filterKeys = Object.keys(filters)
        this.table.list.map(data => {
          if (typeof data[item.name] !== "number") {
            return
          }
          let filterArr = item.filter.split(".")
          let len = filterArr.length
          if (!filterKeys.includes(filterArr[0])) {
            data[item.name] = '未知'
            return
          }
          if (len == 1) {
            data[item.name] = filters[filterArr[0]](data[item.name])
          }
          if (len == 2) {
            data[item.name] = filters[filterArr[0]](data[item.name], filterArr[1])
          }
        })
      })
    },
    btnLabel(label, item) {
      if (typeof label == "string") {
        return label
      }
      if (Object.prototype.toString.call(label) == "[object Object]") {
        return label[item[label.field]] || "错误"
      }
      return "未知"
    }
  },
  mounted() {
    this.filterList()
  },
  updated() {
    this.filterList()
  }
};
</script>
<style lang="less" scoped>
.table {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>