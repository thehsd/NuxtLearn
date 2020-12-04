<template>
  <div class="ml-20p">
    <section>
      <h2 v-if="isAdmin" class="title is-4 mt-20p">create posts</h2>
      <Nuxt-Link to="/admin/new-post"
        ><button class="button is-primary mb-10p mt-10p">
          create Post
        </button></Nuxt-Link
      >
    </section>
    <section>
      <PostList :is-admin="true" :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from '~/components/PostList'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isAdmin: true,
    }
  },
  components: {
    PostList,
  },
  computed: {
    ...mapGetters(['loadedPosts']),
  },
}
</script>

<style scoped></style>
