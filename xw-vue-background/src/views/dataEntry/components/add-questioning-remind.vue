<template>
  <div class="questioning-remind-container">
    <div class="questioning-remind-content">
      <div class="title">领导干部被约谈提醒(批评教育、诫勉谈话)情况登记表</div>
      <div class="questioning-remind-edit">
        <div class="edit-qr-item">
          <el-form ref="form" inline="true" :model="form">
            <el-form-item label="单位" label-width="150px"><el-input v-model="form.name" style="width: 250px;" placeholder="请输入单位" /></el-form-item>
            <el-form-item label="职务" label-width="150px"><el-input v-model="form.name" style="width: 630px;" placeholder="请输入职务" /></el-form-item>
          </el-form>
        </div>
        <div class="edit-qr-item">
          <el-form ref="form" inline="true" :model="form">
            <el-form-item label="谈话种类" label-width="150px">
              <el-select v-model="form.region" placeholder="请选择谈话种类" style="width: 250px;">
                <el-option label="111" value="shanghai" />
                <el-option label="222" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="谈话时间" label-width="150px"><el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 250px;" /></el-form-item>
            <el-form-item label="谈话人姓名" label-width="150px">
              <!-- <el-input v-model="form.name" style="width: 220px;" placeholder="请输入谈话人姓名"/> -->
              <el-input v-model="form.name" style="width: 220px;" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入谈话人姓名" />
            </el-form-item>
          </el-form>
        </div>
        <div class="edit-wf-item">
          <el-form ref="form" inline="true" :model="form">
            <el-form-item label="谈话人单位" label-width="150px">
              <!-- <el-input v-model="form.name" style="width: 250px;" placeholder="请输入谈话人单位"/> -->
              <el-input v-model="form.name" style="width: 250px;" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入谈话人单位" />
            </el-form-item>
            <el-form-item label="谈话人职务" label-width="150px">
              <!-- <el-input v-model="form.name" style="width: 630px;" placeholder="请输入谈话人职务" /> -->
              <el-input v-model="form.name" style="width: 630px;" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入谈话人职务" />
            </el-form-item>
          </el-form>
        </div>
        <div class="edit-qr-item">
          <el-form ref="form" inline="true" :model="form">
            <el-form-item label="谈话简要事由" label-width="150px">
              <!-- <el-input v-model="form.name" style="width: 1050px;" placeholder="请输入谈话简要事由"/> -->
              <el-input v-model="form.name" style="width: 1050px;" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入谈话简要事由" />
            </el-form-item>
          </el-form>
        </div>
        <div class="edit-qr-item">
          <el-form ref="form" inline="true" :model="form">
            <el-form-item label="备注" label-width="150px">
              <!-- <el-input v-model="form.name" style="width: 1050px;" placeholder="请输入备注"/> -->
              <el-input v-model="form.name" style="width: 1050px;" type="textarea" size="mini" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入备注" />
            </el-form-item>
          </el-form>
        </div>

        <div class="update-file-item">
          <el-upload
            class="upload-file"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传附件</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </div>
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
      //  fileList:[]: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      fileList: []
    };
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
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
  }
}
</style>
