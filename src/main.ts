import "./assets/tailwind.css";
import "./assets/global.css";

import { createApp } from "vue";
import router from "@/router";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import App from "./App.vue";
import RecipesList from "./components/RecipesList.vue";
import PageComponent from "./components/PageComponent.vue";
import HeroSectionComponent from "./components/HeroSectionComponent.vue";

const app = createApp(App);

app.use(router);
app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
  bridge: import.meta.env.VITE_STORYBLOK_IS_PREVIEW === "true" ? true : false,
});

app.component("RecipesList", RecipesList);
app.component("PageComponent", PageComponent);
app.component("HeroSectionComponent", HeroSectionComponent);

app.mount("#app");
