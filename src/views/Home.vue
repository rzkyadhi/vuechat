<template>
  <div class="form-auth">
    <div v-if="showLogin">
      <Login @login="accessRoom"/>
      <p>
        Dont have an account ?
        <a href="#" @click="showLogin = false">Register</a>
      </p>
    </div>
    <div v-else>
      <Register @register="accessRoom"/>
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
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  components: {
    Login,
    Register
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter()
    const accessRoom = () => {
      router.push({ name: "Room" })
    }
    return {showLogin, accessRoom}
  }
}
</script>
