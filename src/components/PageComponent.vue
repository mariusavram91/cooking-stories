<template>
  <div v-editable="blok" class="px-6">
    <StoryblokComponent
      v-for="inblok in blok?.body"
      :blok="inblok"
      :key="inblok._uid"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    blok: Object,
  },
};
</script>
