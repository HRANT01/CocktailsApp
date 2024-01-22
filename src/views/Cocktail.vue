<template>
  <DefaultLayout/>

  <div class="main-container">
    <LeftSideBar />
    <InfoBlock />
  </div>

</template>

<script setup>
import DefaultLayout from '../../src/layouts/DefaultLayout.vue';
import LeftSideBar from '../../src/components/LeftSideBar.vue';
import InfoBlock from '../../src/components/InfoBlock.vue'

const components = {
  DefaultLayout,
  LeftSideBar,
  InfoBlock
};

</script>

<style >
* {
  margin: 0;
  padding: 0;
}

.main-container {
  display: flex;
  width: 100%;
}

</style>
