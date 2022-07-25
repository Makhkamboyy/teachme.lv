<template>
  <main id="main">
    <BreadCrumbsCourseDetails />
    <CourseDetailsCol />
    <CourseDetailsTab />

  </main>




</template>

<script>
import BreadCrumbsCourseDetails from "@/components/BreadCrumbsCourseDetails";
import CourseDetailsCol from "@/components/CourseDetailsCol";
import CourseDetailsTab from "@/components/CourseDetailsTab";
export default {
  name: "CourseDetailsPage",
  components: {CourseDetailsTab, CourseDetailsCol, BreadCrumbsCourseDetails}
}
</script>

<style scoped>

</style>