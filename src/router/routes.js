/*
 * @Author: Jin
 * @Date: 2020-11-19 16:27:46
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 18:30:25
 * @FilePath: /final-assignment/src/router/routes.js
 */
const Home = () => import(/* webpackChunkName: "home" */ "@/views/home/Home.vue");
const Detail = () =>
    import(/* webpackChunkName: "detail" */ "@/views/detail/Detail.vue");

export default [
    { path: "/", name: "Home", component: Home },
    { path: "/detail/:name", name: "Detail", component: Detail },
    {
        path: "*",
        beforeEnter: function () {
            window.location = `/`;
        }
    }
];
