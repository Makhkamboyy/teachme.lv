<template>
  <main id="main">
    <BreadCrumbsRegisterRow />
    <SignUpRow />


  </main>




</template>

<script>
import BreadCrumbsRegisterRow from "@/components/BreadCrumbsRegisterRow";
import SignUpRow from "@/components/SignUpRow";
export default {
  name: "RegisterPage",
  components: {SignUpRow, BreadCrumbsRegisterRow}
}
</script>

<style scoped>

</style>