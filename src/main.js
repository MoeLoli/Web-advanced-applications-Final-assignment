/*
 * @Author: Jin
 * @Date: 2020-11-19 15:55:47
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 16:32:16
 * @FilePath: /final-assignment/src/main.js
 */
import Vue from "vue";

import App from "./App.vue";

import "./registerServiceWorker";

import router from "./router";

import vuetify from "./plugins/vuetify";

import "@/assets/scss/global.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");
