<template>
  <div class="info-section">
    <div v-if="selectedCocktailData" class="info-block">
      <div class="name-part">
        <h1>{{ selectedCocktailData.strDrink }}</h1>
        <p>{{ selectedCocktailData.strCategory }}</p>
        <p>{{ selectedCocktailData.strGlass }}</p>
      </div>
      <div class="instructions-part">
        <h2>Instructions:</h2>
        <p>{{ selectedCocktailData.strInstructions }}</p>
      </div>vue
      <div class="ingredients-part">
        <h2>List of ingredients:</h2>
        <div class="inner-ing-container">
          <div class="measures">
            <p>{{ selectedCocktailData.strMeasure1 }}</p>
            <p>{{ selectedCocktailData.strMeasure2 }}</p>
            <p>{{ selectedCocktailData.strMeasure3 }}</p>
          </div>
          <div>
            <p>{{ selectedCocktailData.strIngredient1 }}</p>
            <p>{{ selectedCocktailData.strIngredient2 }}</p>
            <p>{{ selectedCocktailData.strIngredient3 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cocktail-image-container">
      <img class="cocktail-image" v-lazy="selectedCocktailData?.strDrinkThumb">
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();


const selectedCocktailData = computed(() => {
  const cocktails = store.getters['getCocktails'];
  return cocktails?.drinks?.[0] || null
})


const fetchCocktail = (cocktailCode) => {
  store.dispatch('A_FETCH_COCKTAILS', cocktailCode);
};

onMounted(() => {
  fetchCocktail('margarita')
})

</script>

<style scoped>
.name-part>h1 {
  margin-top: 1em;
  margin-bottom: .5em;
}

.instructions-part {
  margin-top: 4em;
}

.info-block {
  padding: 1em;
  font-family: cursive;
  color: mintcream;
  width: 100%;
  background-color: rgba(22, 22, 22, 1);
  border: 4px solid rgba(50, 50, 50, 1);
}

.info-section {
  display: flex;
  width: 100%;
}

.cocktail-image {
  display: block;
  max-width: 80%;
  width: auto;
  height: auto;
  margin: auto;
  border-radius: 1rem;
}

.cocktail-image-container {
  padding: 1em;
  width: 30%;
  background-color: rgba(22, 22, 22, 1)
}

.ingredients-part {
  margin-top: 4em;
}

.ingredients-part>h2 {
  margin-bottom: 1em;
}

.inner-ing-container {
  display: flex;
}

.measures {
  padding-right: 6em;
}

@media only screen and (min-width: 360px) and (max-width: 500px) {
  .cocktail-image {
    display: block;
    max-width: 100%;
    min-width: 30%;
    height: auto;
    margin: auto;
    border-radius: 1rem;
  }

  .cocktail-image-container {
    background-color: rgba(22, 22, 22, 1);
  }

  .info-block {
    padding: 1em;
    font-family: cursive;
    font-size: .5em;
    color: mintcream;
    min-width: 40%;
    background-color: rgba(22, 22, 22, 1);
    border: 4px solid rgba(50, 50, 50, 1);
    height: 100vh;
  }
}
</style>