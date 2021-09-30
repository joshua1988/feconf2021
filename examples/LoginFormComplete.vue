<template>
  <form @submit.prevent="submitForm">
    <input type="text">
    <button type="submit">Login</button>
    <p>modal is {{ isModalOpen ? 'open' : 'closed' }}</p>
  </form>
</template>

<script>
import { ref } from 'vue';
  
const useModal = () => {
 	const isModalOpen = ref(false);
  const openModal = () => isModalOpen.value = true;
  
  return { isModalOpen, openModal }
}
  
export default {
  setup() {
    return { ...useModal() }
  },
  methods: {
    async submitForm() {
      // await loginUser();
      this.openModal();
    },
  }
}
</script>

<style scoped></style>