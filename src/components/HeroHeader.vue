<template>
  <div class="hero is-medium is-link">
    <div class="hero-body">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
}
</script>

<style></style>
