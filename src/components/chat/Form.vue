<template>
  <form class="d-flex chat-form">
    <div class="alert alert-danger">{{ error }}</div>
    <input
      type="text"
      class="form-control rouned-0"
      placeholder="Type your messages..."
      required
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    />
    <button 
    class="btn btn-primary rounded-0" 
    @click.prevent="handleSubmit"
    >
      <i class="fas fa-paper-plane"></i>
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useCollection from '../../composable/useCollection.js'
import { timestamp } from '../../config/firebase.js'
export default {
  setup() {
    const message = ref('')
    const { error, storeDoc } = useCollection('message')
    const handleSubmit = async () => {
      const chat = {
        name: 'Hakim',
        message: message.value,
        createdAt: timestamp(),
      }
      await storeDoc(chat)
      if (!error.value) {
        message.value = ''
      }
    }
    return { message, handleSubmit, error }
  },
}
</script>

<style></style>