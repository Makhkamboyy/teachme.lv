<template>

  <main id="main">
    <BreadCrumbsTrainerRow/>
    <TrainersRow />
  </main>

</template>

<script>
import BreadCrumbsTrainerRow from "@/components/BreadCrumbsTrainerRow";
import TrainersRow from "@/components/TrainersRow";
export default {
  name: "TrainersPage",
  components: {TrainersRow, BreadCrumbsTrainerRow},
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