<template>
  <div class="py-4 px-6 bg-gray-100">
    <router-link
      to="/"
      class="flex items-center gap-2 text-blue-600 hover:text-blue-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-house-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"
        />
        <path
          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"
        />
      </svg>
      Home
    </router-link>
  </div>

  <div
    v-if="recipe"
    class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
  >
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      {{ recipe.content.title }}
    </h1>
    <img
      :src="recipe.content.image?.filename"
      alt="Recipe image"
      class="w-full h-64 object-cover rounded-lg mb-6"
    />

    <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ingredients</h2>
    <div
      class="prose"
      v-html="renderRichText(recipe.content.ingredients)"
    ></div>

    <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Instructions</h2>
    <div
      class="prose"
      v-html="renderRichText(recipe.content.instructions)"
    ></div>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { useStoryblok, renderRichText } from "@storyblok/vue";

export default {
  async setup() {
    const route = useRoute();

    const recipe = await useStoryblok("recipes/" + route.params.slug, {
      version: "draft",
    });

    return { recipe, renderRichText };
  },
};
</script>
