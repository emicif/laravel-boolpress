<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";

export default {
  name: "AppComponent",
  components: {
    HeaderComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
