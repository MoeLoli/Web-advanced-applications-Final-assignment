<!--
 * @Author: Jin
 * @Date: 2020-11-19 17:05:15
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 18:43:58
 * @FilePath: /final-assignment/src/components/commodityCard/commodityCard.vue
-->
<template>
    <v-col cols="12" sm="6" lg="4" xl="3">
        <div class="position-relative">
            <v-card>
                <v-img
                    height="240"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-img>

                <v-card-title class="pb-0">
                    <div class="text-truncate">
                        {{ name }}
                    </div>
                </v-card-title>

                <v-card-text class="pb-1">
                    <div>
                        <span class="font-italic">by </span>
                        <span class="font-weight-bold">
                            {{ vendor }}
                        </span>
                        <span>in </span>
                        <span class="font-weight-bold">
                            <a :href="`#`"> {{ cat }} </a>
                        </span>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <div class="product-price d-flex pl-1">
                        <div class="d-flex align-start">
                            <span
                                class="product-price body-2"
                                style="margin-top: 5px; margin-right: 1px;"
                                >{{ currency }}</span
                            >
                            <span
                                class="product-price font-weight-bold text-h5"
                                >{{ price1 }}</span
                            >
                            <span
                                class="product-price body-2"
                                style="margin-left: 2px; margin-top: 5px;"
                                >{{ price2 }}</span
                            >
                        </div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="error"
                        outlined
                        depressed
                        height="44"
                        width="44"
                        min-width="unset"
                    >
                        <v-icon>mdi-cart-plus</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-col>
</template>

<script>
import commodityCardVueJs from "./commodityCard.vue.js";

export default {
    ...commodityCardVueJs
};
</script>

<style scoped>
.v-application .product-price {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
}
</style>
