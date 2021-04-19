import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/vue-breadcrumbs";
import "./plugins/vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./registerServiceWorker";
import $ from "jquery";
import "./assets/style.scss";
import "admin-lte";
window.jquery = window.$ = $;

Vue.config.productionTip = false;
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faExpandArrowsAlt, faSearch, faThLarge, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

library.add(faBars);
library.add(faCircle);
library.add(faExpandArrowsAlt);
library.add(faUserSecret);
library.add(faSearch);
library.add(faThLarge);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
