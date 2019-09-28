<template>
  <div class="head">
    <router-link tag="span" active-class="active" to="/movie/being">正在热映</router-link>
    <router-link tag="span" active-class="active" to="/movie/will">即将上映</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style scoped>
.head {
  width: 100%;
  height: 44px;
  line-height: 46px;
  display: flex;
  justify-content: space-around;
  position:relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2px;
}
.head span{
  text-align: center;
  width: 21.33333vw;
  font-weight: bold;
}
.active {
  color: #ef4238;
}
.active::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  width: 80px;
  width: 21.33333vw;
  height: 2px;
  background-color: #ef4238;
  -webkit-transition: left 0.2s;
  transition: left 0.2s;
}
</style>