<template>
  <div class="refuse-hand-container">
    <div class="refuse-hand-content">
      <div class="title">领导干部拒收或上交礼金、礼品、有价证券等情况登记表</div>
      <div class="refuse-hand-edit">
        <el-table border :data="form" style="margin-right: 1.875rem;">

          <el-table-column label="拒收或上交礼金、礼品、有价证券等情况" align="center">
            <el-table-column prop="GiftType" label="类别" width="120" align="center">
              <template scope="scope">
                <el-input v-model="scope.row.GiftType" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入类别" />
              </template>
            </el-table-column>
            <el-table-column prop="GiftNum" label="数量(个/件)" width="120" align="center">
              <template scope="scope">
                <el-input v-model="scope.row.GiftNum" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入数量" />
              </template>
            </el-table-column>
            <el-table-column prop="GiftMoney" label="价值" width="120" align="center">
              <template scope="scope">
                <el-input v-model="scope.row.GiftMoney" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入价值" />
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column prop="GiftDate" label="拒收或上交时间" align="center">
            <template scope="scope">
              <el-date-picker v-model="scope.row.GiftDate" value-format="yyyy-MM-dd" type="date" placeholder="请选择时间" style="width: 100%;" />
            </template>
          </el-table-column>
          <el-table-column prop="GiftDept" label="上交部门" align="center">
            <template scope="scope">
              <el-input v-model="scope.row.GiftDept" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入上交部门" />
            </template>
          </el-table-column>
          <el-table-column prop="Remark" label="备注" align="center">
            <template scope="scope">
              <el-input v-model="scope.row.Remark" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入备注" />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <div><el-button type="success" size="small" @click.native.prevent="addRow(scope.row)">添加</el-button></div>
              <!-- <div style="margin-top: 0.3125rem;"><el-button size="small" @click.native.prevent="deleteRow(scope.$index, infiledList)">移除</el-button></div> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="refuse-hand-list">
      <el-table border :data="dataSource" style="margin-right: 1.875rem;">
        <el-table-column prop="DeptName" label="单位" style="width:6vw;" align="center" />
        <el-table-column prop="Job" label="职务" align="center" />
        <el-table-column label="拒收或上交礼金、礼品、有价证券等情况" align="center">
          <el-table-column prop="GiftType" label="类别" width="120" align="center" />
          <el-table-column prop="GiftNum" label="数量(个/件)" width="120" align="center" />
          <el-table-column prop="GiftMoney" label="价值" width="120" align="center" />
        </el-table-column>
        <el-table-column prop="GiftDate" label="拒收或上交时间" align="center" />
        <el-table-column prop="GiftDept" label="上交部门" align="center" />
        <el-table-column prop="Remark" label="备注" align="center" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { createGift, getGiftList } from '@/api/dataEntry.js'
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      dataSource: [],
      radio: '1',
      form: [{ PersonId: '', unit: '', position: '', GiftType: '', GiftNum: '', GiftMoney: '', GiftDept: '', GiftDate: '', Remark: '' }]
    }
  },

  created() {
    if (typeof this.$route.query.PersonId !== 'undefined') {
      this.getMyGift()
    }
  },
  methods: {
    addRow(item) {
      console.log(item)
      item.PersonId = parseInt(this.$route.query.PersonId)
      item.GiftMoney = parseFloat(item.GiftMoney)
      item.GiftNum = parseInt(item.GiftNum)
      createGift(item).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.form = [{ PersonId: '', unit: '', position: '', GiftType: '', GiftNum: '', GiftMoney: '', GiftDept: '', GiftDate: '', Remark: '' }];
        this.listLoading = false
        this.getMyGift()
      })
    },

    getMyGift() {
      const params = {}
      params.PersonId = parseInt(this.$route.query.PersonId);
      console.log(params)
      this.listLoading = true
      getGiftList(params).then(response => {
        this.dataSource = response.data
        console.log(this.dataSource)
        this.listLoading = false
      })
    }
  }
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
.refuse-hand-list{
  margin: 1.25rem;
}
.rh-bottom {
}
</style>
