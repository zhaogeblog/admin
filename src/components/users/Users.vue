<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table
      :data="usersData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      page-size="2"
      :current-page='pagenum'
      :total="total"
      @current-change='currentPageChanged'>
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      usersData: [{
        username: '王小虎',
        email: '111@qq.com',
        mobile: '1233211234567'
      }],
      total: 1,
      pagenum: 1
    }
  },
  created () {
    this.getUsersData()
  },
  methods: {
    getUsersData (pagenum = 1) {
      axios.get('http://localhost:8888/api/private/v1/users', {
        params: {
          query: '',
          pagenum,
          pagesize: 2
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res)
        this.usersData = res.data.data.users
        this.total = res.data.data.total
        this.pagenum = res.data.data.pagenum
      })
    },
    currentPageChanged (a) {
      this.getUsersData(a)
    }
  }
}
</script>

<style lang="less" scoped>
  .el-breadcrumb {
    background-color: #d4dae0;
    line-height: 50px;
    padding-left: 30px;
  }
</style>
