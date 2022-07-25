import axios from "axios"

export default {
    actions: {
        pushOrder(context, data) {
            let token = "5577448617:AAGj6_ZYyJlMa8ip4l-X7NlstJHOrGfFZ2A"
            let chatId = 1619681269
            return new Promise((resolve, reject) => {
                axios
                    .post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=` + data)
                    .then((response) => {
                        console.log("Successfully sent ")
                        console.log(response)

                        context.commit("updateOrder", data)
                        resolve()
                    })
                    .catch((reason) => {
                        console.log("Error happened !")
                        console.log(reason)
                        reject()
                    })
            })

        }

    }, mutations: {
        updateOrder(state, order) {
            state.order = order
        }
    }, state: {
        order: {

        }
    }, getters: {
        getOrder(state) {
            return state.order
        }
    },
}