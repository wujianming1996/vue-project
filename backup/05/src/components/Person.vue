<template>
  <div class="person">
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup name="Person234">
import {ref} from 'vue'
// 数据
let name = ref("张三"); //此时的变量不是响应式的
let age = ref(18);
let tel = 13888888888;
let address = "武汉市洪山区";
// 方法

function changeName() {
  name.value = "zhang-san";
}
function changeAge() {
  age.value += 1;
}
function showTel() {
  alert(tel);
}
</script>
