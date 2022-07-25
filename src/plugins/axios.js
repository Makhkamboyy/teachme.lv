import axios from "axios"
import store from "@/plugins/store"


axios.defaults.baseURL = process.env.VUE_APP_API_URL + "/api"
axios.defaults.headers.post['Content-Type'] = 'application/ld+json'

axios.interceptors.request.use((config) => {
    if(config.url !== "/users/auth") {
        config.headers.common['Authorization'] = 'bearer ' + store.getters.getAccessToken
    }
    return config
})


export default axios;

