<template>
  <main id="main">
    <BreadCrumbsPricingRow />
    <PricingRow />

  </main>


</template>

<script>
import BreadCrumbsPricingRow from "@/components/BreadCrumbsPricingRow";
import PricingRow from "@/components/PricingRow";
export default {
  name: "PricingPage",
  components: {PricingRow, BreadCrumbsPricingRow},
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