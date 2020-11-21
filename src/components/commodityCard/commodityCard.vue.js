/*
 * @Author: Jin
 * @Date: 2020-11-19 17:05:45
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-21 18:11:49
 * @FilePath: /final-assignment/src/components/commodityCard/commodityCard.vue.js
 */
export default {
    name: "CommodityCard",
    props: {
        loading: {
            type: Boolean,
            default: true
        },
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
    data: () => ({
        addCartButtonLoading: false,
    }),
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
        addCart: function() {
            this.addCartButtonLoading = true;
            this.$store.actions.addCart({
                imgUrl: this.imgUrl,
                name: this.name,
                price: this.price,
                type: "imgUrl"
            });

            setTimeout(() => {
                this.$store.actions.showAlert("Added to cart!");
                this.addCartButtonLoading = false;
            }, 2000)
        }
    }
};
