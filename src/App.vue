<template>
  <layout>
    <router-view/>
  </layout>
</template>

<script>
import Layout from "@/hoc/Layout";

export default {
  components: {Layout}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

#app {
  font-family: 'Ubuntu', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $site_background;
  min-height: 100vh;
}

</style>