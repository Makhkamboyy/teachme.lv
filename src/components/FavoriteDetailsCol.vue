<template>
  <!-- ======= Cource Details Section ======= -->
  <section id="course-details" class="course-details">
    <div class="container">

      <div class="row">
        <div class="col-lg-8" data-aos="fade-up">
          <div>
            <img :src="'http://localhost:8888' + getFavorite.favorite_image.contentUrl" class="img-fluid" alt="">
            <h3>{{getFavorite.name}}</h3>
            <p>
              {{getFavorite.text}}
            </p>
          </div>
        </div>







<!--        Order for bot-->


        <div class="col-lg-4">

          <div class="course-info d-flex justify-content-between align-items-center">
            <h5>Trainer</h5>
            <p><a href="#">{{ fullName }}</a></p>
          </div>

          <div class="course-info d-flex justify-content-between align-items-center">
            <h5>Course Fee</h5>
            <p>{{ fee }}</p>
          </div>

          <div class="course-info d-flex justify-content-between align-items-center">
            <h5>Available Seats</h5>
            <p>{{ seat }}</p>
          </div>

          <div class="course-info d-flex justify-content-between align-items-center">
            <h5>Schedule</h5>
            <p>Your preference</p>
          </div>

          <!--        Bootstrap start-->
          <!-- Button trigger modal -->
          <button type="button" class="btn-order" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Order
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">The course of {{ fullName }}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form method="post" @submit.prevent="submit" class="my-form">
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label">Trainer: </label>
                      <input type="text" class="form-control" id="disabledTextInput" v-model="fullName" disabled>
                    </div>
                    <div class="mb-3">
                      <label for="fee" class="form-label">Course fee: </label>
                      <input type="text" class="form-control" id="fee" v-model="fee" disabled>
                    </div>
                    <div class="mb-3">
                      <label for="fee" class="form-label">Course fee: </label>
                      <select class="form-select" aria-label="Default select example" v-model="schedule">
                        <option
                            v-for="schedule in getSchedules"
                            v-bind:key="schedule.id"
                            :value="schedule.id"
                        >
                          {{schedule.name}}
                        </option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="name" class="form-label">Firstname: </label>
                      <input type="text" class="form-control" id="name" v-model="name" placeholder="John">
                    </div>
                    <div class="mb-3">
                      <label for="lastname" class="form-label">Lastname: </label>
                      <input type="text" class="form-control" id="lastname" v-model="lastname" placeholder="Doe">
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">Phone: </label>
                      <input type="text" class="form-control" id="phone" v-model="phone" placeholder="+37112345678">
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">Address: </label>
                      <input type="text" class="form-control" id="address" v-model="address" placeholder="Latvia, Riga, Aleksandra Caka">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                  <div class="success">
                    <div>
                      <div class="icon-succes">
                        <i class="fa-solid fa-circle-check"></i>
                      </div>
                      <div class="text-success">
                        <p>Successfully sent !!!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <router-link @click="goBack" type="button" class="btn btn-primary back-course" to="/course"
                               data-bs-dismiss="modal">Courses
                  </router-link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  </section><!-- End Cource Details Section -->

</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
  name: "FavoriteDetailsCol",
  data() {
    return {
      fullName: '',
      fee: "€",
      seat: "",
      schedule: "1",
      name: "",
      lastname: "",
      phone: "",
      address: "",

      /// Telegram bot info
      myBot: {
        token: "5577448617:AAGj6_ZYyJlMa8ip4l-X7NlstJHOrGfFZ2A",
        chatId: 1619681269

      },

      // The variable chooses what description to show
      course: this.$route.params.favoriteId
    }
  },
  methods: {
    ...mapActions(['pushOrder', 'fetchFavorite', 'fetchSchedules']),
    submit() {
      if (this.schedule) {
        if (this.schedule === "1") {
          this.schedule = "5.00 pm - 7.00 pm"
        } else if (this.schedule === "2") {
          this.schedule = "8.00 pm - 10.00 pm"
        } else if (this.schedule === "3") {
          this.schedule = "11.00 pm - 1.00 am"
        }
      }

      // const fullMessage = `New student !!! \n Full name: ${this.fullName} \n Fee: ${this.fee} \n Seat: ${this.seat} \n Schedule: ${this.schedule}`
      const fullMessage = this.fullMessage

      this
          .pushOrder(fullMessage)
          .then(() => {
            document.querySelector(".my-form").style.display = "none";
            document.querySelector(".success").style.display = "block";
          })

    },
    goBack() {
      this.$router.push("/course")
    },


  },
  computed: {
    fullMessage() {
      return `New student !!! \n Full name: ${this.fullName} \n Fee: ${this.fee} \n Seat: ${this.seat} \n Schedule: ${this.schedule} \n Name: ${this.name} \n Lastname: ${this.lastname} \n Phone: ${this.phone} \n Address: ${this.address}`
    },
    ...mapGetters(['getFavorite', 'getSchedules'])
  },
  mounted() {
    this
        .fetchFavorite(this.$route.params.favoriteId)
        .then(() => {
          this.fullName = this.getFavorite.price.trainer.name
          this.fee = '€' + this.getFavorite.price.fee
          this.seat = this.getFavorite.price.seat
        })
    this.fetchSchedules()


  }
}
</script>

<style scoped>
.course-details .btn-order {
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  background-color: #5fcf80;
  color: white;
  transition: 0.3s;
}

.course-details .btn-order:hover {
  background-color: #3ac162;
  color: white;
}

.course-details .success {
  display: none;
}

.course-details .success .icon-succes {
  width: 100%;
  display: block;
  text-align: center;
  padding: 35px;
}

.course-details .success .icon-succes i {
  font-size: 80px;
  color: #5fcf80;

}

.course-details .success .text-success {
  width: 100%;
  display: block;
  text-align: center;
}

.course-details .success .text-success p {
  font-size: 20px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}


/*--------------------------------------------------------------
# Cource Details
--------------------------------------------------------------*/
.course-details h3 {
  font-size: 24px;
  margin: 30px 0 15px 0;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;
}

.course-details h3:before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  background: #eef0ef;
  bottom: 0;
  left: 0;
}

.course-details h3:after {
  content: "";
  position: absolute;
  display: block;
  width: 60px;
  height: 1px;
  background: #5fcf80;
  bottom: 0;
  left: 0;
}

.course-details .course-info {
  background: #f6f7f6;
  padding: 10px 15px;
  margin-bottom: 15px;
}

.course-details .course-info h5 {
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.course-details .course-info p {
  margin: 0;
  font-weight: 600;
}

.course-details .course-info a {
  color: #657a6d;
}


</style>