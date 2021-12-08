import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import ShowRecipe from "@/views/ShowRecipe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/show/:id",
    name: "show",
    component: ShowRecipe,
    props: true
  },
];

let router;

export default () => {
  if (!router) {
    router = new VueRouter({
      base: process.env.BASE_URL,
      routes,
    })
  }
  return router;
};
