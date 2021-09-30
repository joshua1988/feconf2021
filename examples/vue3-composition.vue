<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue2';

    return { message, changeMessage }
  },
})
</script>