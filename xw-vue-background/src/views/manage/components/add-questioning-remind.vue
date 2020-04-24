<template>
  <div class="questioning-remind-container">
    <div class="questioning-remind-content">
      <div class="title">领导干部被约谈提醒(批评教育、诫勉谈话)情况登记表</div>
      <div class="questioning-remind-edit">
        <div class="edit-qr-item">
          <el-form ref="form" :model="form" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="谈话种类">
                  <el-select v-model="form.TalkType" placeholder="请选择谈话种类" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('TalkType')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="谈话时间">
                  <el-date-picker
                    v-model="form.TalkDate"
                    type="date"
                    value-format="yyyy-MM-dd"
                    placeholder="选择日期"
                    style="width: 100%;"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="谈话人姓名">
                  <el-input v-model="form.UserName" placeholder="请输入谈话人姓名" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="谈话人单位">
                  <el-input v-model="form.DeptName" placeholder="请输入谈话人单位" />
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="谈话人职务">
                  <el-input v-model="form.UserJob" placeholder="请输入谈话人职务" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="谈话简要事由">
                  <el-input v-model="form.TalkContent" placeholder="请输入谈话简要事由" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注">
                  <el-input v-model="form.Remark" placeholder="请输入备注" />
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
    <div v-for="(item,index) in dataSource" :key="index" class="weddings-funerals-list">
      <div style="padding: 0.625rem;">
        <el-collapse @change="handleChange">
          <el-collapse-item :title="item.CreatedAt | formatDate" name="1">
            <el-form ref="form" :model="form" label-width="130px">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="谈话种类">
                    <el-input v-model="form.TalkType" disabled />

                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="谈话时间">
                    <el-input v-model="form.TalkDate" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="谈话人姓名">
                    <el-input v-model="form.UserName" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="谈话人单位">
                    <el-input v-model="form.DeptName" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="谈话人职务">
                    <el-input v-model="form.UserJob" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="谈话简要事由">
                    <el-input v-model="form.TalkContent" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="备注">
                    <el-input v-model="form.Remark" disabled />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>

        </el-collapse>
      </div>

    </div>
  </div>
</template>

<script>
import {
  createTalk,
  getTalkList
} from '@/api/dataEntry.js'
import {
  getToken
} from '@/utils/auth'
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      headers: {
        Token: getToken()
      },
      fileList: [],
      form: {
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
  created() {
    if (typeof (this.$route.query.PersonId) !== 'undefined') {
      this.getMyTalkList()
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
      console.log(this.$store.state)
      this.form.DeptId = parseInt(this.$store.state.user.User.DeptId)
      this.form.PersonId = parseInt(this.$route.query.PersonId)

      this.listLoading = true
      createTalk(this.form).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.listLoading = false

        this.getMyTalkList()
      })
    },
    getMyTalkList() {
      const params = {}
      params.PersonId = parseInt(this.$route.query.PersonId)
      console.log(params)
      this.listLoading = true
      getTalkList(params).then(response => {
        this.dataSource = response.data
        console.log(this.dataSource)
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
