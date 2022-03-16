<template>
  <el-row class="page-navigator" type="flex" justify="space-between" align="middle">
    <el-col>
      <slot name="before" />
    </el-col>
    <el-col>
      <el-row type="flex" justify="end">
        <div v-if="showAfter" class="after">
          <i class="el-icon-info" />
          <slot name="after" />
        </div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    showAfter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.page-navigator {
  .after {
    i {
      margin-right: 5px;
      color: #409eff;
    }
  }
}
</style>
