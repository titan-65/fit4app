<template>
  <header>
    <nav id="nav" class="navbar">
      <div class="navbar-brand">
        <router-link :to="{ name: 'Home' }"> Fit4App </router-link>
        <div>
          <img
            :src="menuIcon"
            @click="toggleNavMobile"
            v-show="mobile"
            class="menu-icon"
          />
        </div>
      </div>
      <transition name="nav-mobile">
        <div class="nav-mobile" v-show="mobileNav">
          <router-link class="navbar-item" :to="{ name: 'Home' }">Home</router-link>
          <p class="navbar-item">|</p>
          <router-link class="navbar-item" :to="{ name: 'About' }">About</router-link>
          <p class="navbar-item">|</p>
          <router-link class="navbar-item" :to="{ name: 'HowTo' }">How To</router-link>
          <p class="navbar-item">|</p>
          <router-link class="navbar-item" :to="{ name: 'Login' }"
            >Login/Register</router-link
          >
        </div>
      </transition>
      <div class="navbar-end" v-show="!mobile">
        <router-link class="navbar-item" :to="{ name: 'Home' }">Home</router-link>
        <p class="navbar-item">|</p>
        <router-link class="navbar-item" :to="{ name: 'About' }">About</router-link>
        <p class="navbar-item">|</p>
        <router-link class="navbar-item" :to="{ name: 'HowTo' }">How To</router-link>
        <p class="navbar-item">|</p>
        <router-link class="navbar-item" :to="{ name: 'Login' }"
          >Login/Register</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
import menuIcon from '../assets/icons/burger-cheese.svg'
export default {
  name: 'navbar',
  components: {},
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      active: '',
      menuIcon: menuIcon,
    }
  },
  created() {
    window.addEventListener('resize', this.screenSizeCheck)
    this.screenSizeCheck()
  },
  methods: {
    screenSizeCheck() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 1025) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    },
    toggleNavMobile() {
      this.mobileNav = !this.mobileNav
    },
  },
}
</script>

<style scoped>
.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 1.5625rem;
  height: 1.5625rem;
  width: auto;
}

.nav-mobile {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
}

.nav-mobile-enter-active,
.nav-mobile-leave-active {
  transition: all 2s ease;
}

.nav-mobile-enter {
  transform: translateX(-250px);
}

.nav-mobile-enter-to {
  transform: translateX(0);
}

.nav-mobile-leave-to {
  transform: translateX(-250px);
}
</style>
