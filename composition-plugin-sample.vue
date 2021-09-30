<template>
	<div>
    <button @click="openModal">open</button>
    <button @click="closeModal">close</button>
    <hr>
    <button @click="handleError">에러 확인</button>
  </div>
  <p>
    {{ message }}
  </p>
  <p>{{ isModalOpen }}</p>
</template>

<script>
import { ref } from 'vue';
// import {isModal, openModal, closeModal} from './useModal'
  
function useModal() {
  const isModalOpen = ref(false);
  const openModal = () => isModalOpen.value = true;
  const closeModal = () => isModalOpen.value = false;
 	return { isModalOpen, openModal, closeModal }
}
  

export default {
  setup() {
    const { isModalOpen, openModal, closeModal } = useModal();
    return { isModalOpen, openModal, closeModal }
  },
  data: () => ({
    show: false,
    message: 'Great to be here!',
  }),
  methods: {
    handleError() {
      this.message = '에러 처리 완료'
      this.openModal();
    }
  }
}
</script>
<style scoped>
.message {
  color: red;
}
</style>
