<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span='8'><img src="" alt=""></el-col>
        <el-col :span='8'><h1>电商后台管理系统</h1></el-col>
        <el-col :span='8' class="col3">
          恭喜黑马前端44期年薪200万
          <a href="#" @click.prevent='logout'>退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          :router='true'
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/users">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="/roles">角色列表</el-menu-item>
            <el-menu-item index="/rights">权限列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('此操作退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .el-header {
    height: 60px;
    padding: 0;
    background-color: #b3c1cd;
    h1 {
      font-size: 26px;
      color: #fff;
      text-align: center;
      line-height: 60px;
    }
    .col3 {
      line-height: 60px;
      text-align: right;
      padding-right: 30px;
    }
  }
  .el-container {
    height: 100%;
    .el-aside {
      background-color: #545c64;
    }
    .el-main {
      background-color: #eaeef1;
    }
  }

</style>
