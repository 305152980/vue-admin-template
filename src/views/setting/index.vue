<template>
  <div class="app-container">
    <div class="setting-container">
      <el-tabs @tab-click="handleClick">
        <el-tab-pane label="职位管理">
          <div>
            <el-button type="primary" size="small">新增职位</el-button>
          </div>
          <div v-loading="loading">
            <el-table stripe border fit :data="roleList" style="margin-top:30px;">
              <el-table-column label="序号" type="index" width="50px" align="center" />
              <el-table-column label="职位" prop="name" align="center" />
              <el-table-column label="描述" prop="description" align="center" />
              <el-table-column label="操作" fixed="right" width="300px" align="center">
                <!-- <template slot-scope="{ row }"></template> -->
                <template>
                  <!-- <el-button size="small" type="success">分配权限</el-button> -->
                  <el-button size="small" type="primary">编辑职位</el-button>
                  <el-button size="small" type="danger">删除职位</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-row v-if="page.total" type="flex" justify="end" align="middle" style="height:60px;">
              <el-pagination background :total="page.total" :page-size.sync="page.pagesize" :current-page.sync="page.page" layout="total, sizes, prev, pager, next, jumper" @size-change="getRoleList" @current-change="getRoleList" />
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司信息">
          <el-alert title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改！" type="info" show-icon :closable="false" />
          <el-form label-width="70px" style="margin-top:30px;">
            <el-form-item label="公司名称">
              <el-input v-model="formData.name" disabled style="width:400px;" />
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="formData.companyAddress" disabled style="width:400px;" />
            </el-form-item>
            <el-form-item label="公司邮箱">
              <el-input v-model="formData.mailbox" disabled style="width:400px;" />
            </el-form-item>
            <el-form-item label="公司备注">
              <el-input v-model="formData.remarks" type="textarea" :rows="3" disabled style="width:400px;" />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { getRoleList } from '@/api/setting'
export default {
  data() {
    return {
      loading: false,
      page: {
        total: 0,
        page: 1,
        pagesize: 10
      },
      roleList: [],
      formData: {
        name: '小米科技有限责任公司',
        companyAddress: '北京市海淀区西二旗中路33号院6号楼6层006号',
        mailbox: 'xiaomikeji@xiaomi.com',
        remarks: '小米是一家以手机、智能硬件和IoT平台为核心的互联网公司，以智能手机、智能电视、笔记本等丰富的产品与服务。致力于让全球每个人都能享受科技带来的美好生活。'
      }
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    handleClick({ index }) {
      if (index === '0') {
        this.getRoleList()
      } else if (index === '1') {
        // to do.
      }
    },
    async getRoleList() {
      this.loading = true
      const { total, rows } = await getRoleList(this.page)
      this.page.total = total
      this.roleList = rows
      this.loading = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.setting-container {
  padding: 25px;
  background-color: #fff;
}
</style>

