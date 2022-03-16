<template>
  <div class="app-container">
    <div class="employees-container">
      <page-navigator :show-after="true">
        <!-- v-bind: => :  v-on: => @  v-slot: => # -->
        <template #before>
          <el-button size="small" type="primary">新增员工</el-button>
          <el-button size="small" type="success" @click="$router.push('/import?type=user')">批量新增员工</el-button>
          <!-- 功能待开发 -->
          <el-button size="small" type="info">简要员工信息导出</el-button>
          <!-- 功能待开发 -->
          <el-button size="small" type="warning">详细员工信息导出</el-button>
        </template>
        <!-- v-slot 必须用到 template 标签上。 -->
        <template v-slot:after>
          <span>共 {{ page.total }} 条记录！ </span>
        </template>
      </page-navigator>
      <div v-loading="loading" style="margin-top:30px;">
        <el-table :data="employeesList" border stripe fit>
          <el-table-column type="index" label="序号" width="50px" align="center" />
          <el-table-column prop="username" label="姓名" align="center" />
          <el-table-column label="头像" align="center" min-width="121px">
            <template slot-scope="{ row }">
              <img v-imageerror="require('@/assets/common/head.jpg')" :src="row.staffPhoto" class="profile">
            </template>
          </el-table-column>
          <el-table-column prop="mobile" label="手机号" align="center" min-width="110px" />
          <el-table-column prop="workNumber" label="工号" sortable align="center" />
          <el-table-column prop="formOfEmployment" label="聘用形式" :formatter="formatFormOfEmployment" align="center" />
          <el-table-column prop="departmentName" label="部门" align="center" />
          <el-table-column prop="timeOfEntry" label="入职时间" sortable align="center" min-width="100px">
            <template slot-scope="{ row }">
              {{ row.timeOfEntry | formatDate }}
            </template>
          </el-table-column>
          <el-table-column prop="enableState" label="状态" align="center">
            <template v-slot="{ row }">
              <el-switch :value="row.enableState === 1" disabled />
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" align="center" width="240px">
            <template v-slot="{ row }">
              <div>
                <el-button size="small" @click="$router.push(`/employees/detail/${row.id}`)">查看</el-button>
                <el-button type="primary" size="small">转正</el-button>
                <el-button type="success" size="small">调岗</el-button>
              </div>
              <div style="margin-top:10px;">
                <el-button type="info" size="small">离职</el-button>
                <el-button type="warning" size="small">职位</el-button>
                <el-button type="danger" size="small">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-row v-if="page.total" type="flex" justify="end" align="middle" style="height:60px;">
          <el-pagination background :total="page.total" :page-size.sync="page.size" :current-page.sync="page.page" layout="total, sizes, prev, pager, next, jumper" @size-change="getEmployeeList" @current-change="getEmployeeList" />
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getEmployeeList } from '@/api/employees'
import EmployeeEnum from '@/api/constant/employees'
export default {
  data() {
    return {
      loading: false,
      page: {
        total: 0,
        page: 1,
        size: 10
      },
      employeesList: []
    }
  },
  created() {
    this.getEmployeeList()
  },
  methods: {
    // 格式化聘用形式的属性方法。
    formatFormOfEmployment(row, column, cellValue) {
      const obj = EmployeeEnum.hireType.find(item => item.id === cellValue)
      return obj ? obj.value : '未知'
    },
    async getEmployeeList() {
      this.loading = true
      const { total, rows } = await getEmployeeList(this.page)
      this.page.total = total
      this.employeesList = rows
      this.loading = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.employees-container {
  padding: 25px;
  background-color: #fff;
  .profile {
    width: 100px;
    height: 100px;
    padding: 10px;
    border-radius: 50%;
  }
}
</style>
