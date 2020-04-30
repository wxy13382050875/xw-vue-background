<template>
  <div id="app"><router-view /></div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('unload', this.saveState);
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息

  },
  methods: {
    saveState() {
      console.log(this.$store.getters.config.appCnName)
      localStorage.setItem('state', JSON.stringify(this.$store.getters))
    }
  }
};
</script>
