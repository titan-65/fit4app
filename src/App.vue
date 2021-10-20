<template>
  <div class="container">
    <Navbar v-if="!navigationCheck" />
    <router-view />
    <Footer v-if="!navigationCheck" />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      navigationCheck: null,
    }
  },
  methods: {
    checkRouteLocation() {
      if (
        this.$route.name === 'Login' ||
        this.$route.name === 'Register' ||
        this.$route.name === 'ForgetPassword'
      ) {
        this.navigationCheck = true
        return
      }
      this.navigationCheck = false
    },
  },
  created() {
    this.checkRouteLocation()
  },
  watch: {
    $route() {
      this.checkRouteLocation()
    },
  },
}
</script>
<style lang="scss">
.black {
  background-color: #000000;
  color: #ffffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
