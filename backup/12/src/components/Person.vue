<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm时，向服务器发送请求</h2>
    <h2>当前水温{{ temp }}度</h2>
    <h2>当前水位{{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHight">水位+10</button>
  </div>
</template>
<script lang="ts" setup name="person">
import { ref, watch, watchEffect } from "vue";

let temp = ref(10);
let height = ref(0);

function changeTemp() {
  temp.value += 10;
}
function changeHight() {
  height.value += 10;
}

watchEffect(() => {
    if (temp.value >= 60 || height.value >= 80) {
    console.log("向服务器发请求")
  }
})
</script>