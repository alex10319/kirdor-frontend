import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'
import 'tailwindcss/tailwind.css'
import './assets/styles/general.css'
import router from './router'
import 'atropos/css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2)
  .use(vuetify)
  .mount('#app')
