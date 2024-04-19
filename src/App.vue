<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header />
    <strong>
      <strong>Current route path:</strong>
      {{ $route.fullPath }}
    </strong>
    <RouterView />
    <Footer />
  </div>
</template>

<style></style>
