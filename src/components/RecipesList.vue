<template>
  <div v-editable="blok" class="flex flex-wrap py-8 mb-6">
    <div
      v-for="recipe in blok?.recipes"
      :key="recipe._uid"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6"
    >
      <RecipeCard :recipe="recipe"></RecipeCard>
    </div>
  </div>
</template>

<script lang="ts">
import RecipeCard from "./RecipeCard.vue";

export default {
  props: {
    blok: Object,
  },
  components: {
    RecipeCard,
  },
};
</script>
