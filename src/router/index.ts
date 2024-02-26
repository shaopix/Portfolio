import { createRouter, createWebHistory, Router } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ExempleRoute from "@/components/ExempleRoute.vue"

const router: Router = createRouter({
  routes: [{ path: "/", component: HomePage }, {path:"/exemple", component: ExempleRoute}],
  history: createWebHistory(),
});

export default router;
