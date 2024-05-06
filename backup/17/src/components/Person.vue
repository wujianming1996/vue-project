<template>
  <div class="person">
    <h2>{{ sum }}</h2>
    <button @click="add">点我+1</button>
    <button @click="addDog">再来一只狗</button>
    <hr />
    <img v-for="dog in doglist" :src="dog" alt="" />
  </div>
</template>
<script lang="ts" setup name="Person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const {sum,add} = useSum()
const {doglist,addDog} = useDog()


</script>

<style scoped>
img {
  height: 50px;
  margin: 1%;
}
</style>
