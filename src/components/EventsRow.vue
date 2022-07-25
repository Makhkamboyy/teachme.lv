<template>
  <!-- ======= Events Section ======= -->
  <section id="events" class="events">
    <div class="container" data-aos="fade-up">

      <div class="row">
        <div class="col-md-6 d-flex align-items-stretch">
          <div class="card">
            <div class="card-img">
              <img src="../assets/img/events-1.jpg" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title"><a href="">Introduction to webdesign</a></h5>
              <p class="fst-italic text-center">Sunday, September 26th at 7:00 pm</p>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-stretch">
          <div class="card">
            <div class="card-img">
              <img src="../assets/img/events-2.jpg" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title"><a href="">Marketing Strategies</a></h5>
              <p class="fst-italic text-center">Sunday, November 15th at 7:00 pm</p>
              <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section><!-- End Events Section -->

</template>

<script>
export default {
  name: "EventsRow"
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Events
--------------------------------------------------------------*/
.events .card {
  border: 0;
  padding: 0 30px;
  margin-bottom: 60px;
  position: relative;
}
.events .card-img {
  width: calc(100% + 60px);
  margin-left: -30px;
  overflow: hidden;
  z-index: 9;
  border-radius: 0;
}
.events .card-img img {
  max-width: 100%;
  transition: all 0.3s ease-in-out;
}
.events .card-body {
  z-index: 10;
  background: #fff;
  border-top: 4px solid #fff;
  padding: 30px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  margin-top: -60px;
  transition: 0.3s;
}
.events .card-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}
.events .card-title a {
  color: #37423b;
  transition: 0.3s;
}
.events .card-text {
  color: #5e5e5e;
}
.events .read-more a {
  color: #777777;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  transition: 0.3s;
}
.events .read-more a:hover {
  color: #5fcf80;
}
.events .card:hover img {
  transform: scale(1.1);
}
.events .card:hover .card-body {
  border-color: #5fcf80;
}
.events .card:hover .card-body .card-title a {
  color: #5fcf80;
}

</style>