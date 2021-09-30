<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue2';

    return { message, changeMessage }
  },
}
</script>