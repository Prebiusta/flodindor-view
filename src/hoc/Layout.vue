<template>
<div>
  <top-bar/>
  <slot></slot>
</div>
</template>

<script>
import TopBar from "@/hoc/Navigation/TopBar";

export default {
  name: "Layout",
  components: {TopBar}
}
</script>

<style scoped>

</style>