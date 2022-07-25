import axios from "./axios"


export default {
    actions: {
        fetchTrainer(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/trainers")
                    .then((response) => {
                        console.log("Trainer ollindi")
                        console.log(response)

                        let trainers = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit("updateTrainer", trainers)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Trainer olishda hatolik yuzberdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi trainer olishda")
                    })
            })
        },

    },
    mutations: {
        updateTrainer(state, trainer) {
            state.trainer = trainer
        }
    },
    state: {
        trainer: {
            models: [],
            totalItems: 0
        }
    },
    getters: {
        getTrainer(state) {
            return state.trainer.models
        }
    }

}