<template>
<div class="person">
<h2>当前求和为：{{ sum }}</h2>
<button @click="changsum">点我+1</button>
</div>
</template>

<script lang="ts" setup name="person">
import {ref,watch} from "vue"

let sum= ref(0)

function changsum(){
    sum.value+=1
}
const stopWatch = watch(sum,(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue) 
  if (newvalue >=10){
    stopWatch()
  }
})
</script>