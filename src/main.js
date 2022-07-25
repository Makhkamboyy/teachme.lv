import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/router"
import store from "@/plugins/store"
import AOS from "aos"
// import "aos/dist/aos.css"
import("aos/dist/aos.css")
// ..
AOS.init();



createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

