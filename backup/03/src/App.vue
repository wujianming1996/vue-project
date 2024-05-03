<template>
    <div class="app">
    <h1>微优易</h1>
    <Person/>

</div>
    
</template>
<script lang="ts">
import Person from './components/Person.vue'

export default{
name:'App',
components:{Person}
}
console.log("vue")
</script>

<style>
.app {
    background-color:bisque;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;

}
button {
margin: 0 5px;

}
</style>