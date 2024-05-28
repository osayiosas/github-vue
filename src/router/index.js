// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Root from "../views/Root.vue";
import ErrorPage from "../views/ErrorPage.vue";
import RepoList from "../views/RepoList.vue";
import SingleRepo from "../views/SingleRepo.vue";
import ErrorBoundaryTest from "../views/ErrorBoundaryTest.vue";

const routes = [
  {
    path: "/",
    component: Root,
    alias: "/home",
    meta: { title: "Home" },
  },
  {
    path: "/repo-list",
    component: RepoList,
    meta: { title: "Repository List" },
    children: [
      {
        path: ":repoId",
        component: SingleRepo,
        meta: { title: "Single Repository" },
      },
    ],
  },
  {
    path: "/error-boundary-test",
    component: ErrorBoundaryTest,
    meta: { title: "Error Boundary Test" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
    meta: { title: "Error Page" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
