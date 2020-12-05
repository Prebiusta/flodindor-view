<template>
  <div class="nav-item">
    <i class="fas fa-user-circle text-shadow"></i>
    <router-link class="text-shadow" :to="link">{{ title }}</router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationItem",
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.nav-item {
  margin: 0.25rem;
}

a {
  font-weight: bold;
  color: $almond;
  margin: 1rem;
}

a.router-link-exact-active {
  color: $copper;
}
</style>