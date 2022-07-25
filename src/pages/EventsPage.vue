<template>
  <main id="main">
    <BreadCrumbsEventsRow />
    <EventsRow />

  </main>


</template>

<script>
import BreadCrumbsEventsRow from "@/components/BreadCrumbsEventsRow";
import EventsRow from "@/components/EventsRow";
export default {
  name: "EventsPage",
  components: {EventsRow, BreadCrumbsEventsRow},
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