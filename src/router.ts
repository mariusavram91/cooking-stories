// src/router.ts

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import HomeView from "@/pages/HomeView.vue";
import RecipeView from "@/pages/RecipeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/recipes/:slug",
    name: "Recipe",
    component: RecipeView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
