import { createRouter, createWebHistory } from "vue-router";
import weatherShow from "./components/weatherShow.vue";

const routes = 
[{ path: "/weather", name: "weatherShow", component: weatherShow }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
