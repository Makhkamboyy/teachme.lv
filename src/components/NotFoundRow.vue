<template>
  <div class="con-notfound container">
    <div class="card mb-4">
      <div class="row g-0">
        <div class="col-sm-4 col-md-4">
          <img src="../assets/img/404.png" class="img-fluid rounded-start" alt="404">
        </div>
        <div class="col-sm-8 col-md-8">
          <div class="card-body">
            <h5 class="card-title">SORRY</h5>
            <p class="card-text">Article not found</p>
            <p class="card-text">Please try one of the following pages: <router-link to="/">Home</router-link> </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NotFoundRow"
}
</script>

<style scoped>
.con-notfound {
  width: 100%;
  display: block;
  margin-top: 135px;

}

.con-notfound .card {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  border: none;
}


.con-notfound .card .card-body {
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 10%;
}





/*
1. @media (min-width: 0) and (max-width: 575.9px)
2. @media (min-width: 576px) and (max-width: 767.9px)
3. @media (min-width: 768px) and (max-width: 991.9px)
4. @media (min-width: 992px) and (max-width: 1199.9px)
5. @media (min-width: 1200px) and (max-width: 1399.9px)




*/
@media (min-width: 0) and (max-width: 575.9px) {
  .con-notfound .card img {
    max-width: 300px;
    max-height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto
  }

}





</style>