<template>
  <div class="disciplinary-action-container">
    <div class="disciplinary-action-content">
      <div class="title">领导干部受问责处理、党政纪处分等情况登记表</div>
      <div style="display: flex;justify-content: space-between;">
        <div class="disciplinary-action-edit">
          <el-form ref="form" :model="form" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="单位">
                  <el-input v-model="form.unit" maxlength="10" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="职务">
                  <el-input v-model="form.position" maxlength="10" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理(处分)时间">
                  <el-date-picker v-model="form.PunishDate" type="date" placeholder="选择日期" style="width: 100%;" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="处理(处分)类型">
                  <el-select v-model="form.PunishType" placeholder="请选择处理(处分)类型" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('PunishType')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="处理(处分)原因">
                  <el-input v-model="form.PunishReason" maxlength="10" />
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="惩处机关">
                  <el-input v-model="form.PunishOrg" maxlength="20" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="影响期限">
                  <el-select v-model="form.PunishTerm" placeholder="请选择影响期限" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('PunishTerm')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class="update-file-item">
            <el-upload
              class="upload-file"
              action="http://ynseego.com:16002/system/file/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="handleSuccess"
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList"
              :headers="headers"
            >
              <el-button size="small" type="primary">点击上传附件</el-button>
            </el-upload>
          </div>
        </div>

      </div>
      <div class="dt-bottom">
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </div>
    </div>
    <div v-for="(item,index) in dataSource" :key="index" class="weddings-funerals-list">
      <div style="padding: 0.625rem;">
        <el-collapse @change="handleChange">
          <el-collapse-item :title="item.CreatedAt | formatDate" name="1">
            <el-form ref="form" :model="dataSource" label-width="130px">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="单位">
                    <el-input v-model="dataSource.unit" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="职务">
                    <el-input v-model="dataSource.position" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="处理(处分)时间">
                    <el-input v-model="dataSource.PunishDate" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="处理(处分)类型">
                    <el-input v-model="dataSource.PunishType" disabled />
                  </el-form-item>

                </el-col>
                <el-col :span="24">
                  <el-form-item label="处理(处分)原因">
                    <el-input v-model="dataSource.PunishReason" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item label="惩处机关">
                    <el-input v-model="dataSource.PunishOrg" disabled />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="影响期限">
                    <el-input v-model="dataSource.PunishTerm" disabled />
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
// import employment from "@/components/dataEntry/employment.vue";
import {
  createPunish,
  getPunishList
} from '@/api/dataEntry.js'
import {
  getToken
} from '@/utils/auth'
export default {
  name: 'Manage',
  components: {},
  data() {
    return {
      headers: {
        Token: getToken()
      },
      form: {
        unit: '',
        position: '',
        PersonId: '',
        PunishDate: '',
        PunishType: '',
        PunishReason: '',
        PunishOrg: '',
        PunishTerm: '',
        Files: ''
      },
      dataSource: []
    }
  },
  created() {
    if (typeof (this.$route.query.PersonId) !== 'undefined') {
      this.getMyBanquetList()
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
      this.form.Files = URL.createObjectURL(file.raw)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    onSubmit() {
      console.log(this.form)
      this.form.PersonId = parseInt(this.$route.query.PersonId)
      this.listLoading = true
      createPunish(this.form).then(response => {
        console.log(response)
        this.listLoading = false
        this.getMyPunishList()
      })
    },
    changeSubjectType(nv) {
      this.form.IsReal = nv
    },
    getMyPunishList() {
      const params = {}
      params.PersonId = parseInt(this.$route.query.PersonId)
      console.log(params)
      this.listLoading = true
      getPunishList(params).then(response => {
        this.dataSource = response.data
        console.log(this.dataSource)
        this.listLoading = false
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  .disciplinary-action-content {
    margin: 1.25rem;
    border-radius: 5px;
    border: 1px solid #1f5193;
    background-color: #e0e8ee;
    margin-bottom: 3.75rem;

    .title {
      background-color: #1f5193;
      text-align: center;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #ffffff;
    }

    .disciplinary-action-edit {
      background-color: #e0e8ee;
      margin-top: 0.625rem;
      padding: 0.625rem;
    }

    .dt-bottom {
      width: 100%;
      text-align: center;
      margin-bottom: 0.625rem;
    }
  }
</style>
