<template>
  <div class="user-info-container">
    <div class="user-info-content">
      <div class="title">基本信息</div>
      <div style="display: flex;justify-content: space-between;">
        <div class="user-info-edit">
          <el-form ref="form" :model="form" label-width="130px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="姓名"><el-input v-model="form.Name" maxlength="10" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="姓别">
                  <el-select v-model="form.Gender" placeholder="请选择性别" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('Gender')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="出生日期">
                  <el-date-picker v-model="form.Birthday" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="民族">
                  <el-select v-model="form.Nation" placeholder="请选择民族" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('Nation')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="籍贯"><el-input v-model="form.NativePlace" maxlength="20" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="出生地"><el-input v-model="form.BirthPlace" maxlength="20" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="婚姻状况">
                  <el-select v-model="form.MaritalStatus" placeholder="请选择婚姻状况" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('MaritalStatus')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item inline="true" label="文化程度">
                  <el-select v-model="form.EduLevel" placeholder="请选择文化程序" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('EduLevel')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item inline="true" label="政治面貌">
                  <el-select v-model="form.PolitOutlook" placeholder="请选择政治面貌" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('PolitOutlook')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="入党时间">
                  <el-date-picker v-model="form.JoinTime" type="date" value-format="yyyy-MM-dd" placeholder="选择入党时间" style="width: 100%;" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="参加工作时间">
                  <el-date-picker v-model="form.JobTime" value-format="yyyy-MM-dd" type="date" placeholder="选择参加工作时间" style="width: 100%;" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="单位">
                  <el-select v-model="form.DeptId" placeholder="请选择单位" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('DeptProp')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="单位性质">
                  <el-select v-model="form.DeptProp" placeholder="请选择单位性质" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('DeptProp')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="职务"><el-input v-model="form.Job" maxlength="20" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="级别">
                  <el-select v-model="form.JobLevel" placeholder="请选择级别" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('JobLevel')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="职称"><el-input v-model="form.JobTitle" maxlength="10" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="分管工作"><el-input v-model="form.JobCharge" maxlength="30" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="任职时间">
                  <el-date-picker v-model="form.NowJobTime" type="date" value-format="yyyy-MM-dd" placeholder="选择参加工作时间" style="width: 100%;" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="全日制学历">
                  <el-select v-model="form.FullEduLevel" placeholder="请选择全日制学历" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('FullEduLevel')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="全日制毕业院校系及专业"><el-input v-model="form.FullEduCollege" maxlength="50" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="在职学历学位">
                  <el-select v-model="form.JobEduLevel" placeholder="请选择在职学历学位" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('JobEduLevel')" :key="i" :value="o.value" :label="o.label" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="在职毕业院校系及专业"><el-input v-model="form.JobEduCollege" maxlength="50" /></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="状态">
                  <el-select v-model="form.JobStatus" placeholder="请选择状态" style="width: 100%;">
                    <el-option v-for="(o, i) in $w.GetEnumArr('JobStatus')" :key="i" :value="o.value" :label="o.label" />
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
              action="http://ynseego.com:16002/system/file/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :headers="headers"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
      </div>

      <div class="user-info-employment">
        <!-- <employment></employment> -->
        <el-form ref="inServForm" label-width="130px" size="small">
          <el-form-item label="主要任职情况" prop="servin" label-width="120px">
            <template>
              <el-table border :data="form.PersonJob" style="margin-right: 1.875rem;">
                <el-table-column prop="StartTime" label="起始时间" style="width:6vw;">
                  <template scope="scope">
                    <el-date-picker v-model="scope.row.StartTime" type="date" value-format="yyyy-MM-dd" placeholder="选择开始时间" style="width: 100%;" />
                  </template>
                </el-table-column>
                <el-table-column prop="EndTime" label="终止时间">
                  <template scope="scope">
                    <el-date-picker v-model="scope.row.EndTime" type="date" value-format="yyyy-MM-dd" placeholder="选择结束时间" style="width: 100%;" />
                  </template>
                </el-table-column>
                <el-table-column prop="JobPlace" label="所在单位">
                  <template scope="scope">
                    <el-input v-model="scope.row.JobPlace" maxlength="20" />
                  </template>
                </el-table-column>
                <el-table-column prop="Job" label="职务">
                  <template scope="scope">
                    <el-input v-model="scope.row.Job" maxlength="20" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button size="small" @click.native.prevent="addJobRow(scope.row)">添加</el-button>
                    <el-button size="small" @click.native.prevent="deleteJobRow(scope.$index, form.PersonJob)">移除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </div>
      <div class="user-info-family">
        <el-form ref="inServForm" label-width="130px" size="small">
          <el-form-item label="家庭成员情况" prop="servin" label-width="120px">
            <template>
              <el-table border :data="form.PersonFamily" style="margin-right: 1.875rem;">
                <el-table-column prop="FamilyRelation" label="与本人关系" style="width:6vw;">
                  <template scope="scope">
                    <el-select v-model="scope.row.FamilyRelation" placeholder="请选择亲属关系" style="width: 100%;">
                      <el-option v-for="(o, i) in $w.GetEnumArr('FamilyRelation')" :key="i" :value="o.value" :label="o.label" />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="Name" label="姓名">
                  <template scope="scope">
                    <el-input v-model="scope.row.Name" maxlength="10" size="mini" />
                  </template>
                </el-table-column>
                <el-table-column prop="PolitOutlook" label="政治面貌">
                  <template scope="scope">
                    <el-select v-model="scope.row.PolitOutlook" placeholder="请选择政治面貌" style="width: 100%;">
                      <el-option v-for="(o, i) in $w.GetEnumArr('PolitOutlook')" :key="i" :value="o.value" :label="o.label" />
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="JobPlace" label="工作单位">
                  <template scope="scope">
                    <el-input v-model="scope.row.JobPlace" maxlength="20" size="mini" />
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button size="small" @click.native.prevent="addFamilyRow(scope.row)">添加</el-button>
                    <el-button size="small" @click.native.prevent="deleteFamilyRow(scope.$index, form.PersonFamily)">移除</el-button>
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
// import employment from "@/components/dataEntry/employment.vue";
import { createPerArchives } from '@/api/dataEntry.js';
import { getToken } from '@/utils/auth';
export default {
  name: 'Manage',
  components: {},
  data() {
    return {
      headers: { Token: getToken() },
      form: {
        Name: '',
        Gender: '',
        Birthday: '',
        Nation: '',
        NativePlace: '',
        BirthPlace: '',
        MaritalStatus: '',
        EduLevel: '',
        PolitOutlook: '',
        JoinTime: '',
        JobTime: '',
        DeptId: null,
        DeptProp: '',
        Job: '',
        JobLevel: '',
        JobTitle: '',
        JobCharge: '',
        NowJobTime: '',
        FullEduLevel: '',
        FullEduCollege: '',
        JobEduLevel: '',
        JobEduCollege: '',
        JobStatus: '',
        File: null,
        PersonJob: [
          {
            StartTime: '',
            EndTime: '',
            JobPlace: '',
            Job: ''
          }
        ],
        PersonFamily: [
          {
            FamilyRelation: '',
            Name: '',
            Age: '',
            PolitOutlook: '',
            JobPlace: ''
          }
        ]
      },
      imageUrl: '',
      PersonJob: [
        {
          StartTime: '',
          EndTime: '',
          JobPlace: '',
          Job: ''
        }
      ],
      PersonFamily: [
        {
          FamilyRelation: '',
          Name: '',
          Age: '',
          PolitOutlook: '',
          JobPlace: ''
        }
      ]
    }
  },
  created() {
    console.log(this.$route.query.PersonId)
    console.log();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.imageUrl = res.data.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      console.log('beforeAvatarUpload')
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

    addJobRow(tableData) {
      this.form.PersonJob.push({
        StartTime: '',
        EndTime: '',
        JobPlace: '',
        Job: ''
      });
    },
    deleteJobRow(index, rows) {
      // 删除改行
      rows.splice(index, 1);
    },
    addFamilyRow(tableData, event) {
      this.form.PersonFamily.push({
        FamilyRelation: '',
        Name: '',
        Age: '',
        PolitOutlook: '',
        JobPlace: ''
      });
    },
    deleteFamilyRow(index, rows) {
      // 删除改行
      rows.splice(index, 1)
    },
    onSubmit() {
      // this.form.PersonFamily = this.PersonFamily;
      // this.form.PersonJob = this.PersonJob;
      console.log(this.form);
      this.listLoading = true;
      createPerArchives(this.form).then(response => {
        console.log(response);
        // this.list = response.data.items
        this.listLoading = false;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info-container {
  width: 100%;

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
      width: 100%;
    }

    .user-info-edit {
      background-color: #e0e8ee;
      margin-top: 0.625rem;

      .edit-info-item {
        padding: 0.625rem;
      }
    }

    .edit-picture-upload {
      background-color: #ffffff;
      width: 6.25rem;
      height: 9.375rem;
      text-align: center;
      margin: 0.625rem;
      margin-right: 1.25rem;
    }

    .user-info-employment {
      margin-right: 1.875rem;
    }

    .user-info-family {
      margin-right: 1.875rem;
    }
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
  width: 110px;
  height: 180px;
  display: block;
}
</style>
