<template>
  <section class="section card">
    <div
      class="container card-content blog-post"
      :style="{
        backgroundImage: `url(${post.url})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <h1 class="blog-post-title title">
        {{ post.title }}
      </h1>
      <button class="button">
        <router-link to="#">Click Here</router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'blog',
  components: {},
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.blog-post-title {
  color: azure;
  border: 1px solid #000;
  background-color: #000000;
}
.blog-post {
  height: 50vh;
}
</style>
