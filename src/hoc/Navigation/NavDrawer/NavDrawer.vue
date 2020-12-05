<template>
  <div @click="isVisible = !isVisible">
    <drawer-toggle/>
    <transition name="slide-in">
      <div v-if="isVisible" class="nav-drawer text-shadow shadow">
        <navigation-items></navigation-items>
      </div>
    </transition>
  </div>
</template>

<script>

import NavigationItems from "@/hoc/Navigation/NavigationItems/NavigationItems";
import DrawerToggle from "@/hoc/Navigation/NavDrawer/Components/DrawerToggle";

export default {
  name: "NavDrawer",
  components: {DrawerToggle, NavigationItems},
  data: () => ({
    isVisible: false
  }),
  methods: {
    test() {
      console.log("test")
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-drawer {
  background-color: $primary;
  position: absolute;
  top: $top_bar_height;
  padding: 0 1.5rem 0.5rem 0.5rem;
  left: 0;
  width: 12rem;
}
</style>