/*
 * @Author: Jin
 * @Date: 2020-11-19 15:55:47
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 16:28:02
 * @FilePath: /final-assignment/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

export default router;
