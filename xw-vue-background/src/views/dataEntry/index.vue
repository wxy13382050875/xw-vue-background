<template>
  <div class="data-entry-container">
    <div class="data-entry-header">
      <div><el-button type="primary" @click="onSubmit">新增领导干部</el-button></div>

      <div>
        <span class="demonstration">开始时间</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        <span class="demonstration">结束时间</span>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        <el-button type="primary" @click="onSubmit">导出</el-button>
      </div>
    </div>
    <div class="data-entry-body">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" align="center" label="序号" width="150" />
        <el-table-column prop="name" align="center" label="姓名" width="120" />
        <el-table-column prop="province" align="center" label="单位" width="120" />
        <el-table-column prop="city" align="center" label="入党时间" width="120" />
        <el-table-column prop="address" align="center" label="处分情况" width="300" />
        <el-table-column prop="zip" align="center" label="状态" width="220" />
        <el-table-column fixed="right" align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">详情</el-button>
            <el-button type="text" size="small" @click="handleClick(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="data-entry-pagination"><pagination v-show="total > 0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /></div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'; // Secondary package based on el-pagination

export default {
  name: 'DataEntry',
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
    };
  },

  methods: {
    handleClick(row) {
      console.log(row);
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
    }
  }
};
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
