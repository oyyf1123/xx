<template>
  <div>
    <div class="ueditor">
      <vue-ueditor-wrap v-model="content" :config="myConfig"></vue-ueditor-wrap>
      <!-- 盒子下方的标签提示 -->
      <!-- {{ content }} -->
    </div>
    <div class="buttonbox">
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  name: "Ueditor",
  components: { VueUeditorWrap },
  data() {
    return {
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        // serverUrl: this.$config.baseUrl + 'ueditor/ueditorConfig',
        // serverUrl: 'http://localhost:8090/ueditor/ueditorConfig',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/ueditor/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 340,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 关闭自动保存
        enableAutoSave: true
      },
      content: ""
    };
  }
};
</script>


<style scoped>
.el-button{
  text-align: center;
  margin-top: 10px;
  margin-left: 48%;
}

.ueditor{
  width: 70%;
  margin: 0 auto;
}
  

</style>