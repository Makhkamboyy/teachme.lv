<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">

      <div class="row">
        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
          <img src="../assets/img/program2.jpeg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>Get all the benefits
            of a face-to-face
            tutor, and more...  </h3>
          <p class="fst-italic">
            A journey of a thousand miles begins with a single step
          </p>
          <ul>
            <li><i class="fa-solid fa-circle-check"></i>Greater selection of tutors
              from around the country.</li>
            <li><i class="fa-solid fa-circle-check"></i>Freedom and flexibility for
              both you and your tutor.</li>
            <li><i class="fa-solid fa-circle-check"></i>Lower prices for all</li>
          </ul>

        </div>
      </div>

    </div>
  </section><!-- End About Section -->

</template>

<script>
export default {
  name: "AboutRow"
}
</script>

<style scoped>




/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}
.about .content ul {
  list-style: none;
  padding: 0;
}
.about .content ul li {
  padding-bottom: 10px;
}
.about .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #5fcf80;
}
.about .content .learn-more-btn {
  background: #5fcf80;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px 9px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}
.about .content .learn-more-btn:hover {
  background: #3ac162;
  color: #fff;
}
@media (max-width: 768px) {
  .about .content .learn-more-btn {
    margin: 0 48px 0 0;
    padding: 6px 18px;
  }
}

</style>