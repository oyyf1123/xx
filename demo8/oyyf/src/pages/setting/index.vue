<template>
  <div>
    <h1>管理员信息</h1>
    <ul>
      <li>
        姓名：
        <span>oyyf</span>
      </li>
      <li>
        注册时间：
        <span>2019/10/10</span>
      </li>
      <li>
        管理员权限：
        <span>1级管理员</span>
      </li>
      <li>
        管理员ID：
        <span>1123</span>
      </li>
      <li>
        <span style="display:block">更换头像：</span>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </li>
    </ul>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style lang="stylus" scoped>
h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

ul {
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 10px;
  width: 70%;

  li {
    padding: 20px;
  }
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
    margin-top: 10px;
    border-radius: 10px;
  }
</style>
