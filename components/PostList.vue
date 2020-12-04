<template>
  <div class="container is-max-desktop columns">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="column is-one-third"
    >
      <Post
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :img="post.image"
        :is-admin="isAdmin"
      />
    </div> 
  </div>
</template>

<script>
// import Post from '~/components/Post'
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>


