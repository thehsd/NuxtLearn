<template>
  <div>
    <section class="column is-three-fifths is-offset-one-fifth new-post-page">
      <form  @submit.prevent="onSave">
        <label for="">Author</label>
        <input
          class="input mb-10p mt-10p"
          type="text"
          placeholder="Text input"
          v-model="editedPost.author"
        />
        <label for="">Title</label>
        <input
          class="input mb-10p mt-10p"
          type="text"
          placeholder="Text input"
          v-model="editedPost.title"
        />
        <label for="">Image</label>
        <input
          class="input mb-10p mt-10p"
          type="text"
          placeholder="Text input"
          v-model="editedPost.thumbnail"
        />
        <label for="">Body</label>
        <textarea
          class="textarea"
          type="text"
          placeholder="Text input"
          v-model="editedPost.body"
        ></textarea>
        <br />
        <button type="submit" class="button is-success">save</button>
        <button type="button" class="button is-danger" @click="onCancel">
          cancel
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedPost: this.posts
        ? { ...this.posts }
        : {
            auther: '',
            title: '',
            body: '',
            image: '',
          },
    }
  },
  methods: {
    onSave() {
      console.log('saving ...')
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>

<style scoped></style>
