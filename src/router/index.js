import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadCrumbs: [
        {
          to: "/", // hyperlink
          text: "Hello World" // crumb text
        }
      ]
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      breadcrumb: "About Page"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: process.env.VUE_ROUTER_MODE || "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
