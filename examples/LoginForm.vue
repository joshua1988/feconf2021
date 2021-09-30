<template>
  <form @submit.prevent="submitForm">
    <input type="text">
    <button type="submit">Login</button>
    <p>modal is {{ isModalOpen ? 'open' : 'closed' }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    async submitForm() {
      // await loginUser();
      this.openModal();
    },
  }
}
</script>

<style scoped></style>