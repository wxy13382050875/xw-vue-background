<template>
  <div class="questioning-remind-container">
    <div class="questioning-remind-content">
      <div class="title">领导干部被约谈提醒(批评教育、诫勉谈话)情况登记表</div>
      <div class="questioning-remind-edit">
        <div class="edit-qr-item">
          <el-form ref="form" :model="dataSource" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="谈话种类">
                  <el-select v-model="dataSource.TalkType" placeholder="请选择谈话种类" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('TalkType')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="谈话时间"><el-date-picker v-model="dataSource.TalkDate" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="谈话人姓名">
                  <el-input v-model="dataSource.UserName"   placeholder="请输入谈话人姓名" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="谈话人单位">
                  <el-input v-model="dataSource.DeptName"   placeholder="请输入谈话人单位" />
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="谈话人职务">
                  <el-input v-model="dataSource.UserJob"   placeholder="请输入谈话人职务" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="谈话简要事由">
                  <el-input v-model="dataSource.TalkContent"   placeholder="请输入谈话简要事由" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注">
                  <el-input v-model="dataSource.Remark"   placeholder="请输入备注" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>

        <div class="update-file-item">
          <el-upload
            class="upload-file"
            action="http://ynseego.com:16002/system/file/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="1"
            :on-success="handleSuccess"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :headers="headers"
          >
            <el-button size="small" type="primary">点击上传附件</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </div>
      </div>
      <div class="wf-bottom" style="width: 100%; text-align:center">
        <el-button type="primary" style="" @click="onSubmit">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createTalk } from '@/api/dataEntry.js'
import { getToken } from '@/utils/auth'
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      headers: { Token: getToken() },
      fileList:[],
      dataSource: {
        PersonId: 3,
        DeptId: this.$store.state.user.DeptId,
        TalkType: '',
        TalkDate: '',
        UserName: '',
        DeptName: '',
        UserJob: '',
        TalkContent: '',
        Remark: '',
        Files: null
      },
      imageUrl: ''
    }
  },

  methods: {
    handleSuccess(res, file) {
      console.log(res)
      
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)

    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    onSubmit() {
      this.dataSource.DeptId = parseInt(this.dataSource.DeptId)
      this.dataSource.PersonId = parseInt(this.dataSource.PersonId)
      // this.form.CarNum = parseInt(this.form.CarNum)
      // this.form.DeskNum = parseInt(this.form.DeskNum)
      // this.form.RelativesNum = parseInt(this.form.RelativesNum)
      // this.form.NonRelativesNum = parseInt(this.form.NonRelativesNum)
      // this.form.DeskMoney = parseFloat(this.form.DeskMoney)
      this.listLoading = true
      createTalk(this.dataSource).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.questioning-remind-content {
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
  .questioning-remind-edit {
    background-color: #e0e8ee;
    margin-top: 0.625rem;
    .update-file-item {
      .upload-file {
        margin-left: 3.125rem;
        margin-bottom: 0.625rem;
      }
    }
    .edit-qr-item {
      padding: 0.625rem;
    }
  }
}
</style>
