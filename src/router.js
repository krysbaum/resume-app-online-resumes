import { createWebHistory, createRouter } from "vue-router";

import About from "./components/About.vue";
import Content from "./components/Content.vue";
import ShowResume from "./components/ShowResume.vue";

const routes = [
  { path: "/", component: Content },
  { path: "/about", component: About },
  { path: "/student/:student.id", component: ShowResume },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
