<script setup lang="ts">
import { reactive, ref } from 'vue'

defineProps({
  version: {
    type: String,
    required: true
  }
})

const prefix = ref('')
const obj = reactive({ suffix: '' })

setTimeout(() => {
  prefix.value = 'v'
  obj.suffix = 'x'
}, 2000)
</script>

<template>
  <span>{{ prefix }}{{ version }}{{ obj.suffix }}</span>
</template>

<style scoped lang="scss"></style>
