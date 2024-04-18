import { createMemoryHistory, createRouter } from "vue-router";

import About from "./components/About.vue";
import Content from "./components/Content.vue";

const routes = [
  { path: "/", component: Content },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
