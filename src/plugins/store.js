import {createStore} from "vuex"
import orders from "@/plugins/orders"
import user from "@/plugins/user"
import person from "@/plugins/person"
import trainer from "@/plugins/trainer"
import course from "@/plugins/course"
import favorite from "@/plugins/favorite"
import schedule from "@/plugins/schedule"

export default createStore({
    modules: {
        user,
        orders,
        person,
        trainer,
        course,
        favorite,
        schedule
    }
})