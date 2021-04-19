import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { faUserSecret } from "@fortawesome/free-regular-svg-icons";
// import { faUserSecret } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

Vue.component("fa-icon", FontAwesomeIcon);
