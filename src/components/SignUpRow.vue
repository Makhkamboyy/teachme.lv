<template>

  <div class="container sign-up-form">
    <form class="col-6" @submit.prevent="createUser">
      <div
          v-if="errorForForm"
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
      >
        <i class="fa-solid fa-triangle-exclamation" style="margin-right: 5px"></i>
        <strong>Error !</strong> Something went wrong try again !
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="mb-3">
            <label for="fname" class="form-label">Name:</label>
            <input type="text" class="form-control" id="fname" v-model="form.name">
          </div>
        </div>
        <div class="col-md">
          <div class="mb-3">
            <label for="sname" class="form-label">Lastname:</label>
            <input type="text" class="form-control" id="sname" v-model="form.sname">
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
      </div>
      <button type="submit" class="btn-submit">Sign up</button>
      <div class="warn-form">
        <p>Already have an account? <router-link to="/login">Login here</router-link> </p>
      </div>
    </form>
  </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SignUpRow",
  methods: {
    ...mapActions(['pushUser', 'fetchToken']),
    createUser() {
      this
          .pushUser(this.form)
          .then(() => {
              this
                  .fetchToken({
                    email: this.form.email,
                    password: this.form.password
                  })
                  .then(() => {
                    this.$router.push('/')
                  })
          })
          .catch(() => {
                this.errorForForm = true
          })
    }
  },
  data() {
    return {
      errorForForm: false,
      form: {
        name: "",
        sname: "",
        email: "",
        password: ""
      }
    }
  }
}
</script>

<style scoped>
.sign-up-form {
  margin-top: 65px;
  margin-bottom: 65px;
}

form {
  margin: auto;
  width: 50%;
  padding: 10px;
  transition: 0.3s;

}

form label {
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

form .btn-submit {
  width: 100%;
  padding: 13px;
  background-color: #5fcf80;
  color: white;
  border: none;
  border-radius: 25px;
  transition: 0.3s;
  font-size: 20px;
  font-weight: 600;
}

form .btn-submit:hover {
  background-color: #3ac162;
  color: white;
}

form input {
  height: 55px;
  font-size: 20px;
}

form .warn-form{
  text-align: center;
  padding-top: 20px;
}


/*
1. @media (min-width: 0) and (max-width: 575.9px)
2. @media (min-width: 576px) and (max-width: 767.9px)
3. @media (min-width: 768px) and (max-width: 991.9px)
4. @media (min-width: 992px) and (max-width: 1199.9px)
5. @media (min-width: 1200px) and (max-width: 1399.9px)




*/

@media (min-width: 0) and (max-width: 575.9px) {
  form {
    margin: 0px;
    width: 100%;
    padding: 10px;
    transition: 0.3s;

  }

  form input {
    height: 35px;
    font-size: 15px;
  }

  form .btn-submit {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
  }
}

@media (min-width: 576px) and (max-width: 767.9px) {
  form {
    margin: 0px;
    width: 100%;
    padding: 10px;
    transition: 0.3s;

  }

  form input {
    height: 40px;
    font-size: 18px;
  }

  form .btn-submit {
    width: 100%;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
  }
  form label {
    font-weight: 600;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
  }
}

@media (min-width: 768px) and (max-width: 991.9px){
  form {
    margin: auto;
    width: 80%;
    padding: 10px;
    transition: 0.3s;
  }
}

</style>