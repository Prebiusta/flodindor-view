<template>
  <div class="nav-items">
    <navigation-item v-for="(navLink, index) in navLinks"
                     :key="index"
                     :link="navLink.link"
                     :title="navLink.title"
    />
  </div>
</template>

<script>
import NavigationItem from "@/hoc/Navigation/NavigationItems/NavigationItem";

export default {
  name: "NavigationItems",
  data: () => ({
    navLinks: [
      {link: "/", title: "Home"},
      {link: "/about", title: "About"},
    ]
  }),
  components: {NavigationItem}
}
</script>

<style lang="scss" scoped>
.nav-items {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>