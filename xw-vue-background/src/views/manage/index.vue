<template>
  <div class="manage-container">
    <div class="manage-header">
      <div class="title">查询</div>
      <div class="manage-condition">
        <div>
          <span>状态：</span>
          <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /></el-select>
        </div>
        <div>
          <span>政治面貌：</span>
          <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /></el-select>
        </div>
        <div>
          <span>职级：</span>
          <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /></el-select>
        </div>
        <div>
          <span>处理(处分)类型：</span>
          <el-select v-model="value" placeholder="请选择"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /></el-select>
        </div>
      </div>
      <div class="manage-query-content">
        <div class="manage-query">
          <span style="width: 4.5rem; line-height: 2.5rem;">关键字：</span>
          <el-input v-model="input" style="width: 25.25rem;" placeholder="请输入内容" prefix-icon="el-icon-search" />
        </div>

        <div class="manage-query-btn">
          <el-button type="primary">查询</el-button>
          <el-button type="danger">清空</el-button>
        </div>
      </div>
    </div>
    <div class="manage-body">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" align="center" label="序号" width="150" />
        <el-table-column prop="name" align="center" label="姓名" width="120" />
        <el-table-column prop="province" align="center" label="性别" width="120" />
        <el-table-column prop="city" align="center" label="职务" width="120" />
        <el-table-column prop="address" align="center" label="级别" width="300" />
        <el-table-column prop="zip" align="center" label="政治面貌" width="120" />
        <el-table-column prop="zip" align="center" label="影响期限" width="220" />
        <el-table-column prop="zip" align="center" label="状态" width="220" />
        <el-table-column fixed="right" align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
     <div class="manage-pagination">
       <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
        
      </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'Manage',
  components: {
    Pagination
  },
  data() {
    return {
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      input: ''
    }
  },

  methods: {
    handleClick(row) {
      console.log(row)
    },
    getList() {
      // this.listLoading = true
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total

      //   // Just to simulate the time of the request
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, 1.5 * 1000)
      // })
    },
  }
}
</script>

<style lang="scss" scoped>
.manage-header {
  margin: 1.25rem;
  border-radius: 5px;
  border: 1px solid #1f5193;
  background-color: #e0e8ee;
  .title {
    background-color: #1f5193;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #ffffff;
  }
  .manage-condition {
    display: flex;
    justify-content: space-between;
    margin-left: 3.125rem;
    margin-right: 3.125rem;
    margin-top: 0.625rem;
  }
  .manage-query-content {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-top: 0.625rem;
    margin-left: 3.125rem;
    margin-bottom: 0.625rem;
    .manage-query {
      display: flex;
      justify-content: space-between;
    }
    .manage-query-btn {
      display: flex;
      justify-content: space-between;
      margin-left: 1.25rem;
    }
  }
}
.manage-body{
  margin: 1.25rem;
  border-radius: 5px;
  border: 1px solid #1f5193;
  background-color: #e0e8ee;
}
.manage-pagination{
  float: right;
}
</style>
