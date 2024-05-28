// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import queryClient from "./queryClient";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createHead } from "@vueuse/head";

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.use(createHead());

app.mount("#app");
