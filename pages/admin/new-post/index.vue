<template>
  <div>
    <AdminPostForm :post="post" />
  </div>
</template>

<script>
import data from '~/api/data.json'

export default {
  data() {
    return {
      post: data[0]
    }
  },
}
</script>

<style scoped></style>
