<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { message: '' }
  },
  methods: {
    changeMessage() {
      this.message = 10; // X
    }
  }
})
</script>