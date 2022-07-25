<template>
  <main id="main">
    <BreadCrumbsCourseDetails />
    <FavoriteDetailsCol />
    <CourseDetailsTab />

  </main>




</template>

<script>
import BreadCrumbsCourseDetails from "@/components/BreadCrumbsCourseDetails";
import CourseDetailsTab from "@/components/CourseDetailsTab";
import FavoriteDetailsCol from "@/components/FavoriteDetailsCol";
export default {
  name: "FavoriteDetailsPage",
  components: {FavoriteDetailsCol, CourseDetailsTab, BreadCrumbsCourseDetails}
}
</script>

<style scoped>

</style>