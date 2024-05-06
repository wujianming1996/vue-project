<template>
  <Person v-if="isShow" />
</template>
<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import {ref} from 'vue'

let isShow = ref(true)
</script>

<style>
#app {
  background-color: coral;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>