<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <HeaderComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "HomeComponent",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
</style>
