/*
 * @Author: Jin
 * @Date: 2020-11-19 16:27:46
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-20 20:51:45
 * @FilePath: /final-assignment/src/router/routes.js
 */
const Home = () => import(/* webpackChunkName: "home" */ "@/views/home/Home.vue");
const Detail = () =>
    import(/* webpackChunkName: "detail" */ "@/views/detail/Detail.vue");
const Licenses = () =>
    import(/* webpackChunkName: "licenses" */ "@/views/licenses/Licenses.vue");
    
export default [
    { path: "/", name: "Home", component: Home },
    { path: "/detail/:name", name: "Detail", component: Detail },
    { path: "/licenses", name: "Licenses", component: Licenses },
    {
        path: "*",
        beforeEnter: function() {
            window.location = `/`;
        }
    }
];
