<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <h1 class="title">Featured Girls</h1>
      </div>
      <br />
      <div class="columns">
        <GirlPostListItem :girl="girl" v-for="(girl, index) in girls" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import GirlPostListItem from './GirlPostListItem.vue'
export default {
  name: 'girl-list',
  props: {
    girls: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  components: {
    GirlPostListItem,
  },
}
</script>

<style></style>
