<template>
  <div>
    <top-bar/>
    <transition name="fade-in">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
import TopBar from "@/hoc/Navigation/TopBar";

export default {
  name: "Layout",
  components: {TopBar}
}
</script>

<style scoped lang="scss">
</style>