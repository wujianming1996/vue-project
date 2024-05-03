<template>
    <div class="person">
        <h3>姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
        <button @click="changeName" >修改名字</button>
        <button @click="changeAge" >修改年龄</button>
        <button @click="showTel" >查看联系方式</button>
    </div>
</template>

<script lang="ts" >
export default {
    name:'person',
    data(){
        return{
        name:'张三',
        age: 18,
        tel:'1388888888'
        }
    },
    methods:{
        showTel(){
        alert(this.tel)
        },
        changeName(){
            this.name = "zhang-san"
        },
        changeAge(){

            this.age +=1
        }

    }
    
}
</script>


