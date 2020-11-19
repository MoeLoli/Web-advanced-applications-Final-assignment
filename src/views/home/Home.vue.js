/*
 * @Author: Jin
 * @Date: 2020-11-19 16:33:40
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 17:13:43
 * @FilePath: /final-assignment/src/views/home/Home.vue.js
 */
import commodityCardComponent from "@/components/commodityCard/commodityCard.vue";

export default {
    name: "Home",
    components: {
        commodityCardComponent
    },
    data: () => ({
        items: [
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
            },
            {
                src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
            }
        ]
    })
};
