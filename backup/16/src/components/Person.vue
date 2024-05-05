<template>
  <div class="person">
    <h2>{{ sum }}</h2>
    <button @click="add">点我+1</button>
    <button @click="addDog">再来一只狗</button>
    <hr>
    <img v-for="dog in doglist" :src="dog" alt="">
  </div>
</template>
<script lang="ts" setup name="Person">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref } from "vue";
import axios from 'axios'


let sum = ref(0);

function add() {
  sum.value += 1;
  //创建
}
function addDog(){
  axios.get('https://dog.ceo/api/breeds/image/random').then(
    (res)=>{
      //console.log(res.data.message)
      doglist.push(res.data.message)
    }
  )
  
}
let doglist = reactive([
'https://images.dog.ceo/breeds/husky/n02110185_5716.jpg'
])


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

<style scoped>
img {
  height: 50px;
  margin: 1%;
}
</style>