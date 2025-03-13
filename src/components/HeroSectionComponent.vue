<template>
  <section
    class="relative h-80 flex items-center justify-center bg-cover bg-center"
    :style="{ backgroundImage: 'url(' + blok?.image?.filename + ')' }"
  >
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <div class="text-center text-white relative z-10">
      <h1 v-editable="blok" class="text-5xl font-bold mb-4">
        {{ blok?.title }}
      </h1>
      <h2 v-editable="blok" class="text-2xl mb-6">
        {{ blok?.subtitle }}
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    blok: Object,
  },
};
</script>
