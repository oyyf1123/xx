<template>
  <span class="head">{{barMap[title]}}</span>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      barMap: {
        movie: "猫眼电影",
        cinema: "影院",
        my: "我的"
      }
    };
  },
  methods: {},
  created() {
    bus.$on("clickBar", val => (this.title = val));
  }
};
</script>
<style scoped>
.head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>