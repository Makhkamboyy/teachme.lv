<template>
  <!-- ======= Features Section ======= -->
  <section id="features" class="features">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Courses</h2>
        <p>Choose your favorite</p>
      </div>


      <div class="row" data-aos="zoom-in" data-aos-delay="100">


        <div
            v-for="favorite in getFavorites"
            v-bind:key="favorite.id"
            class="col-lg-3 col-md-4 mt-4"
        >
          <router-link :to="'/favorite/' + favorite.id">
            <div class="icon-box">
              <i class="fa-solid fa-laptop-code" style="color: #5fcf80;"></i>
              <h3 style="color: black;">{{favorite.name}}</h3>
            </div>
          </router-link>
        </div>

      </div>

    </div>
  </section><!-- End Features Section -->

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FeatureRow",
  methods: {
    ...mapActions(['fetchFavorites', 'fetchFavorite'])
  },
  computed: {
    ...mapGetters(['getFavorites'])
  },
  mounted() {
    this.fetchFavorites()
  },
  watch: {
    '$route.params.favoriteId'() {
      this.fetchFavorite(this.$route.params.favoriteId)
    }
  }
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Features
--------------------------------------------------------------*/
.features {
  padding-top: 15px;
}
.features .icon-box {
  display: flex;
  align-items: center;
  padding: 20px;
  transition: 0.3s;
  border: 1px solid #eef0ef;
}
.features .icon-box i {
  font-size: 32px;
  padding-right: 10px;
  line-height: 1;
}
.features .icon-box h3 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px;
}
.features .icon-box h3 a {
  color: #37423b;
  transition: 0.3s;
}
.features .icon-box:hover {
  border-color: #5fcf80;
}
.features .icon-box:hover h3 a {
  color: #5fcf80;
}

</style>