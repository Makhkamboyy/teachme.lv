<template>
  <main id="main">
    <BreadCrumbsLoginRow />
    <LogInRow />


  </main>

</template>

<script>
import BreadCrumbsLoginRow from "@/components/BreadCrumbsLoginRow";
import LogInRow from "@/components/LogInRow";
export default {
  name: "LoginPage",
  components: {LogInRow, BreadCrumbsLoginRow}
}
</script>

<style scoped>

</style>