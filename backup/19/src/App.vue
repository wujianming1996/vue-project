<template>
<div class="app">
    <h2 class="title">vue路由测试</h2>
    <!--导航区-->
    <div class="navigate">
        <RouterLink to="/home" active-class="active">首页</RouterLink>
        <RouterLink to="/news" active-class="active">新闻</RouterLink>
        <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <!--展示区-->
    <div class="main-conyent">
        此处以后可能要展示各种组件，到底展示哪个组件，需要看路径
        <RouterView></RouterView>
    </div>
</div>
</template>
<script lang="ts" setup name="App">
import { RouterView } from 'vue-router';
</script>

<style>
.title{
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray,white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
}
.navigate{
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}
.navigate a{
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;

}
.navigate a.active {
background-color: #64976E;
color: #ffc268;
font-weight: 900;
text-shadow: 0 0 1px black;
font-family: 微软雅黑;
}
.main-conyent{
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid;
    height: 400px;
    width: 90%;
}
</style>

