<template>
  <div class="form-wrap">
    <form action="" class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create your account to Fit4</h2>
      <div id="" class="inputS">
        <div class="inputL">
          <input type="text" placeholder="Enter First Name" v-model="firstName" />
          <img :src="UserIcon" class="icon" />
        </div>
        <div class="inputL">
          <input type="text" placeholder="Enter Last Name" v-model="lastName" />
          <img :src="UserIcon" class="icon" />
        </div>
        <div class="inputL">
          <input type="text" placeholder="Enter Username" v-model="username" />
          <img :src="UserIcon" class="icon" />
        </div>
        <div class="inputL">
          <input type="text" placeholder="Enter email" v-model="email" />
          <img :src="EmailIcon" class="icon" />
        </div>
        <div class="inputL">
          <input type="password" placeholder="Enter password" v-model="password" />
          <img :src="LockIcon" class="icon" />
        </div>
      </div>
      <button>Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import EmailIcon from '../assets/icons/envelope.svg'
import LockIcon from '../assets/icons/lock.svg'
import UserIcon from '../assets/icons/user.svg'
export default {
  name: 'Register',
  components: {},
  data() {
    return {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
      EmailIcon,
      LockIcon,
      UserIcon,
    }
  },
}
</script>

<style lang="scss">
.register {
  h2 {
    max-width: 350px;
  }
}
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }
  .login-register {
    margin-bottom: 32px;
    .router-link {
      color: #000;
    }
  }
  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }
    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }
    .inputS {
      width: 100%;
      max-width: 350px;
      .inputL {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #ecf1f1;
          padding: 4px 4px 4px 30px;
          height: 50px;
          &:focus {
            outline: none;
          }
        }
        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }
    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;
      &:hover {
        border-color: #303030;
      }
    }
    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url('../assets/background.jpeg');
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
