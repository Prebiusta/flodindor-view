<template>
  <div @click="$emit('click')">
    <i class="fas fa-bars fa-2x"></i>
    <div v-bind:class="['nav-drawer text-shadow', isVisible ? 'visible' : 'hidden']">
      <navigation-items></navigation-items>
    </div>
  </div>
</template>

<script>
import NavigationItems from "@/hoc/Navigation/NavigationItems/NavigationItems";

export default {
  name: "NavDrawer",
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  emits: ["click"],
  components: {NavigationItems}
}
</script>

<style lang="scss">
.nav-drawer {
  background-color: $primary;
  position: absolute;
  top: $top_bar_height;
  padding: 0.5rem;
}

.hidden {
  left: -50rem;
}

.visible {
  left: 0;
}
</style>