<template>
  <section class="container">
    <PostList :posts="loadedPosts" />
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loadedPosts', 'poosts']),
  },
}
</script>
<style lang="scss">
.container {
  margin-top: 10px !important;
  margin-left: 10px !important;
}
</style>
