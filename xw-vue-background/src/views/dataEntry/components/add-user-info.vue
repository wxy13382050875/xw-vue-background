<template>
  <div class="user-info-container">
    <div class="user-info-content">
      <div class="title">基本信息</div>
      <div style="display: flex;justify-content: space-between;">
        <div class="user-info-edit">
          <el-form ref="form" :model="form" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="姓名"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="姓别">
                  <el-select v-model="form.region" placeholder="请选择性别" style="width: 100%;">
                    <el-option label="男" value="shanghai" />
                    <el-option label="女" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="出生日期"><el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="民族">
                  <el-select v-model="form.region" placeholder="请选择性别" style="width: 100%;">
                    <el-option label="汉" value="shanghai" />
                    <el-option label="满" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="籍贯"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="出生地"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="婚姻状况">
                  <el-select v-model="form.region" placeholder="请选择婚姻状况" style="width: 100%;">
                    <el-option label="未婚" value="shanghai" />
                    <el-option label="已婚" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item inline="true" label="文化程序">
                  <el-select v-model="form.region" placeholder="请选择文化程序" style="width: 100%;">
                    <el-option label="初中" value="shanghai" />
                    <el-option label="高中" value="beijing" />
                    <el-option label="本科" value="shanghai" />
                    <el-option label="专科" value="beijing" />
                    <el-option label="研究生" value="shanghai" />
                    <el-option label="硕士" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item inline="true" label="政治面貌">
                  <el-select v-model="form.region" placeholder="请选择政治面貌" style="width: 100%;">
                    <el-option label="党员" value="shanghai" />
                    <el-option label="团员" value="beijing" />
                    <el-option label="无" value="shanghai" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="入党时间"><el-date-picker v-model="form.date1" type="date" placeholder="选择入党时间" style="width: 100%;" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="参加工作时间"><el-date-picker v-model="form.date1" type="date" placeholder="选择参加工作时间" style="width: 100%;" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="单位"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="单位性质">
                  <el-select v-model="form.region" placeholder="请选择单位性质" style="width: 100%;">
                    <el-option label="政府" value="shanghai" />
                    <el-option label="企事业单位" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="职务"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="级别">
                  <el-select v-model="form.region" placeholder="请选择级别" style="width: 100%;">
                    <el-option label="正厅级" value="shanghai" />
                    <el-option label="正科级" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="职称"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="分管工作"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="任职时间"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="全日制学历"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="全日制毕业院校系及专业"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="在职学历学位"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="在职毕业院校系及专业"><el-input v-model="form.name" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="状态">
                  <el-select v-model="form.region" placeholder="请选择状态" style="width: 100%;">
                    <el-option label="在职" value="shanghai" />
                    <el-option label="离职" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="edit-picture-upload">
          <div>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </div>
        </div>
      </div>

      <div class="user-info-employment">
        
        <el-form ref="inServForm" :model="inServForm" label-width="130px" size="small">

          <el-form-item label="主要任职情况" prop="servin" label-width="120px">
            <template>
              <el-table border :data="infiledList" style="margin-right: 1.875rem;">
                <el-table-column prop="startTime" label="起始时间" style="width:6vw;">
                  <template scope="scope">
                    <el-date-picker v-model="form.date1" type="date" placeholder="选择开始时间" style="width: 100%;" />
                  </template>
                </el-table-column>
                <el-table-column prop="endTime" label="终止时间">
                  <template scope="scope">
                    <el-date-picker v-model="form.date1" type="date" placeholder="选择结束时间" style="width: 100%;" />
                  </template>
                </el-table-column>
                <el-table-column prop="unit" label="所在单位">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" />
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button size="small" @click.native.prevent="addRow(infiledList)">添加</el-button>
                    <el-button size="small" @click.native.prevent="deleteRow(scope.$index, infiledList)">移除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
        
      </div>
      <div class="user-info-family">
        <el-form ref="inServForm" :model="inServForm" label-width="130px" size="small">
          <el-form-item label="家庭成员情况" prop="servin" label-width="120px">
            <template>
              <el-table border :data="infiledList" style="margin-right: 1.875rem;">
                <el-table-column prop="startTime" label="与本人关系" style="width:6vw;">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" />
                  </template>
                </el-table-column>
                <el-table-column prop="endTime" label="姓名">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" />
                  </template>
                </el-table-column>
                <el-table-column prop="unit" label="政治面貌">
                  <template scope="scope">
                    <el-select v-model="form.region" placeholder="请选择政治面貌" style="width: 100%;">
                      <el-option label="党员" value="shanghai" />
                      <el-option label="团员" value="beijing" />
                      <el-option label="无" value="shanghai" />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="position" label="工作单位">
                  <template scope="scope">
                    <el-input v-model="scope.row.remark" size="mini" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button size="small" @click.native.prevent="addRow(infiledList)">添加</el-button>
                    <el-button size="small" @click.native.prevent="deleteRow(scope.$index, infiledList)">移除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="user-info-bottom">
      <div style="margin: 0.625rem">
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="primary" @click="onSubmit">预览</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Manage',
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
      imageUrl: '',
      infiledList: [{ startTime: '', endTime: '', unit: '', position: '' }],
      fildtps: [{ text: '字符', value: '1' }, { text: '数字', value: '2' }]
    };
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    deleteRow(index, rows) {
      // 删除改行
      rows.splice(index, 1);
    },
    addRow(tableData, event) {
      tableData.push({ startTime: '', endTime: '', unit: '', position: '' });
    }
  }
};
</script>

<style lang="scss" scoped>
  .user-info-content {
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
    .user-info-edit {
      background-color: #e0e8ee;
      margin-top: 0.625rem;
      .edit-info-item{
        padding: 0.625rem;
      }
    }
    .edit-picture-upload {
      background-color: #ffffff;
      width: 6.25rem;
      height: 9.375rem;
      text-align: center;
      margin: 0.625rem;
    }
    .user-info-employment {
      margin-right: 1.875rem;
    }
    .user-info-family {
      margin-right: 1.875rem;
    }
  }
  .wf-bottom {
  }



.user-info-bottom {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: #ffffff;
  z-index: 1000;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 6.25rem;
  height: 9.375rem;
  line-height: 9.375rem;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
