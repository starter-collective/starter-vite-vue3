<script lang="ts" setup>
const inputValue = defineModel('inputValue', {
  type: String,
  default: '',
})
</script>

<template>
  <input v-model="inputValue" type="text">
</template>

<style scoped>
input {
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
}
</style>
