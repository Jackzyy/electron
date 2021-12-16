<template>
  <input v-model="num" type="text" />
  <button @click="num++">+</button>
  <button @click="num--">-</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let num = ref(1)
</script>

<style lang="sass" scoped></style>
