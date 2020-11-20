/*
 * @Author: Jin
 * @Date: 2020-11-19 15:55:47
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-20 22:42:30
 * @FilePath: /final-assignment/src/main.js
 */
import Vue from "vue";

import App from "./App.vue";

import "./registerServiceWorker";

import store from "@/store";
import router from "./router";

import vuetify from "./plugins/vuetify";

import "@/assets/scss/global.scss";

Vue.prototype.$store = store;
Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");
