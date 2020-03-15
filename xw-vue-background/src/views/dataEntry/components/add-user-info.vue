<template>
  <div class="user-info-container">
    <div class="user-info-content">
      <div class="title">基本信息</div>
      <div class="user-info-edit">
        <div class="edit-info">
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="姓别">
                <el-select v-model="form.region" placeholder="请选择性别">
                  <el-option label="男" value="shanghai"></el-option>
                  <el-option label="女" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出生日期">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="民族">
                <el-select v-model="form.region" placeholder="请选择性别">
                  <el-option label="汉" value="shanghai"></el-option>
                  <el-option label="满" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="籍贯">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="出生地">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="婚姻状况">
                <el-select v-model="form.region" placeholder="请选择婚姻状况">
                  <el-option label="未婚" value="shanghai"></el-option>
                  <el-option label="已婚" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="文化程序">
                <el-select v-model="form.region" placeholder="请选择文化程序">
                  <el-option label="初中" value="shanghai"></el-option>
                  <el-option label="高中" value="beijing"></el-option>
                  <el-option label="本科" value="shanghai"></el-option>
                  <el-option label="专科" value="beijing"></el-option>
                  <el-option label="研究生" value="shanghai"></el-option>
                  <el-option label="硕士" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="政治面貌">
                <el-select v-model="form.region" placeholder="请选择政治面貌">
                  <el-option label="党员" value="shanghai"></el-option>
                  <el-option label="团员" value="beijing"></el-option>
                  <el-option label="无" value="shanghai"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="入党时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择入党时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="参加工作时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择参加工作时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="单位">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="单位性质">
                <el-select v-model="form.region" placeholder="请选择单位性质">
                  <el-option label="政府" value="shanghai"></el-option>
                  <el-option label="企事业单位" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="职务">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="级别">
                <el-select v-model="form.region" placeholder="请选择级别">
                  <el-option label="正厅级" value="shanghai"></el-option>
                  <el-option label="正科级" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="职称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="分管工作">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="任职时间">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="全日制学历">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="全日制毕业院校系及专业">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="在职学历学位">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="在职毕业院校系及专业">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="edit-info-item">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="状态">
                <el-select v-model="form.region" placeholder="请选择状态">
                  <el-option label="在职" value="shanghai"></el-option>
                  <el-option label="离职" value="beijing"></el-option>
                </el-select>
              </el-form-item>

            </el-form>
          </div>
        </div>
        <div class="edit-picture-upload">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="user-info-employment">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="主要任职情况">

          </el-form-item>

        </el-form>
      </div>
      <div class="user-info-family">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="家庭成员情况">

          </el-form-item>

        </el-form>
      </div>

    </div>
    <div class="user-info-bottmo">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="primary" @click="onSubmit">预览</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Manage',
    components: {},
    data() {
      return {
        imageUrl: ''
      }
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
