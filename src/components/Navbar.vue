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
                      <a href="#" class="nav-link active" aria-current="page">Admin</a>
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

export default {
    setup() {
        const { error, logout } = useLogout()

        const handleLogout = async() => {
            await logout()
            if(!error.value) {
                console.log("User Logged Out")
            }
        }

        return { handleLogout }
    }
}
</script>

<style>

</style>