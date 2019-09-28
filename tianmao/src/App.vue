<template>
  <div id="app">
    <Header /> 
    <router-view />
    <Bar />
  </div>
</template>

<script>
import Header from "./pages/Header";
import Bar from "./pages/Bar";

export default {
  name: "app",
  components: {
    Header,
    Bar
  },
  methods:{
   
  }
};
</script>

<style scoped>
#app {
  height: 100vh;
  position: relative;
}
</style>
