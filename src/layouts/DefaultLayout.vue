<template>
  <div class="top-bar">
    <h3 class="page-header">Cocktail Compass</h3>
  </div>
</template>

<script setup>

</script>

<style scoped>

.page-header {
  font-size: 1.5em;
  color: mintcream;
}

.top-bar {
  font-weight: bold;
  font-style: italic;
  background-color: rgba(50, 50, 50, 1);
  padding: 1.5em;
}

@media only screen and (min-width: 360px) and (max-width: 500px) {
  .page-header {
    font-size: 1em;
    color: mintcream;
    text-align: center;
  }
}

</style>