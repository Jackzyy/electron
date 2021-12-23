<template>
  <input v-model="num" type="text" />
  <button @click="num++">+</button>
  <button @click="num--">-</button>
  <el-button>A</el-button>
  <el-input></el-input>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'

let num = ref(1)
const appContext: any = getCurrentInstance()
console.log(appContext?.proxy.$notify)
appContext?.proxy?.$notify.success({
  title: 'Info',
  message: 'This is a message without close button',
  showClose: false
})

// console.log(appContext, this)
</script>

<style lang="sass" scoped></style>
