<template>
  <div class="nav-items">
    <navigation-item v-for="(navLink, index) in navLinks"
                     :key="index"
                     :link="navLink.link"
                     :title="navLink.title"
                     :icon="navLink.icon"/>
  </div>
</template>

<script>
import NavigationItem from "@/hoc/Navigation/NavigationItems/NavigationItem";

export default {
  name: "NavigationItems",
  data: () => ({
    navLinks: [
      {link: "/latest", title: "Latest", icon: "far fa-newspaper"},
      {link: "/search", title: "Search", icon: "fas fa-search"},
      {link: "/contact", title: "Contact", icon: "fas fa-id-card-alt"},
    ]
  }),
  components: {NavigationItem}
}
</script>

<style lang="scss" scoped>
.nav-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>