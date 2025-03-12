import "./assets/tailwind.css";

import { createApp } from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import App from "./App.vue";
import GridComponent from "./components/GridComponent.vue";
import PageComponent from "./components/PageComponent.vue";
import TeaserComponent from "./components/TeaserComponent.vue";
import FeatureComponent from "./components/FeatureComponent.vue";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW_TOKEN,
  bridge: import.meta.env.NODE_ENV !== "production",
  use: [apiPlugin],
});

app.component("grid", GridComponent);
app.component("page", PageComponent);
app.component("teaser", TeaserComponent);
app.component("feature", FeatureComponent);

app.mount("#app");
