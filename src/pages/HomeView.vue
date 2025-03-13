<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script lang="ts">
import { useStoryblok } from "@storyblok/vue";

import getVersion from "@/utils";

export default {
  async setup() {
    const version = getVersion();

    const story = await useStoryblok("home", {
      version,
      resolve_relations: "RecipesList.recipes",
    });

    return {
      story,
    };
  },
};
</script>
