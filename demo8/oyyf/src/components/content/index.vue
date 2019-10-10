<template>
  <div class="oyyf-box">
    <el-container>
      <el-aside width="250px" style="background-color: rgb(50, 64, 87)">
        <el-menu>
          <el-menu-item index="0">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <router-link
                tag="span"
                to="/home"
                active-class="active"
                style="font-size:16px"
              >首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</router-link>
            </template>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item index="1-1">
              <router-link tag="span" to="/menagedata" active-class="active">用户列表</router-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item index="2-1">
              <router-link tag="span" to="/addstore" active-class="active">添加商铺</router-link>
            </el-menu-item>
            
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;表</span>
            </template>
            <el-menu-item index="3-1">
              <router-link tag="span" to="/chart" active-class="active">用户分布</router-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辑</span>
            </template>
            <el-menu-item index="3-1">
              <router-link tag="span" to="/redact" active-class="active">文本编辑</router-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
            </template>
            <el-menu-item index="3-1">
              <router-link tag="span" to="/setting" active-class="active">管理员设置</router-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>
              <span>说&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;明</span>
            </template>
            <el-menu-item index="3-1">
              <router-link tag="span" to="/state" active-class="active">说明</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;display: flex">
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="display: flex;align-items: center;flex: 1"
          >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>

          <el-dropdown>
            <img
              src="https://elm.cangdu.org/img/default.jpg"
              alt
              style="height:36px;width:36px;margin-top:12px;border-radius:50%"
            />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="color:blue">欧阳逸峰</span>
        </el-header>

        <el-main>
          <!-- 路由展示区 -->
          <router-view></router-view>
          <!--  -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.oyyf-box {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-menu {
  border: none;
}
.el-menu-item {
  background-color: #1f2d3d;
}
.el-menu-item:hover {
  background-color: #6a6e74;
}
.el-submenu {
  background: rgb(50, 64, 87);
}

.boxbox:hover {
  background-color: rgba(50, 64, 87, 0.7);
}

span {
  color: #bfcbd9;
  display: inline-block;
  /* width: 100%; */
}

.el-header {
  background-color: #e2e0d3;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.active {
  color: #20a0ff;
}
</style>

<script>
export default {};
</script>