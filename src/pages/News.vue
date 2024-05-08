<template>
    <div class="news">
  <ul>
    <li v-for="news in newlist" :key="news.id">
      <RouterLink :to="{
        path:'/news/detail',
        query:{
            id:news.id,
            title:news.title,
            content:news.content
        }
      }">{{ news.title }}</RouterLink>
    </li>
  </ul>
</div>
<div class="news-content">
    <RouterView></RouterView>
</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const newlist = reactive([
  { id: "1", title: "新闻1", content: "详情1" },
  { id: "1", title: "新闻2", content: "详情2" },
  { id: "1", title: "新闻3", content: "详情3" },
  { id: "1", title: "新闻4", content: "详情4" },
]);
</script>
