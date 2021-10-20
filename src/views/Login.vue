<template>
  <div class="form-wrap">
    <form action="" class="login">
      <p class="login-register">
        Dont have an account?
        <router-link class="" :to="{ name: 'Register' }">Register</router-link>
      </p>
      <h2>Login to Fit4</h2>
      <div id="" class="inputS">
        <div class="inputL">
          <input type="text" placeholder="Enter email" v-model="email" />
          <img :src="EmailIcon" class="icon" />
        </div>
        <div class="inputL">
          <input type="password" placeholder="Enter password" v-model="password" />
          <img :src="LockIcon" class="icon" />
        </div>
      </div>
      <router-link class="" :to="{ name: 'ForgetPassword' }">Forget Password</router-link>
      <button>Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import EmailIcon from '../assets/icons/envelope.svg'
import LockIcon from '../assets/icons/lock.svg'
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      email: null,
      password: null,
      EmailIcon,
      LockIcon,
    }
  },
}
</script>

<style lang="scss">
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
    background-image: url('https://images.unsplash.com/photo-1589979812000-4eab44f02c30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2043&q=200');
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
