<!--
 * @Author: Jin
 * @Date: 2020-11-19 15:55:47
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 17:38:32
 * @FilePath: /final-assignment/src/views/home/Home.vue
-->
<template>
    <div class="home">
        <section class="my-2 mb-md-12">
            <v-carousel
                hide-delimiters
                height="205"
                show-arrows-on-hover
                cycle
                interval="3000"
                style="border-radius: 6px;"
            >
                <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                ></v-carousel-item>
            </v-carousel>
        </section>

        <section class="mt-6 mb-3">
            <div class="font-weight-black text-uppercase mb-2">
                Featured products
            </div>
            <v-row>
                <commodityCardComponent />
                <commodityCardComponent />
                <commodityCardComponent />
                <commodityCardComponent />
                <commodityCardComponent />
            </v-row>
        </section>
    </div>
</template>

<script>
import homeVueJs from "./Home.vue.js";

export default {
    ...homeVueJs
};
</script>
