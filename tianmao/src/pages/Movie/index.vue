<template>
  <div>
    <MoveTab></MoveTab>
    <router-view></router-view>
  </div>
</template>

<script>
import MoveTab from "./MoveTab";

export default {
  components: {
    MoveTab
  }
};
</script>
