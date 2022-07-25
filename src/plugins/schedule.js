import axios from "./axios"


export default {
    actions: {
        fetchSchedules(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/schedules")
                    .then((response) => {
                        console.log("Schedule ollindi")
                        console.log(response)

                        let schedules = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit("updateSchedule", schedules)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Schedule olishda hatolik yuzberdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi schedule olishda")
                    })
            })
        },

    },
    mutations: {
        updateSchedule(state, schedules) {
            state.schedules = schedules
        }
    },
    state: {
        schedules: {
            models: [],
            totalItems: 0
        }
    },
    getters: {
        getSchedules(state) {
            return state.schedules.models
        }
    }

}