"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var vuetify_1 = require("./plugins/vuetify");
var webfontloader_1 = require("./plugins/webfontloader");
var store_1 = require("./store");
require("tailwindcss/tailwind.css");
require("./assets/styles/general.css");
var router_1 = require("./router");
var vue_carousel_3d_1 = require("vue-carousel-3d");
webfontloader_1.loadFonts();
vue_1.createApp(App_vue_1["default"]).use(router_1["default"]).use(store_1["default"])
    .use(vuetify_1["default"])
    .use(vue_carousel_3d_1["default"])
    .mount('#app');
