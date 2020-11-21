/*
 * @Author: Jin
 * @Date: 2020-11-20 21:55:19
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-21 18:09:40
 * @FilePath: /final-assignment/src/store.js
 */
import Vue from "vue";

const state = Vue.observable({
    alert: {
        show: false,
        msg: ""
    },
    cart: [
        {
            imgUrl: "333",
            name: "eee",
            price: "$99.00",
            type: "imgUrl"
        }
    ]
});

const actions = {
    showAlert: function(newVal) {
        state.alert.msg = newVal;
        state.alert.show = true;
    },
    hideAlert: function() {
        state.alert.msg = "";
        state.alert.show = false;
    },
    addCart: function (item) {
        state.cart.push(item);
    },
    removeCart: function(index) {
        state.cart.splice(index, 1);
    }
};

const store = {
    state,
    actions
};

export default store;
