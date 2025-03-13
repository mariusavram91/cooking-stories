<template>
  <div v-editable="blok" class="flex flex-wrap py-8 mb-6">
    <div
      v-for="recipe in blok?.recipes"
      :key="recipe._uid"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6"
    >
      <router-link :to="'/recipes/' + recipe?.slug">
        <div
          v-editable="recipe"
          class="flex flex-col gap-4 h-42 p-4 shadow-lg rounded-lg"
        >
          <h3 class="text-lg font-bold text-gray-600">
            {{ recipe?.content.title }}
          </h3>
          <p class="text-m text-gray-600">
            {{ recipe?.content.short_description }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    blok: Object,
  },
};
</script>
