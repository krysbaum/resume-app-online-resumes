<script>
export default {
  props: {
    students: Array,
  },
};
</script>

<template>
  <div Class="All-Students">
    <h1>All Students</h1>
    <div v-for="student in students" v-bind:key="student.id">
      <a v-bind:href="'/students/' + student.id">
        <h2>{{ student.first_name }} {{ student.last_name }}</h2>
      </a>
    </div>
  </div>
</template>

<style></style>
