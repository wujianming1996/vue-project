<template>
    <div class="person">
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <button @click="changeName" >修改名字</button>
        <button @click="changeAge" >修改年龄</button>
        <button @click="showTel" >查看联系方式</button>
    </div>
</template>


<script lang="ts" setup name="Person234">
  // 数据
  let name = '张三' //此时的变量不是响应式的
        let age = 18
        let tel = 13888888888
        let address = "武汉市洪山区"
        // 方法

        function changeName(){
            name = 'zhang-san'
            return name
        }
        function changeAge(){
            age += 1
        }
        function showTel(){
            alert(tel)
        }
</script>



