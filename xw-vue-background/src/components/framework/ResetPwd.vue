<template>
  <div class="box">
    <div class="title">修改密码</div>
    <el-form :model="form" ref="Form" status-icon :rules="rules" label-width="80px">
      <el-form-item label="账 号：" prop="Account">
        <el-input v-model="form.Account"></el-input>
      </el-form-item>
      <el-form-item label="旧密码：" prop="OldPwd">
        <el-input type="password" v-model="form.OldPwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="NewPwd">
        <el-input type="password" v-model="form.NewPwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">修 改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      form: {
        Account: "",
        OldPwd: "",
        NewPwd: "",
      },
      rules: {
        Account: this.$ruleString('账号', 1, 32),
        OldPwd: this.$ruleString('旧密码', 1, 50),
        NewPwd: this.$ruleString('新密码', 1, 50),
      },
    }
  },
  methods: {
    submit() {
      this.$refs['Form'].validate((valid) => {
        if (!valid) {
          return false
        }
        this.$http('/system/sign/resetPwd', this.form).then(res => {
          this.$tipError("修改成功")
          this.$router.push({ path: '/login' })
        })
      })
    },
  }
}
</script>
<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 450px;
  min-height: 300px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  padding: 20px;

  .title {
    font-weight: 400;
    font-size: 26px;
    margin: 20px 0;
  }
}
</style>
