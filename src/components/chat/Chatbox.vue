<template>
  <div class="chat-box" v-if="documents" ref="chat">  
      <div class="chat-bubble" v-for="doc in documents" :key="doc.id">
          <div class="chat-head">
              <div>{{ doc.name }}</div>
              <div>{{ doc.createdAt }}</div>
          </div>
          <div class="chat-body">
              {{ doc.message }}
          </div>
      </div>
  </div>
</template>

<script>
import getCollection from "../../composable/getCollection"
import { onUpdated, ref } from "vue"
export default {
    setup() {
        const { error, documents } = getCollection("message")
        const chat = ref(null)

        onUpdated(() => {
            chat.value.scrollTop = chat.value.scrollHeight
        })

        return { error, documents, chat }
    }
}
</script>

<style>

</style>