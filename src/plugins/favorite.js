import axios from "./axios"


export default {
    actions: {
        fetchFavorites(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/favorites?pagination=false")
                    .then((response) => {
                        console.log("Favorite ollindi")
                        console.log(response)

                        let favorites = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit("updateFavorites", favorites)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Favorite olishda hatolik yuzberdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi favorite olishda")
                    })
            })
        },

        fetchFavorite(context, favoriteId) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/favorites/" + favoriteId)
                    .then((response) => {
                        console.log("Favorite ollindi")
                        console.log(response)

                        let favorite = {
                            "@id": response.data['@id'],
                            id: response.data.id,
                            price: {
                                "@id": response.data.price['@id'],
                                id: response.data.price['@id'],
                                trainer: {
                                    id: response.data.price.trainer.id,
                                    name: response.data.price.trainer.name,
                                    profession: response.data.price.trainer.profession
                                },
                                fee: response.data.price.fee,
                                seat: response.data.price.seat
                            },
                            category: {
                                "@id": response.data.category['@id'],
                                id: response.data.category.id,
                                name: response.data.category.name
                            },
                            favorite_image: {
                                "@id": response.data.favorite_image['@id'],
                                contentUrl: response.data.favorite_image.contentUrl
                            },
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text
                        }

                        context.commit("updateFavorite", favorite)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Favorite ollishda hatolik yuz berdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finally ishlayveradi favorite olishda")
                    })
            })
        },

    },
    mutations: {
        updateFavorites(state, favorites) {
            state.favorites = favorites
        },
        updateFavorite(state, favorite) {
            state.favorite = favorite
        }
    },
    state: {
        favorites: {
            models: [],
            totalItems: 0
        },
        favorite: {
            "@id": null,
            id: null,
            price: {
                "@id": null,
                id: null,
                trainer: {
                    id: null,
                    name: null,
                    profession: null
                },
                fee: null,
                seat: null
            },
            category: {
                "@id": null,
                id: null,
                name: null
            },
            favorite_image: {
                "@id": null,
                contentUrl: null
            },
            name: null,
            description: null,
            text: null
        }
    },
    getters: {
        getFavorites(state) {
            return state.favorites.models
        },

        getFavorite(state) {
            return state.favorite
        }
    }

}