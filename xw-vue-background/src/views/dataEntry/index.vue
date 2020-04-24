<template>
  <div class="data-entry-container" style="width: 100%;">
    <div class="data-entry-header">
      <div>
        <router-link to="/dataEntry/add-user-info"><el-button type="primary">新增领导干部</el-button></router-link>
      </div>

      <div>
        <span class="demonstration">开始时间</span>
        <el-date-picker v-model="form.CreatedAtStart" type="date" placeholder="选择日期" />
        <span class="demonstration">结束时间</span>
        <el-date-picker v-model="form.CreatedAtEnd" type="date" placeholder="选择日期" />
        <el-button type="primary" @click="onQueryClick">查询</el-button>
        <el-button type="primary" @click="onSubmit">导出</el-button>
      </div>
    </div>
    <div class="data-entry-body">
      <el-table :data="dataSource" border style="width: 100%">
        <el-table-column fixed prop="PersonId" align="center" label="序号" width="150" />
        <el-table-column prop="Name" align="center" label="姓名" width="120" />
        <el-table-column prop="DeptId" align="center" label="单位" width="120" />
        <el-table-column prop="JoinTime" align="center" label="入党时间" width="120" />
        <el-table-column prop="PunishName" align="center" label="处分情况" width="300" />
        <el-table-column prop="JobStatusTitle" align="center" label="状态" width="220" />
        <el-table-column fixed="right" align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleDetailClick(scope.row)">详情</el-button>
            <router-link :to="'/dataEntry/components?PersonId=' + scope.row.PersonId"><el-button type="text" size="small">修改</el-button></router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data-entry-pagination"><pagination v-show="total > 0" :total="total" :page.sync="form.page" :limit.sync="form.pagesize" @pagination="getList" /></div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { getPerArchiversList } from '@/api/dataEntry.js'

export default {
  name: 'DataEntry',
  components: {
    Pagination
  },

  data() {
    return {
      total: 0,
      form: {
        CreatedAtStart: null,
        CreatedAtEnd: null,
        page: 1,
        pagesize: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },

      dataSource: []
    }
  },
  created() {
    // console.log(this.$store.getters.user )
    this.getList()
    console.log(this.$store.state.user)
  },
  methods: {
    handleDetailClick(row) {
      console.log(row)
    },
    handleChangeClick(row) {
      console.log(row)
    },
    getList() {
      this.listLoading = true
      console.log(this.form)
      getPerArchiversList(this.form).then(response => {
        this.dataSource = response.data.list
        this.dataSource.forEach((item, index) => {
          item.JobStatusTitle = this.$w.GetEnumTitleByKey('JobStatus', item.JobStatus)
        })
        console.log(this.dataSource)
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    onQueryClick() {
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
.data-entry-header {
  margin: 1.25rem;
  display: flex;
  justify-content: space-between;
}

.data-entry-body {
  margin: 1.25rem;
  border-radius: 5px;
  border: 1px solid #1f5193;
  background-color: #e0e8ee;
}

.data-entry-pagination {
  float: right;
}
</style>
