<template>
  <h3>home</h3>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/news");
  }, 3000);
});
</script>
