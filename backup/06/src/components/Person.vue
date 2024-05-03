<template>
  <div class="person">
    <h2>一辆{{car.brand}}车，价格{{car.price }}万</h2>
    <button  @click="changPrice">修改价格</button>
    <h2>游戏列表：</h2>
    <ul>
        <li v-for="g in games":key="g.id">{{ g.name }}</li>

    </ul>
    <button @click="changGameNme"> 修改游戏名称 </button>
  </div>
</template>
<script lang="ts" setup name="Person234">
import {reactive} from 'vue'
let car = reactive({brand:'奔驰',price:100 })
let games = reactive([
{id:"adfg01",name:'王者荣耀'},
{id:"adfg02",name:"原神"},
{id:"adfg03",name:"狂野之息"},
])
function changPrice(){
    car.price+=10
    console.log(car.price)

}
let gameNumber = 0
function changGameNme(){
    if(gameNumber == 0){
        games[0].name = "牧场物语"
        gameNumber = 1

    }
    else{
        games[0].name = "王者荣耀"
        gameNumber = 0
    }
    
}
</script>
