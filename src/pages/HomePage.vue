<template>
  <div>
    <HeroRow />
    <main id="main">
      <AboutRow />
      <CountRow />
      <WhyUsRow />
      <FeatureRow />
      <PopularCourseRow />
      <TrainersRow />
    </main>
  </div>

</template>

<script>
import HeroRow from "@/components/HeroRow";
import AboutRow from "@/components/AboutRow";
import CountRow from "@/components/CountRow";
import WhyUsRow from "@/components/WhyUsRow";
import FeatureRow from "@/components/FeatureRow";
import PopularCourseRow from "@/components/PopularCourseRow";
import TrainersRow from "@/components/TrainersRow";
export default {
  name: "HomePage",
  components: {TrainersRow, PopularCourseRow, FeatureRow, WhyUsRow, CountRow, AboutRow, HeroRow},
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