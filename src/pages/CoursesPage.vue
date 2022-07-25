<template>
  <main id="main">
    <BreadCrumbsCourseRow />
    <PopularCourseRow />
    <FeatureRow />
  </main>

</template>

<script>
import BreadCrumbsCourseRow from "@/components/BreadCrumbsCourseRow";
import PopularCourseRow from "@/components/PopularCourseRow";
import FeatureRow from "@/components/FeatureRow";
export default {
  name: "CoursesPage",
  components: {FeatureRow, PopularCourseRow, BreadCrumbsCourseRow},
  mounted() {
    this.closeNav();

  },
  methods: {
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }
  }
}
</script>

<style scoped>

</style>