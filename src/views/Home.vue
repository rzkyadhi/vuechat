<template>
  <div class="">
    <div v-if="showLogin">
      <Login />
      <p>
        Dont have an account ?
        <a href="#" @click="showLogin = false">Register</a>
      </p>
    </div>
    <div v-else>
      <Register />
      <p>
        Already have an account ?
        <a href="#" @click="showLogin = true">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import {ref} from 'vue';

export default {
  name: 'Home',
  components: {
    Login,
    Register
  },
  setup() {
    const showLogin = ref(true);

    return {showLogin}
  }
}
</script>
