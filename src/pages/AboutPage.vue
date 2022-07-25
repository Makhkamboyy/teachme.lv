<template>
  <main id="main">
    <BreadCrumbsRow />
    <AboutRow />
    <CountRow />
    <TestimonialRow />


  </main>

</template>

<script>
import BreadCrumbsRow from "@/components/BreadCrumbsRow";
import AboutRow from "@/components/AboutRow";
import CountRow from "@/components/CountRow";
import TestimonialRow from "@/components/TestimonialRow";
export default {
  name: "AboutPage",
  components: {TestimonialRow, CountRow, AboutRow, BreadCrumbsRow},
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