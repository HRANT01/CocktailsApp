<template>
  <div class="side-bar-container">
    <div v-for="cocktail in cocktailsList" :key="cocktail" >
      <div @click="changeCocktail(cocktail)" class="cocktail" :class="{'active': currentSelectedCocktail === cocktail}" >
        {{ cocktail }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

const cocktailsList = ref(['Margarita', 'Mojito',  'A1', 'Kir'])
const currentSelectedCocktail = computed(() => router.currentRoute.value.params.cocktailCode)

const changeCocktail = (cocktail) => {
  store.dispatch('A_FETCH_COCKTAILS', cocktail.toLowerCase());
  router.push({ name: 'cocktail', params: { cocktailCode: cocktail } });
}


</script>

<style scoped>

.side-bar-container {
  height: auto;
  background-color: rgba(22, 22, 22, 1);
  width: 20%;
  min-width: 10rem;
}

.cocktail {
  display: inline-block;
  font-size: 1.2em;
  padding: 0.2em;
  font-family: cursive;
  color: mintcream;
  text-align: left;
  margin-left: 2em;
  margin-top: 2em;
  cursor: pointer;
}

.active {
  background-color: #333;
  color: #fff;
  width: 70%;
}

@media only screen and (min-width: 360px) and (max-width: 500px) {
  .side-bar-container {
    background-color: rgba(22, 22, 22, 1);
    width: 7em;
    min-width: 4em;
    padding-top: 1em;
  }

  .cocktail {
    display: inline-block;
    margin-bottom: 2em;
    font-size: .3em;
    font-family: cursive;
    color: mintcream;
  }
}

</style>