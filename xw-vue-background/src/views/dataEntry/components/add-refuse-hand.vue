<template>
  <div class="refuse-hand-container">
    <div class="refuse-hand-content">
      <div class="title">领导干部拒收或上交礼金、礼品、有价证券等情况登记表</div>
      <div class="refuse-hand-edit">
        <el-table border :data="infiledList" style="margin-right: 1.875rem;">
          <el-table-column prop="startTime" label="单位" style="width:6vw;" align="center">
            <template scope="scope">
              <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入单位" />
            </template>
          </el-table-column>
          <el-table-column prop="endTime" label="职务" align="center">
            <template scope="scope">
              <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入职务" />
            </template>
          </el-table-column>
          <el-table-column label="拒收或上交礼金、礼品、有价证券等情况" align="center">
            <el-table-column prop="province" label="类别" width="120" align="center">
              <template scope="scope">
                <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入类别" />
              </template>
            </el-table-column>
            <el-table-column prop="city" label="数量(个/件)" width="120" align="center">
              <template scope="scope">
                <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入数量" />
              </template>
            </el-table-column>
            <el-table-column prop="address" label="价值" width="120" align="center">
              <template scope="scope">
                <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入价值" />
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column prop="position" label="拒收或上交时间" align="center">
            <template scope="scope">
              <el-date-picker v-model="form.date1" type="date" placeholder="请选择时间" />
            </template>
          </el-table-column>
          <el-table-column prop="position" label="上交部门" align="center">
            <template scope="scope">
              <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入上交部门" />
            </template>
          </el-table-column>
          <el-table-column prop="position" label="备注" align="center">
            <template scope="scope">
              <el-input v-model="scope.row.remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入备注" />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <div><el-button type="success" size="small" @click.native.prevent="addRow(infiledList)">添加</el-button></div>
              <div style="margin-top: 0.3125rem;"><el-button size="small" @click.native.prevent="deleteRow(scope.$index, infiledList)">移除</el-button></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      radio: '1',
      infiledList: [{ startTime: '', endTime: '', unit: '', position: '' }]
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.refuse-hand-content {
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
  .refuse-hand-edit {
    background-color: #e0e8ee;
    margin: 0.625rem;
  }
}
.rh-bottom {
}
</style>
