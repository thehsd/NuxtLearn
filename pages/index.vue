<template>
  <section class="container">
    <PostList :posts="loadedPosts" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loadedPosts']),
  },
  
  middleware: ['log'],
}
</script>

<style scoped>
.container {
  margin-top: 10px !important;
  margin-left: 10px !important;
}
</style>
