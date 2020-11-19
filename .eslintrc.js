/*
 * @Author: Jin
 * @Date: 2020-11-19 15:55:47
 * @LastEditors: Jin
 * @LastEditTime: 2020-11-19 16:01:51
 * @FilePath: /final-assignment/.eslintrc.js
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
};
