<template>
  <div class="person">
    <h2>{{ sum }}</h2>
    <button @click="add">点我+1</button>
  </div>
</template>
<script lang="ts" setup name="Person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";

let sum = ref(0);

function add() {
  sum.value += 1;

  //创建

  
}
console.log('创建')
onBeforeMount(()=>{
  console.log("挂载前")
})
onMounted(()=>{
  console.log("挂载完毕")
})
onBeforeUpdate(()=>{
  console.log("更新前")
})
onUpdated(()=>{
 console.log("更新完毕")  
})
onBeforeUnmount(()=>{
  console.log('卸载前')
})
onUnmounted(()=>{
  console.log("卸载完毕")
})

</script>