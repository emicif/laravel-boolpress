<template>
  <div>
    {{ post.title }}
    <img :src="'storage/' + post.cover" :alt="post.title" />
  </div>
</template>

<script>
export default {
  name: "PostCardComponent",
  props: ["post"],
};
</script>

<style>
</style>
