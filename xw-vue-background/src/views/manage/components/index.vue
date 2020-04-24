<template>
  <div class="div-container">
    <div class="content"><router-view :key="key" /></div>
    <div class="sider-bar">
      <div class="right-nav">
        <div class="right-item"><router-link :to="'/manage/components/index/add-questioning-remind?PersonId=' + PersonId">约谈提醒</router-link></div>
        <div class="right-item"><router-link :to="'/manage/components/index/add-petitio-letter?PersonId=' + PersonId">信访举报</router-link></div>
        <div class="right-item"><router-link :to="'/manage/components/index/add-disciplinary-action?PersonId=' + PersonId">问责处理、党政纪处分</router-link></div>
        <div class="right-item"><router-link :to="'/manage/components/index/add-daily-supervision?PersonId=' + PersonId">日常监督</router-link></div>
        <div class="right-item"><router-link :to="'/manage/components/index/add-party-Integrity?PersonId=' + PersonId">党风兼政意见</router-link></div>
        <div class="right-item"><router-link :to="'/manage/components/index/add-other-Integrity?PersonId=' + PersonId">其他</router-link></div>





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
