<template>
  <div class="reporting-activities-container">
    <div class="ra-content">
      <div class="title">领导干部参加民主（组织）生活对照检查材料</div>
      <div class="edit-ra-item">
        <el-form ref="form" inline="true" :model="form" label-width="130px">
          <el-form-item label="附件">
            <el-upload
              class="upload-file"
              action="http://ynseego.com:16002/system/file/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="handleSuccess"
              :on-exceed="handleExceed"
              multiple=""
              :file-list="form.fileList"
              :headers="headers"
            >
              <el-button size="small" type="primary">点击上传附件</el-button>
              <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div class="dt-bottom"><el-button type="primary" @click="onSubmit">添加</el-button></div>
    </div>
  </div>
</template>

<script>
import {
  updateBizFiles
} from '@/api/dataEntry.js'
import { getToken } from '@/utils/auth'
export default {
  name: 'WeddingsFunerals',
  components: {},
  data() {
    return {
      headers: {
        Token: getToken()
      },

      form: {
        fileList: []
      },
      Files: []
    }
  },

  methods: {
    handleSuccess(res, file) {
      this.Files.push(res.data)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
      // this.Files = URL.createObjectURL(file.raw);
    },
    handleExceed(files, fileList) {
      // this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    onSubmit() {
      console.log(this.params)
      const params = {}
      params.PersonId = parseInt(this.$route.query.PersonId)
      params.TableType = 2
      params.Files = this.Files
      console.log(params)
      this.listLoading = true
      updateBizFiles(params).then(response => {
        console.log(response)
        // this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ra-content {
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
  .edit-ra-item {
    // margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }
  .dt-bottom {
    width: 100%;
    text-align: center;
    margin-bottom: 0.625rem;
  }
}
</style>
