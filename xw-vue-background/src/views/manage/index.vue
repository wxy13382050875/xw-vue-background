<template>
  <div class="manage-container">
    <div class="manage-header">
      <div class="title">查询</div>
      <div class="manage-condition">
        <el-form ref="form" :model="form" label-width="130px">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="状态">
                <el-select v-model="form.JobStatus" placeholder="请选择状态" style="width: 100%;">
                  <el-option v-for="(o, i) in $w.GetEnumArr('WorkingStateType')" :key="i" :value="o.value" :label="o.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="政治面貌">
                <el-select v-model="form.PolitOutlook" placeholder="请选择政治面貌" style="width: 100%;">
                  <el-option v-for="(o, i) in $w.GetEnumArr('PolitOutlook')" :key="i" :value="o.value" :label="o.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="级别">
                <el-select v-model="form.JobLevel" placeholder="请选择级别" style="width: 100%;">
                  <el-option v-for="(o, i) in $w.GetEnumArr('rankType')" :key="i" :value="o.value" :label="o.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="处理(处分)类型">
                <el-select v-model="form.Punish" multiple placeholder="请选择处理(处分)类型" style="width: 100%;">
                  <el-option v-for="(o, i) in $w.GetEnumArr('PunishmentType')" :key="i" :value="o.value" :label="o.label" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="关键字："><el-input v-model="form.Kw" style="width: 25.25rem;" placeholder="请输入内容" prefix-icon="el-icon-search" /></el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="">
                <el-button type="primary" @click="onQueryClick">查询</el-button>
                <el-button type="danger" @click="onClearClick">清空</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="manage-body">
      <el-table :data="dataSource" border style="width: 100%">
        <el-table-column fixed prop="PersonId" align="center" label="序号" width="150" />
        <el-table-column prop="Name" align="center" label="姓名" width="120" />
        <el-table-column prop="Gender" align="center" label="性别" width="120" />
        <el-table-column prop="Job" align="center" label="职务" width="120" />
        <el-table-column prop="JobLevel" align="center" label="级别" width="300" />
        <el-table-column prop="PolitOutlook" align="center" label="政治面貌" width="120" />
        <el-table-column prop="zip" align="center" label="影响期限" width="220" />
        <el-table-column prop="JobStatus" align="center" label="状态" width="220" />
        <el-table-column fixed="right" align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="manage-pagination"><pagination v-show="total > 0" :total="total" :page.sync="form.page" :limit.sync="form.limit" @pagination="getList" /></div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'; // Secondary package based on el-pagination
import { getPerArchiversList } from '@/api/dataEntry.js';
export default {
  name: 'Manage',
  components: {
    Pagination
  },
  data() {
    return {
      total: 0,
      form: {
        Punish: null,
        DeptId: null,
        JobStatus: null,
        PolitOutlook: null,
        JobLevel: null,
        Kw: '',
        page: 1,
        limit: 20
      },

      dataSource: []
    };
  },
  created() {
    // console.log(getDefaultState());
    this.getProList();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    getProList() {
      this.listLoading = true;
      console.log(this.form);
      getPerArchiversList(this.form).then(response => {
        this.dataSource = response.data.list;
        // this.total = response.data.total
        // Just to simulate the time of the request
        console.log(this.dataSource);
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    onQueryClick() {
      this.getProList();
    },
    onClearClick() {
      this.form = {};
    }
  }
};
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
.manage-body {
  margin: 1.25rem;
  border-radius: 5px;
  border: 1px solid #1f5193;
  background-color: #e0e8ee;
}
.manage-pagination {
  float: right;
}
</style>
