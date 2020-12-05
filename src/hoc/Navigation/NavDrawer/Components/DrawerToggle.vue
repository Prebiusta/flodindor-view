<template>
  <div class="drawer-toggle">
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  name: "DrawerToggle"
}
</script>

<style scoped lang="scss">
.drawer-toggle {
  width: 35px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
}

.drawer-toggle div {
  margin: 3px;
  width: 80%;
  height: 2px;
  background-color: $almond;
}
</style>