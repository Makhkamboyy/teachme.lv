<template>
  <!-- ======= Why Us Section ======= -->
  <section id="why-us" class="why-us">
    <div class="container" data-aos="fade-up">

      <div class="row">
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="content">
            <h3>Why Choose teachMe.lv ?</h3>
            <p>
              We are the disclosed agent of over 18,000 tutors. Our tutors are all qualified and experienced teachers; subject-specialists, professional, reliable, up-to-date with the current demands of a changing curriculum, across all exam boards.

              Lessons are taught at your home and scheduled at your convenience; weekdays, evenings or weekends.
            </p>
            <div class="text-center">
              <router-link to="/course" class="more-btn">Learn More <i class="fa-solid fa-angle-right"></i></router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-boxes d-flex flex-column justify-content-center">
            <div class="row">
              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="fa-solid fa-timeline"></i>
                  <h4>Flexible schedules</h4>
                  <p>You can choose an appropriate time for studying.</p>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="fa-solid fa-gauge-simple-high"></i>
                  <h4>Learn faster </h4>
                  <p>You can become a developer for only 3 months and this is guaranteed</p>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="fa-solid fa-location-dot"></i>
                  <h4>Convenient location</h4>
                  <p>You can choose for home tuition and the teacher will come to your home</p>
                </div>
              </div>
            </div>
          </div><!-- End .content-->
        </div>
      </div>

    </div>
  </section><!-- End Why Us Section -->

</template>

<script>
export default {
  name: "WhyUsRow"
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Why Us
--------------------------------------------------------------*/
.why-us .content {
  padding: 30px;
  background: #5fcf80;
  border-radius: 4px;
  color: #fff;
}
.why-us .content h3 {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 30px;
}
.why-us .content p {
  margin-bottom: 30px;
}
.why-us .content .more-btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 30px 8px 30px;
  color: #fff;
  border-radius: 50px;
  transition: all ease-in-out 0.4s;
}
.why-us .content .more-btn i {
  font-size: 14px;
}
.why-us .content .more-btn:hover {
  color: #5fcf80;
  background: #fff;
}
.why-us .icon-boxes .icon-box {
  text-align: center;
  background: #fff;
  padding: 40px 30px;
  width: 100%;
  border: 1px solid #eef0ef;
}
.why-us .icon-boxes .icon-box i {
  font-size: 32px;
  padding: 18px;
  color: #5fcf80;
  margin-bottom: 30px;
  background: #ecf9f0;
  border-radius: 50px;
}
.why-us .icon-boxes .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 30px 0;
}
.why-us .icon-boxes .icon-box p {
  font-size: 15px;
  color: #848484;
}

</style>