<script>
export default {
  props: {
    students: Object,
  },
};
</script>

<template>
  <div>
    <div>
      <h1>{{ student.first_name }} {{ student.last_name }}</h1>
      <h2>
        <img v-bind:src="student.photo" alt="" />
        <br />
      </h2>
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
    </div>
  </div>
</template>

<style></style>
