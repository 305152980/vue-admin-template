<template>
  <div class="app-container">
    <div class="permission-container">
      <page-navigator>
        <template #before>
          <el-button type="primary" size="small">添加权限</el-button>
        </template>
      </page-navigator>
      <div v-loading="loading" style="margin-top:30px;">
        <!-- 树形列表必须要 row-key 属性。 -->
        <el-table border :data="permissionList" row-key="id">
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="code" label="标识" align="center" />
          <el-table-column prop="description" label="描述" align="center" />
          <el-table-column label="操作" align="center" width="300px">
            <template v-slot="{ row }">
              <el-button v-if="row.type === 1" type="primary" size="small">添加权限</el-button>
              <el-button type="success" size="small">编辑权限</el-button>
              <el-button type="danger" size="small">删除权限</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getPermissionList } from '@/api/permission'
import { transListToTreeData } from '@/utils'
export default {
  data() {
    return {
      loading: false,
      permissionList: []
    }
  },
  created() {
    this.getPermissionList()
  },
  methods: {
    async getPermissionList() {
      this.loading = true
      this.permissionList = transListToTreeData(await getPermissionList(), '0')
      this.loading = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.permission-container {
  padding: 25px;
  background-color: #fff;
}
</style>

