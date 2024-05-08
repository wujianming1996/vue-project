<template>
    {{ query.content }}
</template>

<script setup lang="ts" name="detail">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
let route = useRoute()
let {query} = toRefs(route)
</script>