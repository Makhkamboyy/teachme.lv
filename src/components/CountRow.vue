<template>
  <!-- ======= Counts Section ======= -->
  <section id="counts" class="counts section-bg">
    <div class="container">

      <div class="row counters">

        <div class="col-lg-3 col-6 text-center">
          <p>Students</p>
          <span class="purecounter"><count-up :end-val="45"></count-up></span>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <p>Courses</p>
          <span class="purecounter"><count-up :end-val="3"></count-up></span>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <p>Events</p>
          <span class="purecounter"><count-up :end-val="32"></count-up></span>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <p>Trainers</p>
          <span class="purecounter"><count-up :end-val="35"></count-up></span>
        </div>

      </div>


    </div>
  </section><!-- End Counts Section -->

</template>

<script>
import CountUp from 'vue-countup-v3'
export default {
  name: "CountRow",
  components: {
    CountUp
  }
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  padding: 30px 0;
}
.counts .counters span {
  font-size: 48px;
  display: block;
  color: #5fcf80;
  font-weight: 700;
}
.counts .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #37423b;
}

</style>