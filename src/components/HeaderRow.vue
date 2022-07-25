<template>
  <!-- ======= Header ======= -->

  <!--  <nav class="container-fluid navbar navbar-expand-lg navbar-red navbar-dark">-->
  <!--    <div class="wrapper">-->

  <!--    </div>-->
  <!--    <div class="container all-show">-->
  <!--      <router-link class="navbar-brand" to="/">TeachMe</router-link>-->
  <!--      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"-->
  <!--              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
  <!--        <span class="navbar-toggler-icon"></span>-->
  <!--      </button>-->
  <!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
  <!--        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">-->
  <!--          <li class="nav-item">-->
  <!--            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <router-link class="nav-link" to="/about">About</router-link>-->
  <!--          </li>-->

  <!--          <li class="nav-item">-->
  <!--            <router-link class="nav-link" to="/course">Courses</router-link>-->
  <!--          </li>-->

  <!--          <li class="nav-item">-->
  <!--            <router-link class="nav-link" to="/trainers">Trainers</router-link>-->
  <!--          </li>-->

  <!--          <li class="nav-item">-->
  <!--            <router-link class="nav-link" to="/events">Events</router-link>-->
  <!--          </li>-->

  <!--          <li class="nav-item">-->
  <!--            <router-link class="nav-link" to="/pricing">Pricing</router-link>-->
  <!--          </li>-->

  <!--          <li class="nav-item">-->
  <!--            <router-link class="nav-link" to="/contact">Contact</router-link>-->
  <!--          </li>-->

  <!--        </ul>-->
  <!--        <div class="d-flex ms-auto flex-column sim">-->

  <!--          <a href="#" class="btn-started">Get Started</a>-->

  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </nav>-->


  <nav class="container-fluid navbar navbar-expand-lg navbar-red navbar-dark">
    <div class="wrapper">

    </div>
    <div class="container all-show">
      <router-link class="navbar-brand" to="/">TeachMe</router-link>
      <button class="navbar-toggler" @click="openNav" type="button" data-toggle="collapse"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>

      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <router-link to="/home">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/course">Courses</router-link>
          <router-link to="/trainers">Trainers</router-link>
          <router-link to="/events">Events</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/course">Get Started</router-link>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/course">Courses</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/trainers">Trainers</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/events">Events</router-link>
          </li>

<!--          <li class="nav-item">-->
<!--            <router-link class="nav-link" to="/pricing">Pricing</router-link>-->
<!--          </li>-->

          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>

        </ul>
        <div class="d-flex ms-auto flex-column sim">

          <router-link
              v-if="!isAuthorized"
              to="/login"
              class="btn-started"
          >
            Sign in
          </router-link>

          <button
              v-else
              class="btn-started"
              @click="this.delete"
          >
            Log out
          </button>


        </div>
      </div>
    </div>
  </nav>


  <!-- End Header -->

</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "HeaderRow",
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
    delete() {
      localStorage.clear()
      alert("You are going to logout !")
      this.$router.go()
    }
  },
  computed: {
    ...mapGetters(['isAuthorized'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Charis+SIL:wght@700&family=Monoton&display=swap');
.navbar {
  padding: 20px 0px;
  width: 100%;
  position: fixed;
  top: 0%;
  z-index: 1000;
}

.navbar .navbar-toggler {
  background-color: #5fcf80;

}


.navbar-nav > li > a {
  text-transform: uppercase;
  font-size: 15px;
  margin-right: 20px;
  color: #fff;
  font-family: "Poppins", sans-serif;

}


.navbar-toggler {
  padding: 0.2rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid white;
}

.nav-link {
  color: black !important;
  transition: 0.3s;

}

.nav-link:hover {
  color: #5fcf80 !important;
}

.wrapper {
  width: 100%;
  position: absolute;
  height: 100%;
  background-color: #5fcf80;
  clip-path: polygon(81% 0, 100% 0, 100% 50%, 100% 100%, 71% 100%);
  transition: 1s all;
}

.navbar-brand {
  color: #5fcf80;
  /* font-family: "Allerta Stencil", sans-serif;
  margin-bottom: 4px;
  font-size: 27px; */

  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Charis SIL', serif;
  font-family: 'Monoton', cursive;
}


.navbar-red:hover .wrapper {
  clip-path: polygon(81% 0, 100% 0, 100% 50%, 100% 100%, 65% 100%);
}

.navbar-brand:hover {
  color: #5fcf80;
}

.navbar-red {
  background-color: white;
  color: black;
}

.all-show {
  z-index: 10;
}

.btn-started {
  border: none;
  padding: 5px 20px;
  display: block;
  border-radius: 25px;
  text-decoration: none;
  background-color: white;
  color: black;
  text-align: center;
  transition: 0.3s;
}

.btn-started:hover {
  background-color: #e2e0e0;
  color: black;
}


nav .overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 20%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px
  }

  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}


</style>