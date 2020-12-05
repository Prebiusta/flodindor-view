<template>
  <div class="nav-item">
    <hr class="shadow">
    <router-link class="text-shadow" :to="link">
      <div class="nav-content">
        <div id="icon">
          <i :class="[icon, 'text-shadow']"></i>
        </div>
        <div>
          {{ title }}
        </div>
      </div>
    </router-link>
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
  width: 100%;
}

hr {
  margin: 0;
  background-color: $secondary;
}

.nav-content {
  display: flex;
  align-items: center;
  align-content: center;
  text-align: left;

  #icon {
    width: 32px;
    height: 32px;
    color: white;
    margin-right: 0.5rem;
  }
}

a {
  font-weight: bold;
  color: $almond;

  i {
    margin: 0.5rem;
  }

}

a.router-link-exact-active {
  color: $copper;
}
</style>