/*
 * @Author: Jin
 * @Date: 2020-11-19 16:03:16
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-20 22:53:57
 * @FilePath: /final-assignment/src/plugins/vuetify.js
 */
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
const isNotSpecified = window.matchMedia(
    "(prefers-color-scheme: no-preference)"
).matches;
const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

let isDark;

if (isNotSpecified || hasNoSupport) {
    let now = new Date();
    let hour = now.getHours();
    if (hour < 4 || hour >= 16) {
        isDark = true;
    } else {
        isDark = false;
    }
} else {
    isDark = isDarkMode;
}

const opts = {
    theme: {
        dark: isDark
    }
};

export default new Vuetify(opts);
