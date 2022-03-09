<template>
  <div class="screenFull-container">
    <svg-icon icon-class="fullscreen" style="color:#fff;width:20px;height:20px;" @click="changeScreen" />
  </div>
</template>

<script>
// import ScreenFull from 'screenfull'
export default {
  methods: {
    // changeScreen() {
    //   if (!ScreenFull.isEnabled) {
    //     return this.$message.warning('当前全屏功能不可用')
    //   }
    //   // document.documentElement.requestFullscreen() 全屏
    //   // document.exitFullscreen() 退出全屏
    //   // esc 退出全屏
    //   ScreenFull.toggle()
    // }
    changeScreen() {
      document.documentElement.requestFullscreen()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.screenFull-container {
  cursor: pointer;
}
</style>

