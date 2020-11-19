/*
 * @Author: Jin
 * @Date: 2020-11-19 16:27:46
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 16:33:29
 * @FilePath: /final-assignment/src/router/routes.js
 */
const Home = () => import(/* webpackChunkName: "home" */ "@/views/home/Home.vue");

export default [{ path: "/", name: "Home", component: Home }];
