<template>
  <div>
    <h1>The Latest Recipes from Dorci</h1>
    <p>Latest recipes page</p>
    <div v-for="n in 8" :key="n" class="recipe shadow">
      <div>
        <h3>Recipe {{n}}</h3>
        <p>Some random text etc</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Latest"
}
</script>

<style scoped>
.recipe {
  display: inline-block;
  margin: 1.5rem;
  padding: 6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
}

</style>