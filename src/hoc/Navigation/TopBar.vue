<template>
  <div class="top-bar almond shadow">
    <nav-drawer></nav-drawer>
    <div class="header text-shadow">FloDinDor</div>
    <i class="fas fa-user-circle fa-2x text-shadow"></i>
  </div>
</template>

<script>

import NavDrawer from "@/hoc/Navigation/NavDrawer/NavDrawer";
export default {
  name: "TopBar",
  components: {NavDrawer},
}
</script>

<style lang="scss" scoped>
.top-bar {
  background-color: $primary;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: $top_bar_height;
  padding: 0 0.8rem;
  margin-bottom: 1rem;
}

.header {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>