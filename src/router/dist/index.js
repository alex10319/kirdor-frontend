"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Index_vue_1 = require("../views/Index.vue");
var routes = [
    {
        path: '/',
        name: 'home',
        component: Index_vue_1["default"]
    },
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    routes: routes
});
exports["default"] = router;
