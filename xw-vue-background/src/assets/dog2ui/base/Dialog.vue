<template>
  <section class="dialog">
    <el-dialog
      :title="title"
      :visible.sync="showDialog"
      :close-on-click-modal="false"
      :width="width"
      :top="top"
      :fullscreen="fullScreen"
      :center="center"
      :append-to-body="true"
    >
      <slot></slot>
    </el-dialog>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeShow(val) {
      this.$emit("update:show", val)
    }
  },
  computed: {
    showDialog: {
      get() {
        return this.show
      },
      set(val) {
        this.changeShow(val)
      }
    }
  }
};
</script>
<style lang="less" scoped>
.dialog {
  overflow: hidden;
}
</style>
