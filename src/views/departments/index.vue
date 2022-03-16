<template>
  <div v-loading="loading" class="app-container">
    <div class="departments-container">
      <div class="tree-header">
        <tree-tools :tree-node="company" :is-root="true" />
      </div>
      <el-tree :data="departs" :props="defaultProps" default-expand-all>
        <template v-slot="{ data }">
          <tree-tools :tree-node="data" />
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script>
import { getDepartments } from '@/api/departments'
import { transListToTreeData } from '@/utils'
import TreeTools from './components/tree-tools'
export default {
  components: {
    TreeTools
  },
  data() {
    return {
      loading: false,
      company: { name: '小米科技有限责任公司', manager: '负责人', id: '' },
      departs: [],
      defaultProps: {
        label: 'name'
      }
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      this.loading = true
      const { depts } = await getDepartments()
      this.departs = transListToTreeData(depts, '')
      this.loading = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.departments-container {
  padding: 20px 25px;
  background-color: #fff;
  .tree-header{
    border-bottom: 3px solid #f0f2f5;
  }
}
::v-deep .el-tree-node__content {
  height: 40px;
}
</style>
