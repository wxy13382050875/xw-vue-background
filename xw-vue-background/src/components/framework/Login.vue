<template>
  <div class="box">
    <div class="title">{{title}}</div>
    <el-form :model="form" ref="Form" status-icon :rules="rules" label-width="70px">
      <el-form-item label="账 号：" prop="account">
        <el-input v-model="form.account" @keyup.enter.native="submit" :disabled="account!=''"></el-input>
      </el-form-item>
      <el-form-item label="密 码：" prop="pwd">
        <el-input type="password" v-model="form.pwd" @keyup.enter.native="submit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "登录中心",
    },
    account: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      form: {
        account: this.account,
        pwd: ''
      },
      rules: {
        account: this.$ruleString('账号', 1, 32),
        pwd: this.$ruleString('密码', 1, 50),
      }
    }
  },
  mounted() { },
  methods: {
    success() {
      let originUrl = GetUrlParam('origin')
      if (originUrl == '') {
        this.$router.push({ name: 'home' })
      } else {
        window.location.href = decodeURIComponent(originUrl)
      }
    },
    submit() {
      this.$refs.Form.validate((valid) => {
        if (!valid) {
          return false
        }
        this.$login(this.form.account, this.form.pwd, this.success)
      })
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 500px;
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