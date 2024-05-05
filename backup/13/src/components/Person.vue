<template>
  <div class="person">
   <h1>中国</h1>
   <h2 ref="title2">武汉</h2>
   <button @click="showLog"> 点我查看H2</button>
  </div>
</template>
<script lang="ts" setup name="person">
import {ref} from 'vue'

let title2 = ref()

function showLog(){
    console.log(title2.value.innerText)
}
</script>


