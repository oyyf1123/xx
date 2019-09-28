<template>
  <div>
    <MoveTab />
    <router-view />
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
