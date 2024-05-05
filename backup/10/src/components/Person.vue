<template>
<div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2> 
</div>
<button @click="changName">修改姓名</button>
<button @click="changAge">修改年龄</button>
<button @click="changPerson">修改整个人</button>
</template>

<script lang="ts" setup name="person">
import {ref,watch} from "vue"

let person = ref({
  name:'张三',
  age: 18

})
function changName(){
    person.value.name += '~'
}
function changAge(){
    person.value.age+=1
}
function changPerson(){
    person.value = {name:'李四',age:100}
}

</script>