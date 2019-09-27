<template>
  <div class="bar">
    <div @click="changeBar">
      <router-link tag="span" :class="{active:active==='movie'}" to="/movie">电影</router-link>
    </div>

    <div @click="changeBar">
      <router-link tag="span" :class="{active:active==='cinema'}" to="/cinema">影院</router-link>
    </div>

    <div @click="changeBar">
      <router-link tag="span" :class="{active:active==='my'}" to="/my">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  },
  methods: {
    changeBar() {
      const path = this.$router.history.current.fullPath;
      this.active = path.split("/")[1];
      // console.log(this.$router)
      bus.$emit("clickBar", this.active);
    }
  },
  created() {
    const path = this.$router.history.current.fullPath;
    this.active = path.split("/")[1];
    bus.$emit("clickBar", this.active);
  }
};
</script>
<style scoped>
.bar {
  width: 100%;
  height: 48px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-top: 0.5px solid #d8d8d8;
}
.active {
  color: #f03d37;
}
</style>