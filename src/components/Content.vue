<!--
  todo
1. get backend 
2. finish index convert to show 
 -->

<script>
import axios from "axios";
import ShowResume from "./ShowResume.vue";
import IndexResume from "./IndexResume.vue";

export default {
  components: {
    IndexResume,
    ShowResume,
  },
  data: function () {
    return {
      students: [],
    };
  },
  created: function () {
    this.handleIndexResume();
  },
  methods: {
    handleIndexResume: function (id) {
      axios.get(`http://localhost:3000/students/${id}.json`).then((response) => {
        console.log("students index", response);
        this.students = response.data;
      });
    },
  },
};
</script>

<template>
  <main>
    <h1>Welcome to Vue!</h1>
    <IndexResume />

    <!-- <ShowResume /> -->
  </main>
</template>

<style></style>
