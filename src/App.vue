<template>
  <Suspense>
    <template #default>
      <router-view :key="$route.fullPath"></router-view>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
