<template>
<div class="person">
   账号：<input type="text" v-model="firstName">
   <br>
   密码：<input type="text" v-model="lastName">
   <br>
   账号与密码：<span>{{ fullName }} </span>
   

</div>
</template>

<script lang="ts" setup name="person">
import {ref,computed} from 'vue'

let firstName = ref('zhang')
let lastName = ref('san')
let fullName = computed(()=>{
   return firstName.value+lastName.value
}
)

</script>