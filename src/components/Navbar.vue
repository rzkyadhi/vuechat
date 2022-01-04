<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
          <a href="#" class="navbar-brand">Vuechat</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                      <a href="#" class="nav-link active" aria-current="page">{{ user.displayName }}</a>
                  </li>
              </ul>
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a href="#" class="nav-link" @click="handleLogout">Logout</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
import useLogout from "../composable/useLogout.js"
import getUser from '../composable/getUser.js'

export default {
    setup() {
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleLogout = async() => {
            await logout()
            if(!error.value) {
                console.log("User Logged Out")
            }
        }

        return { handleLogout, user }
    }
}
</script>

<style>

</style>