<template>
  <div class="">
    <Login />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';

export default {
  name: 'Home',
  components: {
    Login,
    Register
  }
}
</script>
