<template>
  <Person :list="personList"/>
</template>
<script lang="ts" setup name="App">
import Person from "./components/Person.vue";
import { type Persons } from "./types";
import { reactive  } from "vue";

let personList = reactive<Persons>([
 {id:'01',name:"张三"},
 {id:'02',name:"李四"},
 {id:'03',name:"王五"}

])

</script>





<style>
#app {
  background-color: coral;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>