<template>
  <div>
    <h1>国庆七天乐</h1>
    <nav class="nav nav-pills nav-justified">
      <router-link
        tag="div"
        keep-alive
        active-class="active"
        class="flex-sm-fill text-sm-center nav-link"
        to="/homepage"
      >首页</router-link>
      <router-link
        tag="div"
        keep-alive
        active-class="active"
        class="flex-sm-fill text-sm-center nav-link"
        to="/explainpage"
      >详情</router-link>
      <router-link
        tag="div"
        keep-alive
        active-class="active"
        class="flex-sm-fill text-sm-center nav-link"
        to="/detailpage"
      >说明</router-link>
      <router-link
        tag="div"
        keep-alive
        active-class="active"
        class="flex-sm-fill text-sm-center nav-link"
        to="/support"
      >赞助</router-link>
    </nav>
    <div>
      <!-- 路由展示区域 -->
      <router-view></router-view>
    </div>
  </div>
</template>