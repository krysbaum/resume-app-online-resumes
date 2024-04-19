<script setup>
import { useScriptTag } from "@vueuse/core";

useScriptTag("https://platform.twitter.com/widgets.js");

const props = defineProps({
  students: Object,
});

// export default {
//   props: {
//     students: Object,
//   },
// };
</script>

<template>
  <div>
    <!-- <h1>{{ student.twitter_handle }}</h1> -->
    <a class="twitter-timeline" href="https://twitter.com/concernedape?ref_src=twsrc%5Etfw"></a>
  </div>
</template>

<style></style>
