/*
 * @Author: Jin
 * @Date: 2020-11-19 17:05:45
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-20 22:43:01
 * @FilePath: /final-assignment/src/components/commodityCard/commodityCard.vue.js
 */
export default {
    name: "CommodityCard",
    props: {
        config: {
            type: Object,
            default: () => ({
                name: "Test",
                imgUrl: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                vendor: "Jin",
                cat: "Test Cat",
                currency: "$",
                price: "10.99"
            })
        }
    },
    computed: {
        name: function() {
            return this.config.name || "Test";
        },
        imgUrl: function() {
            return (
                this.config.imgUrl ||
                "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
            );
        },
        vendor: function() {
            return this.config.vendor || "Jin";
        },
        cat: function() {
            return this.config.cat || "Test Cat";
        },
        currency: function() {
            return this.config.currency || "$";
        },
        price: function() {
            return this.config.price || "10.99";
        },

        price1: function() {
            if (String(this.price).toLocaleLowerCase() === "free")
                return "Free";

            return String(this.price).indexOf(".") !== -1
                ? String(this.price).split(".")[0]
                : this.price;
        },
        price2: function() {
            if (String(this.price).toLocaleLowerCase() === "free")
                return "Free";

            return String(this.price).indexOf(".") !== -1
                ? String(this.price).split(".")[1]
                : "00";
        }
    },
    methods: {
        addCart: function () {
            this.$store.actions.showAlert("Added to cart!");
        }
    }
};
