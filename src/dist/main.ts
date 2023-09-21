"use strict";
exports.__esModule = true;
const vue_1 = require("vue");
const App_vue_1 = require("./App.vue");
const vuetify_1 = require("./plugins/vuetify");
const webfontloader_1 = require("./plugins/webfontloader");
const store_1 = require("./store");
require("tailwindcss/tailwind.css");
webfontloader_1.loadFonts();
vue_1.createApp(App_vue_1["default"]).use(store_1["default"])
    .use(vuetify_1["default"])
    .mount('#app');
