<template>
  <router-link :to="'/recipes/' + recipe?.slug">
    <div
      v-if="recipe && recipe.content"
      class="flex flex-col gap-4 h-42 p-4 shadow-lg rounded-lg"
    >
      <h3 v-editable="recipe.content" class="text-lg font-bold text-gray-600">
        {{ recipe?.content.title }}
      </h3>
      <p v-editable="recipe.content" class="text-m text-gray-600">
        {{ recipe?.content.short_description }}
      </p>
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    recipe: Object,
  },
};
</script>
