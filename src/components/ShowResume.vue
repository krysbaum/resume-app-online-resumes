<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useScriptTag } from "@vueuse/core";
import { useRoute } from "vue-router";

useScriptTag("https://platform.twitter.com/widgets.js");
const student = ref({});
const route = useRoute();

function handleShowResume() {
  axios.get(`http://localhost:3000/students/${route.params.id}.json`).then((response) => {
    console.log("students show", response);
    student.value = response.data;
  });
}

onMounted(() => {
  handleShowResume();
});
</script>

<template>
  <div>
    <div>
      <h1>
        <img height="100" v-bind:src="student.photo" alt="" />
        {{ student.first_name }} {{ student.last_name }}
      </h1>
      <h3>Information</h3>
      <p>
        <i>
          {{ student.phone_number }} ● {{ student.email }} ● {{ student.linkedin_url }} ● {{ student.github_url }} ●
          {{ student.website_url }}
        </i>
      </p>
      <h3>Summary</h3>
      <p>
        {{ student.short_bio }}
      </p>
      <p>
        <b>Twitter Handle:</b>
        {{ student.twitter_handle }}
      </p>
      <a
        class="twitter-timeline"
        v-bind:href="'https://twitter.com/' + student.twitter_handle + '?ref_src=twsrc%5Etfw'"
      ></a>
    </div>
  </div>
</template>

<style></style>
