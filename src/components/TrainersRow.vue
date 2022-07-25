<template>
  <!-- ======= Trainers Section ======= -->
  <section id="trainers" class="trainers">
    <div class="container" data-aos="fade-up">

      <div class="row" data-aos="zoom-in" data-aos-delay="100">
        <div
            v-for="trainer in getTrainer"
            v-bind:key="trainer.id"
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
        >
          <div class="member">
            <img :src="'http://localhost:8888' + trainer.image.contentUrl" class="img-fluid" alt="">
            <div class="member-content">
              <h4>{{trainer.name}}</h4>
              <span>{{trainer.profession}}</span>
              <p>
                {{trainer.description}}
              </p>
              <div class="social">
                <a href=""><i class="fa-brands fa-telegram"></i></a>
                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  </section><!-- End Trainers Section -->

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TrainersRow",
  methods: {
    ...mapActions(['fetchTrainer'])
  },
  computed: {
    ...mapGetters(['getTrainer'])
  },
  mounted() {
    this.fetchTrainer()
  }
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Trainers
--------------------------------------------------------------*/
.trainers .member {
  text-align: center;
  margin-bottom: 20px;
  background: #fff;
  border: 1px solid #eef0ef;
}
.trainers .member img {
  margin: -1px -1px 30px -1px;
}
.trainers .member .member-content {
  padding: 0 20px 30px 20px;
}
.trainers .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
}
.trainers .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
}
.trainers .member p {
  padding-top: 10px;
  font-size: 14px;
  font-style: italic;
  color: #aaaaaa;
}
.trainers .member .social {
  margin-top: 15px;
}
.trainers .member .social a {
  color: #7e9486;
  transition: 0.3s;
}
.trainers .member .social a:hover {
  color: #5fcf80;
}
.trainers .member .social i {
  font-size: 18px;
  margin: 0 2px;
}

</style>