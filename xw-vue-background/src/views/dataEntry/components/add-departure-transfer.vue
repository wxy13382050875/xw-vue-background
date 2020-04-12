<template>
  <div class="departure-transfer-container">
    <div class="departure-transfer-content">
      <div class="title">领导干部离职交接情况登记表</div>
      <div class="departure-transfer-edit">
        <div class="edit-dt-item">
          <el-form ref="form" :model="dataSource" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="调离的单位及职务"><el-input v-model="dataSource.OldDeptId" placeholder="请输入单位" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新任的单位">
                  <el-select v-model="dataSource.NewDeptId" disabled placeholder="请选择新任的单位" style="width: 100%;">
                    <el-option label="111" value="shanghai" />
                    <el-option label="222" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新任职单位及职务"><el-input v-model="dataSource.NewJob" placeholder="请输入新任职单位及职务" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="调离时间"><el-date-picker v-model="dataSource.LeaveDate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;" /></el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="个人借用,保管,使用的文件资料交还情况">
                  <el-input
                    v-model="dataSource.FileBack"
                    type="textarea"
                    size="mini"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    placeholder="请输入个人借用,保管,使用的文件资料交还情况"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="公用办公设备交还情况">
                  <!-- <el-input v-model="form.name" style="width: 1050px;" placeholder="请输入谈话简要事由"/> -->
                  <el-input v-model="dataSource.DeviceBack" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入谈话简要事由" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="办公用房腾退情况">
                  <!-- <el-input v-model="form.name" style="width: 1050px;" placeholder="请输入备注"/> -->
                  <el-input v-model="dataSource.OfficeSpaceBack" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入办公用房腾退情况" />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="党组织,工资等关系转办情况">
                  <el-input v-model="dataSource.OrgAndSalary" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入党组织,工资等关系转办时间" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="其他需要交接的情况">
                  <!-- <el-input v-model="form.name" style="width: 1050px;" placeholder="请输入备注"/> -->
                  <el-input v-model="dataSource.Other" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入其他需要交接的情况" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="dt-bottom"><el-button type="primary" @click="onSubmit">添加</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { createLeaveOffice } from '@/api/dataEntry.js'
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      dataSource: {
        PersonId: 3,
        OldDeptId: 0,
        NewDeptId: 2,
        NewDeptName: '',
        NewJob: '',
        LeaveDate: '',
        FileBack: '',
        DeviceBack: '',
        OfficeSpaceBack: '',
        OrgAndSalary: '',
        Other: ''
      },
      radio: '1'
    }
  },

  methods: {
    onSubmit() {
      this.dataSource.DeptId = parseInt(this.dataSource.DeptId)
      this.dataSource.PersonId = parseInt(this.dataSource.PersonId)
      this.listLoading = true
      createLeaveOffice(this.dataSource).then(response => {
        console.log(response)
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.departure-transfer-content {
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
  .departure-transfer-edit {
    background-color: #e0e8ee;
    margin-top: 0.625rem;
    .edit-dt-item {
      padding: 0.625rem;
    }
    .update-file-item {
      .upload-file {
        margin-left: 3.125rem;
        margin-bottom: 0.625rem;
      }
    }

    .dt-bottom {
      width: 100%;
      text-align: center;
      margin-bottom: 0.625rem;
    }
  }
}
</style>
