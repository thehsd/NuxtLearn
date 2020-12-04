<template>
  <div>
    <div class="column">
      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="/images/img1.jpg" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                {{ loadedPost.title }}
              </strong>
              <br />
              <br />
              {{ loadedPost.body }}
            </p>
          </div>
        </div>
      </article>
    </div>

    <!-- <h1 class="title is-1">this is {{$route.params.id}}</h1> -->
  </div>
</template>

<script>
import data from '~/api/data.json'

export default {
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: data[0],
        })
      }, 500)
    })
      .then((data) => {
        return data
      })
      .catch((e) => {
        context.error(e)
      })
  },
}
</script>

<style scoped></style>
