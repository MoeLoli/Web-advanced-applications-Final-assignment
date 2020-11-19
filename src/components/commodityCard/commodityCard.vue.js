/*
 * @Author: Jin
 * @Date: 2020-11-19 17:05:45
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 17:14:46
 * @FilePath: /final-assignment/src/components/commodityCard/commodityCard.vue.js
 */
export default {
    name: "CommodityCard",
    props: {
        name: {
            type: String,
            default: "Test"
        },
        author: {
            type: String,
            default: "Jin"
        },
        cat: {
            type: String,
            default: "Test Cat"
        },
        currency: {
            type: String,
            default: "$"
        },
        price: {
            type: Number,
            default: 10.99
        }
    },
    computed: {
        price1: function() {
            return String(this.price).indexOf(".") !== -1
                ? String(this.price).split(".")[0]
                : this.price;
        },
        price2: function() {
            return String(this.price).indexOf(".") !== -1
                ? String(this.price).split(".")[1]
                : "00";
        }
    }
};
