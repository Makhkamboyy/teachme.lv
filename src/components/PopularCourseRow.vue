<template>
  <!-- ======= Popular Courses Section ======= -->
  <section id="popular-courses" class="courses">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Courses</h2>
        <p>Popular Courses</p>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="100">

        <div
            v-for="course in getCourses"
            v-bind:key="course.id"
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
        >
          <div class="course-item">
            <img :src="'http://localhost:8888' + course.courseImage.contentUrl" class="img-fluid" alt="..." style="min-height: 300px">
            <div class="course-content">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4>{{course.category.name}}</h4>
                <p class="price">month/€{{course.price.fee}}</p>
              </div>

              <h3>
                <router-link :to="'/course/' + course.id">{{course.name}}</router-link>
              </h3>
              <p>
                  {{course.description}}
              </p>
              <div class="trainer d-flex justify-content-between align-items-center">
                <div class="trainer-profile d-flex align-items-center">
                  <img :src="'http://localhost:8888' + course.price.trainer.image.contentUrl" class="img-fluid" alt="">
                  <span>
                    {{course.price.trainer.name}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- End Course Item-->



      </div>

    </div>
  </section><!-- End Popular Courses Section -->

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PopularCourseRow",
  methods: {
    ...mapActions(['fetchCourses', 'fetchCourse'])
  },
  computed: {
    ...mapGetters(['getCourses'])
  },
  mounted() {
    this.fetchCourses()
  },
  watch: {
    '$route.params.courseId'() {
      this.fetchCourse(this.$route.params.courseId)
    }
  }

}
</script>

<style scoped>
/*--------------------------------------------------------------
# Courses
--------------------------------------------------------------*/
.courses .course-item {
  border-radius: 5px;
  border: 1px solid #eef0ef;
}

.courses .course-content {
  padding: 15px;
}

.courses .course-content h3 {
  font-weight: 700;
  font-size: 20px;
}

.courses .course-content h3 a {
  color: #37423b;
  transition: 0.3s;
}

.courses .course-content h3 a:hover {
  color: #5fcf80;
}

.courses .course-content p {
  font-size: 14px;
  color: #777777;
}

.courses .course-content h4 {
  font-size: 14px;
  background: #5fcf80;
  padding: 7px 14px;
  color: #fff;
  margin: 0;
}

.courses .course-content .price {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: #37423b;
}

.courses .trainer {
  padding-top: 15px;
  border-top: 1px solid #eef0ef;
}

.courses .trainer .trainer-profile img {
  max-width: 50px;
  border-radius: 50px;
}

.courses .trainer .trainer-profile span {
  padding-left: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #5a6c60;
}

.courses .trainer .trainer-rank {
  font-size: 18px;
  color: #657a6d;
}

</style>