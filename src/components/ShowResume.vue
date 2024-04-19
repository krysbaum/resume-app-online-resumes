<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useScriptTag } from "@vueuse/core";

useScriptTag("https://platform.twitter.com/widgets.js");

// Define a reactive reference for the student data
const student = ref({});

// Define the function to fetch student data
function handleShowResume() {
  axios.get("http://localhost:3000/students/3.json").then((response) => {
    console.log("students show", response);
    student.value = response.data; // Update the reactive reference
  });
}

// Call the function when the component is mounted
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
      <a class="twitter-timeline" href="https://twitter.com/concernedape?ref_src=twsrc%5Etfw"></a>
    </div>
  </div>
</template>

<style></style>
