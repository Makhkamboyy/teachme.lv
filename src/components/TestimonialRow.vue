<template>
  <!-- ======= Testimonials Section ======= -->
  <section id="testimonials" class="testimonials">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Testimonials</h2>
        <p>What are they saying</p>
      </div>

      <!--      Start-->

      <div class="container mt-5 mb-5" data-aos="fade-up">

        <div class="row g-2">
          <div class="col-md-4">
            <div class="card p-3 text-center px-4">

              <div class="user-image">

                <img src="https://i.imgur.com/PKHvlRS.jpg" class="rounded-circle" width="80"
                >

              </div>

              <div class="user-content">

                <h5 class="mb-0">Bruce Hardy</h5>
                <span>Software Developer</span>
                <p>“This arrangement is working out well. Our daughter was anxious about starting tuition but is now
                  looking forward to the lessons each week. Mrs LG is a very good teacher, full of energy and
                  enthusiasm, which is excellent for Hannah.”</p>

              </div>

              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>
          </div>

          <div class="col-md-4">

            <div class="card p-3 text-center px-4">

              <div class="user-image">

                <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="80"
                >

              </div>

              <div class="user-content">

                <h5 class="mb-0">Mark Smith</h5>
                <span>Web Developer</span>
                <p>“I just wanted to send a quick message to give feedback following our meeting with JH. We had a
                  really positive meeting, JH quickly made my son feel comfortable and easily engaged him in some short
                  activities to gauge his level of understanding. A good start!”</p>

              </div>

              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>

          </div>

          <div class="col-md-4">

            <div class="card p-3 text-center px-4">

              <div class="user-image">

                <img src="https://i.imgur.com/ACeArwY.jpg" class="rounded-circle" width="80"
                >

              </div>

              <div class="user-content">

                <h5 class="mb-0">Veera Duncan</h5>
                <span>Software Architect</span>
                <p>“After a few weeks, our son is beginning to settle better and we can see some improvement in his concentration. The tutor is good.”</p>

              </div>

              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

              </div>

            </div>

          </div>


        </div>

      </div>


      <!--      End-->


    </div>
  </section><!-- End Testimonials Section -->

</template>

<script>
export default {
  name: "TestimonialRow"
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
.card {

  border: none;
}

.user-content p {
  margin-top: 5px;
  font-size: 12px;
}


.ratings i {
  color: blue;
}
</style>