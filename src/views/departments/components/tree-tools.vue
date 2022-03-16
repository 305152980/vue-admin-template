<template>
  <div class="treeTools-container">
    <div class="header">
      <span>{{ treeNode.name }}</span>
    </div>
    <div class="footer">
      <span class="manager">{{ treeNode.manager }}</span>
      <div class="operation">
        <el-button type="success" size="mini">添加子部门</el-button>
        <el-button v-if="!isRoot" type="primary" size="mini">编辑部门</el-button>
        <el-button v-if="!isRoot" type="danger" size="mini">删除部门</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.treeTools-container {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header {}
  .footer {
    .manager {
      padding-right: 30px;
    }
    .operation {
      display: inline-block;
      width: 272px;
    }
  }
}
</style>

