<template>
  <main id="main">
    <BreadCrumbsContactRow />
    <ContactRow />
  </main>

</template>

<script>
import BreadCrumbsContactRow from "@/components/BreadCrumbsContactRow";
import ContactRow from "@/components/ContactRow";
export default {
  name: "ContactPage",
  components: {ContactRow, BreadCrumbsContactRow},
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