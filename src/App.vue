<!--
 * @Author: Jin
 * @Date: 2020-11-19 15:55:47
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 19:07:08
 * @FilePath: /final-assignment/src/App.vue
-->
<template>
    <v-app>
        <v-app-bar app extension-height="60">
            <v-container class="d-flex pa-0 pa-md-3 align-center">
                <span class="font-weight-bold text-uppercase textbase--text">
                    <span class="d-none d-sm-inline-block">Meaningless</span>
                    Store
                </span>
                <v-btn
                    icon
                    class="ml-2"
                    small
                    @click="$vuetify.theme.dark = !$vuetify.theme.dark"
                >
                    <v-icon size="16">{{
                        this.$vuetify.theme.isDark
                            ? "mdi-white-balance-sunny"
                            : "mdi-brightness-2"
                    }}</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="drawer = true">
                    <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
            </v-container>

            <template v-slot:extension>
                <v-container class="py-0 d-none d-md-block fill-height">
                    <v-divider></v-divider>

                    <div
                        class="d-flex fill-height justify-space-between py-2 text-body-2 text-lg-body-1"
                    ></div>
                </v-container>
            </template>
        </v-app-bar>

        <v-main style="padding: 124px 0px 0px;">
            <router-view class="container" />
        </v-main>

        <v-navigation-drawer v-model="drawer" temporary app right width="340">
            <div class="d-flex align-center justify-space-between py-4 px-4">
                <span class="text-h6">Shopping Cart</span>

                <v-btn icon depressed>
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        drawer: null
    }),

    mounted: function() {
    }
};
</script>

<style scoped>
.v-application a {
    color: #0096c7 !important;
}

.v-application .align-center {
    align-items: center !important;
}

.theme--light.v-toolbar.v-sheet {
    background-color: #fff !important;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #05090c;
}

.theme--light.v-divider {
    border-color: rgba(0, 0, 0, 0.05) !important;
}

.theme--dark.v-divider {
    border-color: hsla(0, 0%, 100%, 0.12);
}
</style>
