<template>
  <div class="div-container">
    <div class="content"><router-view :key="key" /></div>
    <div class="sider-bar">
      <div class="right-nav">
        <!-- <router-view :key="key" /> -->
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-user-info?PersonId=' + PersonId">基本信息</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-weddings-funerals?PersonId=' + PersonId">婚丧喜庆</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-refuse-hand?PersonId=' + PersonId">拒收或上交</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-annual-appraisal?PersonId=' + PersonId">年度考核</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-annual-awards?PersonId=' + PersonId">年度获奖情况</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-questioning-remind?PersonId=' + PersonId">约谈提醒</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-departure-transfer?PersonId=' + PersonId">离职交接</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-reporting-activities?PersonId=' + PersonId">述职述廉，民主测评</router-link></div>
        <div class="right-item"><router-link :to="'/dataEntry/components/index/add-life-would?PersonId=' + PersonId">生活会对照检查</router-link></div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',

  data() {
    return {
      PersonId: ''
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  created() {
    this.PersonId = this.$route.query.PersonId
  }
}
</script>

<style lang="scss" scoped>
.div-container {
  display: -webkit-box;
  flex: 1;
  width: 100%;

  .sider-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    .right-nav {
      width: 150px;
      .right-item {
        width: 6.25rem;
        // height: 3.75rem;
        // line-height: 2.5rem;
        font-size: 1.25rem;
        text-align: center;
        background-color: #409eff;
        font-size: 0.9375rem;
        border-bottom: 1px solid #ffffff;
        z-index: 1000;
      }
    }
  }
  .content {
    flex: 1;
    width: 100%;
  }
}
</style>
