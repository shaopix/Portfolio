import { createRouter, createWebHistory, Router } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ComposableView from "@/views/ComposableView.vue"

const router: Router = createRouter({
  routes: [{ path: "/", component: HomePage }, { path: "/exemple", component: ComposableView }],
  history: createWebHistory(),
});

export default router;
