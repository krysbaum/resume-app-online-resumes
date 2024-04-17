<script>
export default {
  props: {
    student: Object,
  },
};
</script>

<template>
  <div>
    <h1>Resume information</h1>

    <p>Photo: {{ student.photo }}</p>
    <h2>Name: {{ (student.first_name, student.last_name) }}</h2>

    <p>Email: {{ student.email }}</p>
    <p>Phone: {{ student.phone_number }}</p>
    <p>Website: {{ student.website_url }}</p>
    <p>Linkedin: {{ student.linkedin_url }}</p>
    <p>Twitter: {{ student.twitter_handle }}</p>
    <p>Github: {{ student.github_url }}</p>

    <p>Bio: {{ student.short_bio }}</p>

    <p>Resume: {{ student.resume_url }}</p>
  </div>
</template>

<style></style>
