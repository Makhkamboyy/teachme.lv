<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>teachMe</h3>
            <p>
              71 Aleksandra Caka <br>
              Riga<br>
              Latvia <br><br>
              <strong>Phone:</strong> +37127306844<br>
              <strong>Email:</strong> teachme@gmail.com<br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="fa-solid fa-angle-right"></i> <router-link class="nav-link active" aria-current="page" to="/">Home</router-link></li>
              <li><i class="fa-solid fa-angle-right"></i> <router-link class="nav-link" to="/about">About</router-link></li>
              <li><i class="fa-solid fa-angle-right"></i> <router-link class="nav-link" to="/course">Courses</router-link></li>
              <li><i class="fa-solid fa-angle-right"></i> <router-link class="nav-link" to="/trainers">Trainers</router-link></li>
              <li><i class="fa-solid fa-angle-right"></i> <router-link class="nav-link" to="/events">Events</router-link></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our courses</h4>
            <ul>
              <li><i class="fa-solid fa-angle-right"></i> <router-link to="/course/1">Web Design</router-link></li>
              <li><i class="fa-solid fa-angle-right"></i> <router-link to="/course/2">Full stack engineering</router-link></li>
              <li><i class="fa-solid fa-angle-right"></i> <router-link to="/course/3">Vue/React</router-link></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>teachMe</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ -->
          Designed by <a href="#">Dadajonov</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="fa-brands fa-telegram"></i></a>
        <a href="#" class="facebook"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="#" class="instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="google-plus"><i class="fa-brands fa-facebook-f"></i></a>
      </div>
    </div>
  </footer><!-- End Footer -->

</template>

<script>
export default {
  name: "FooterRow"
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  color: #37423b;
  font-size: 14px;
  background: #eef0ef;
}
#footer .footer-top {
  padding: 60px 0 30px 0;
  background: #f9faf9;
}
#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}
#footer .footer-top .footer-contact h4 {
  font-size: 22px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
}
#footer .footer-top .footer-contact p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  color: #777777;
}
#footer .footer-top h4 {
  font-size: 16px;
  font-weight: bold;
  color: #444444;
  position: relative;
  padding-bottom: 12px;
}
#footer .footer-top .footer-links {
  margin-bottom: 30px;
}
#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #5fcf80;
  font-size: 15px;
  line-height: 1;
  margin-right: 5px;
}
#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}
#footer .footer-top .footer-links ul a {
  color: #777777;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}
#footer .footer-top .footer-links ul a:hover {
  text-decoration: none;
  color: #5fcf80;
}
#footer .footer-newsletter {
  font-size: 15px;
}
#footer .footer-newsletter h4 {
  font-size: 16px;
  font-weight: bold;
  color: #444444;
  position: relative;
  padding-bottom: 12px;
}
#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  text-align: left;
  border: 1px solid #e0e5e2;
}
#footer .footer-newsletter form input[type=email] {
  border: 0;
  padding: 4px 8px;
  width: calc(100% - 100px);
}
#footer .footer-newsletter form input[type=submit] {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px 2px 20px;
  background: #5fcf80;
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
#footer .footer-newsletter form input[type=submit]:hover {
  background: #3ac162;
}
#footer .credits {
  padding-top: 5px;
  font-size: 13px;
}
#footer .credits a {
  color: #3ac162;
  transition: 0.3s;
}
#footer .credits a:hover {
  color: #5fcf80;
}
#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #5fcf80;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
#footer .social-links a:hover {
  background: #3ac162;
  color: #fff;
  text-decoration: none;
}

</style>