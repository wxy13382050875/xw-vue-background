<template>
  <div class="weddings-funerals-container">
    <div class="weddings-funerals-content">
      <div class="title">领导干部操办婚丧喜庆事宜情况登记表</div>
      <div class="weddings-funerals-edit">
        <div class="edit-wf-item">
          <el-form ref="form" :model="form" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="工作单位及职务"><el-input v-model="form.PersonId" /></el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="办理事项"><el-input v-model="form.BanquetTitle" /></el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="办理时间"><el-date-picker v-model="form.BanquetTime" type="date" value-format="yyyy-MM-dd" placeholder="选择办理日期" style="width: 100%;" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理地点"><el-input v-model="form.BanquetPlace" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车辆使用量"><el-input v-model="form.CarNum" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车辆来源"><el-input v-model="form.CarFrom" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否合办">
                  <el-radio-group v-model="form.SubjectType" size="mini" @change="changeSubjectType">
                    <el-radio label="1">是</el-radio>
                    <el-radio label="0">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="实际桌数"><el-input v-model="form.DeskNum" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="宴席标准">
                  <el-col :span="14"><el-input v-model="form.DeskMoney" /></el-col>
                  <el-col :span="10">元桌（含酒水）</el-col>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="亲属人数"><el-input v-model="form.RelativesNum" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="非亲属人数"><el-input v-model="form.NonRelativesNum" /></el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="其他需要报告内容"><el-input v-model="form.OtherReport" /></el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
    <div class="wf-bottom" style="width: 100%; text-align:center"><el-button type="primary" @click="onSubmit" style="">添加</el-button></div>
  </div>
</template>

<script>
  import {
    createBanquet
  } from '@/api/dataEntry.js'
export default {
  name: 'WeddingsFunerals',

  components: {},
  data() {
    return {
      form: {
        PersonId: '',
        BanquetTitle: '',
        BanquetTime: '',
        BanquetPlace: '',
        IsTogether: false,
        CarNum: '',
        CarFrom: '',
        DeskNum: '',
        DeskMoney: '',
        RelativesNum: '',
        NonRelativesNum: '',
        OtherReport: ''
      },
      radio: '1'
    };
  },

  methods: {
    changeSubjectType(nv) {
      this.form.IsTogether = nv;
    },
    onSubmit() {
      console.log(this.form)
      createBanquet(this.form).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.listLoading = false
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.weddings-funerals-content {
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
  .weddings-funerals-edit {
    background-color: #e0e8ee;
    margin-top: 0.625rem;
    .edit-wf-item {
      padding: 0.625rem;
    }
  }
}
.wf-bottom {
}
</style>
