<template>
  <div>
    <el-container style="border: 1px solid #eee">
      <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu index="0">
            <template slot="title">
              <i class="el-icon-menu"></i>首页
            </template>
          </el-submenu>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>数据管理
            </template>
            <el-menu-item index="1-1">用户列表</el-menu-item>
            <el-menu-item index="1-2">商家列表</el-menu-item>
            <el-menu-item index="1-3">食品列表</el-menu-item>
            <el-menu-item index="1-4">订单列表</el-menu-item>
            <el-menu-item index="1-5">管理员列表</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item index="2-1">添加商铺</el-menu-item>
            <el-menu-item index="2-2">添加商品</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-off"></i>图表
            </template>
            <el-menu-item index="3-1">用户分布</el-menu-item>
          </el-submenu>


          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item index="3-1">文本编辑</el-menu-item>
          </el-submenu>


          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item index="3-1">管理员设置</el-menu-item>
          </el-submenu>


          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>说明
            </template>
            <el-menu-item index="3-1">说明</el-menu-item>
          </el-submenu>


        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>欧阳逸峰</span>
        </el-header>

        <el-main>
         
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  
};
</script>