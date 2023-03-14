<script setup lang="ts">
import { ref } from 'vue'

const prefix = ref('')

setTimeout(() => {
  prefix.value = 'v'
}, 2000)
</script>

<template>
  <span>{{ prefix }}1.2.3</span>
</template>

<style scoped lang="scss"></style>
