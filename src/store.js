/*
 * @Author: Jin
 * @Date: 2020-11-20 21:55:19
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-20 22:43:19
 * @FilePath: /final-assignment/src/store.js
 */
import Vue from "vue";

const state = Vue.observable({
    alert: {
        show: false,
        msg: ""
    }
});

const actions = {
    showAlert: function(newVal) {
        state.alert.msg = newVal;
        state.alert.show = true;
    },
    hideAlert: function() {
        state.alert.msg = "";
        state.alert.show = false;
    }
};

const store = {
    state,
    actions
};

export default store;
