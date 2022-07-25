import axios from "./axios"


export default {
    actions: {
        fetchCourses(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/courses")
                    .then((response) => {
                        console.log("Courses ollindi")
                        console.log(response)

                        let courses = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit("updateCourses", courses)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Courses olishda hatolik yuzberdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finnaly ishlayveradi trainer olishda")
                    })
            })
        },
        fetchCourse(context, courseId) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/courses/" + courseId)
                    .then((response) => {
                        console.log("Course ollindi")
                        console.log(response)

                        let course = {
                            id: response.data.id,
                            price: {
                                id: response.data.price.id,
                                trainer: {
                                    id: response.data.price.trainer.id,
                                    image: {
                                        "@id": response.data.price.trainer.image['@id'],
                                        "@type": response.data.price.trainer.image['@type'],
                                        contentUrl: response.data.price.trainer.image.contentUrl
                                    },
                                    name: response.data.price.trainer.name,
                                    profession: response.data.price.trainer.profession,
                                    description: response.data.price.trainer.description,
                                    text: response.data.price.trainer.text
                                },
                                fee: response.data.price.fee,
                                seat: response.data.price.seat
                            },
                            category: {
                                id: response.data.category.id,
                                name: response.data.category.name
                            },
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                            courseImage: {
                                "@id": response.data.courseImage.id,
                                contentUrl: response.data.courseImage.contentUrl
                            }
                        }

                        context.commit("updateCourse", course)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Course ollishda hatolik yuz berdi")
                        reject()
                    })
                    .finally(() => {
                        console.log("Finally ishlayveradi course olishda")
                    })
            })
        },

    },
    mutations: {
        updateCourses(state, courses) {
            state.courses = courses
        },
        updateCourse(state, course) {
            state.course = course
        }
    },
    state: {
        courses: {
            models: [],
            totalItems: 0
        },
        course: {
            id: null,
            price: {
                id: null,
                trainer: {
                    id: null,
                    image: {
                        "@id": null,
                        "@type": null,
                        contentUrl: null
                    },
                    name: null,
                    profession: null,
                    description: null,
                    text: null
                },
                fee: null,
                seat: null
            },
            category: {
                id: null,
                name: null
            },
            name: null,
            description: null,
            text: null,
            courseImage: {
                "@id": null,
                contentUrl: null
            }
        }
    },
    getters: {
        getCourses(state) {
            return state.courses.models
        },
        getCourse(state) {
            return state.course
        }
    }

}