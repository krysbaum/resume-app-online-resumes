<script>
export default {
  props: {
    students: Array,
  },
};
</script>

<template>
  <div>
    <h1>All Students</h1>
    <div v-for="student in students" v-bind:key="student.id">
      <h2>{{ student.first_name }}</h2>
    </div>
  </div>
</template>

<style></style>
