<!--
 * @Author: Jin
 * @Date: 2020-11-19 15:55:47
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-21 13:33:54
 * @FilePath: /final-assignment/src/views/detail/Detail.vue
-->
<template>
    <div class="detail">
        <v-row>
            <v-col cols="12" md="8" xl="6" offset-xl="1">
                <div class="d-flex flex-column-reverse flex-md-row">
                    <div class="d-flex d-md-block justify-center mr-md-3">
                        <v-card
                            flat
                            link
                            class="d-inline-block d-md-block mb-md-3 ma-1 ma-md-0 overflow-hidden rounded transparent"
                            @click="src='https://i.loli.net/2020/11/21/c27WjGz5lTfdAFx.png';zoomSrc='https://i.loli.net/2020/11/21/c27WjGz5lTfdAFx.png'"
                        >
                            <v-img
                                height="48"
                                max-width="48"
                                src="https://i.loli.net/2020/11/21/c27WjGz5lTfdAFx.png"
                            ></v-img>
                        </v-card>
                        <v-card
                            flat
                            link
                            class="d-inline-block d-md-block mb-md-3 ma-1 ma-md-0 overflow-hidden rounded transparent"
                            @click="src='https://i.loli.net/2020/11/21/aerHvKNxGwfFPyu.png';zoomSrc='https://i.loli.net/2020/11/21/aerHvKNxGwfFPyu.png'"
                        >
                            <v-img
                                height="48"
                                max-width="48"
                                src="https://i.loli.net/2020/11/21/aerHvKNxGwfFPyu.png"
                            ></v-img>
                        </v-card>
                    </div>

                    <div class="mb-1 min-w-0 mx-md-auto">
                        <div>
                            <div
                                class="image-magnifier"
                                style="position: relative; cursor: move;"
                            >
                                <img
                                    width="auto"
                                    height="auto"
                                    :src="src"
                                    class="image-magnifier__img rounded"
                                    style="max-width: 100%; max-height: 474px;"
                                    @mouseenter="handleOver"
                                    @mousemove="handleMove"
                                    @mouseleave="handleOut"
                                    ref="img"
                                />
                                <div
                                    class="image-magnifier__mask"
                                    :class="maskClass"
                                    :style="maskStyle"
                                    ref="mask"
                                ></div>
                                <div
                                    class="image-magnifier__zoom elevation-4 rounded"
                                    :class="zoomClass"
                                    :style="zoomStyle"
                                    v-show="zoomShow"
                                >
                                    <img :src="zoomSrc" :style="zoomImgStyle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" md="4" xl="3">
                <div class="product-content">
                    <h1 class="text-h5 text-lg-h4 mb-1">Multiverse</h1>

                    <div class="mb-2">
                        <div class="product-price d-flex">
                            <div class="d-flex align-start">
                                <span
                                    class="product-price body-2"
                                    style="margin-top: 5px; margin-right: 1px;"
                                    >$</span
                                ><span
                                    class="product-price font-weight-bold text-h4"
                                    >59</span
                                ><span
                                    class="product-price body-1"
                                    style="margin-left: 2px; margin-top: 3px;"
                                    >00</span
                                >
                            </div>
                        </div>
                    </div>

                    <div class="body-1 mt-8">
                        <div>
                            Availability:
                            <span class="font-weight-bold">Available</span>
                        </div>
                        <div>
                            Vendor:
                            <span class="font-weight-bold">Vuetify</span>
                        </div>
                    </div>

                    <div class="mt-10">
                        <div>
                            <v-select
                                :items="items"
                                label="Licenses"
                                outlined
                                color="#0096c7"
                                hide-details
                            >
                                <template #selection="{ item }">
                                    {{ item.text.split("|")[0] }}
                                </template>

                                <template #item="{ item }">
                                    <v-list light>
                                        <div
                                            class="d-flex flex-column mt-1 flex-grow-1"
                                            style="max-width: 400px;min-height: 50px"
                                        >
                                            <div
                                                class="d-flex align-center flex-grow-1"
                                            >
                                                <div class="font-weight-bold">
                                                    {{
                                                        splitSelectItem(
                                                            item.text
                                                        ).type
                                                    }}
                                                </div>
                                                <div class="spacer"></div>
                                                <div
                                                    class="product-price d-flex flex-row-reverse"
                                                >
                                                    <div
                                                        class="d-flex align-start"
                                                    >
                                                        <span
                                                            class="product-price body-2"
                                                            style="margin-top: 5px; margin-right: 1px;"
                                                            >{{
                                                                splitSelectItem(
                                                                    item.text
                                                                ).price.cur
                                                            }}</span
                                                        ><span
                                                            class="product-price font-weight-bold text-h5"
                                                            >{{
                                                                splitSelectItem(
                                                                    item.text
                                                                ).price.price[0]
                                                            }}</span
                                                        ><span
                                                            class="product-price body-2"
                                                            style="margin-left: 2px; margin-top: 5px;"
                                                            >{{
                                                                splitSelectItem(
                                                                    item.text
                                                                ).price.price[1]
                                                            }}</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="body-2 mb-1">
                                                {{
                                                    splitSelectItem(item.text)
                                                        .text
                                                }}
                                            </div>
                                        </div>
                                    </v-list>
                                </template>
                            </v-select>
                        </div>
                    </div>

                    <div class="text-center mt-2">
                        <v-btn
                            text
                            small
                            width="100%"
                            @click="$router.push({ name: 'Licenses' })"
                        >
                            View License Details
                        </v-btn>
                    </div>

                    <v-btn
                        large
                        width="100%"
                        color="#f3cd70"
                        class="mt-6 black--text"
                    >
                        <v-icon>mdi-cart-plus</v-icon>
                        <span class="flex-grow-1">Add to Cart</span>
                    </v-btn>

                    <v-btn
                        large
                        width="100%"
                        color="#f1ab57"
                        class="mt-4 black--text"
                    >
                        <v-icon>mdi-cart-check</v-icon>
                        <span class="flex-grow-1">Buy Now</span>
                    </v-btn>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="mx-auto">
                <v-card class="pa-6">
                    <div class="py-4 body-2 font-weight-medium">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmodtempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,quis
                            nostrudexercitation ullamco laboris nisi ut aliquip
                            ex ea commodoconsequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit essecillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat nonproident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmodtempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,quis
                            nostrudexercitation ullamco laboris nisi ut aliquip
                            ex ea commodoconsequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit essecillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat nonproident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmodtempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,quis
                            nostrudexercitation ullamco laboris nisi ut aliquip
                            ex ea commodoconsequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit essecillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat nonproident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmodtempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,quis
                            nostrudexercitation ullamco laboris nisi ut aliquip
                            ex ea commodoconsequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit essecillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat nonproident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmodtempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,quis
                            nostrudexercitation ullamco laboris nisi ut aliquip
                            ex ea commodoconsequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit essecillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat nonproident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import detailVueJs from "./Detail.vue.js";

export default {
    ...detailVueJs
};
</script>

<style scoped>
div[role="listbox"] {
    background: #fff;
    color: rgba(0, 0, 0, 0.87);
}
</style>
