import axios from "./axios"


export default {
    actions: {
        fetchPerson(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("http://localhost:8888/api/users/about_me")
                    .then((response) => {
                        console.log("Person ollindi")
                        console.log(response)

                        let user = {
                            id: response.data.id,
                            email: response.data.email,
                            createdAt: response.data.createdAt,
                            updatedAt: response.data.updatedAt,
                            people: response.data.people[0]

                        }

                        context.commit("updatePerson", user)
                        resolve()
                    })
                    .catch(() => {
                        console.log("User olishda hatolik yuzberdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi tokken olishda")
                    })
            })
        },

    },
    mutations: {
        updatePerson(state, user) {
            state.user = user
        }
    },
    state: {
        user: {
            id: null,
            email: null,
            createdAt: null,
            updatedAt: null,
            people: null
        }
    },
    getters: {
        getPerson(state) {
            return state.user
        }
    }

}