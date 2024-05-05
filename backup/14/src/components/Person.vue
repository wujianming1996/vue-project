<template>
  <div class="person">
    <ul>
       <li v-for="p in list" :key="p.id">
        {{ p.name }}</li>

    </ul>
  </div>
</template>
<script lang="ts" setup name="Person">
import {type person} from "@types"
import { defineProps } from "vue";

defineProps<{list?:person}>()
</script>