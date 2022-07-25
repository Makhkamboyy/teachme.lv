import axios from "./axios"


export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/users/auth", data)
                    .then((response) => {
                        console.log("Token ollindi")
                        console.log(response)

                        context.commit("updateToken", response.data)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Token olishda hatolik yuzberdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi tokken olishda")
                    })
            })
        },

        pushUser(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/users", data)
                    .then((response) => {
                        console.log("Hammasi joyida user qoshildi")
                        console.log(response)

                        let user = {
                            "@id": response.data['@id'],
                            id: response.data.id,
                            email: response.data.email,
                            roles: response.data.roles,
                            createdAt: response.data.createdAt,
                            updatedAt: response.data.updatedAt,
                            people: response.data.people
                        }

                        context.commit('updateUser', user)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Hattolik yuz berdi")
                        reject()
                    })
            })
        },

        fetchAboutMe(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/users/about_me")
                    .then((response) => {
                        console.log("About me ollindi")
                        console.log(response)

                        let user = {
                            "@id": response.data['@id'],
                            id: response.data.id,
                            email: response.data.email,
                            roles: response.data.roles,
                            createdAt: response.data.createdAt,
                            updatedAt: response.data.updatedAt,
                            people: response.data.people
                        }

                        context.commit('updateAboutMe', user)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Hattolik yuz berdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi bu uni ishi")
                    })
            })
        },

        refreshToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/users/auth/refreshToken", data)
                    .then((response) => {
                        console.log("Token yangillandi")
                        console.log(response)

                        context.commit("updateToken", response.data)
                        resolve()
                    })
                    .catch(() => {
                        context.commit('clearTokens')
                        console.log("Token yangillashda olishda hatolik yuzberdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi tokken olishda")
                    })
            })
        },

        fetchUser(context, userId) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/users/" + userId)
                    .then((response) => {
                        console.log("Hammasi joyida user ollindi")
                        console.log(response)
                        context.commit('updateUser', response.data.user)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Hattolik yuz berdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi bu uni ishi")
                    })
            })
        },

    },
    mutations: {
        updateToken(state, tokens) {
            localStorage.setItem("accessToken", tokens.accessToken)
            localStorage.setItem("refreshToken", tokens.refreshToken)

            state.accessToken = tokens.accessToken
            state.refreshToken = tokens.refreshToken
        },

        updateUser(state, user) {
            state.user = user
        },

        updateAboutMe(state, user) {
            state.aboutMe = user
        },

        clearTokens(state) {
            state.accessToken = null
            state.refreshToken = null

            localStorage.setItem("accessToken", null)
            localStorage.setItem("refreshToken", null)
        }
    },
    state: {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
        user: {
            "@id": null,
            id: null,
            email: null,
            roles: [],
            createdAt: null,
            updatedAt: null,
            people: []
        },

        aboutMe: {
            "@id": null,
            id: null,
            email: null,
            roles: [],
            createdAt: null,
            updatedAt: null,
            people: []
        }
    },
    getters: {
        getAccessToken(state) {
            return state.accessToken
        },

        getRefreshToken(state) {
            return state.refreshToken
        },

        getUser(state) {
            return state.user
        },

        isAuthorized(state) {
            return state.accessToken !== null
        },

        getAboutMe(state) {
            return state.aboutMe
        }


    }

}