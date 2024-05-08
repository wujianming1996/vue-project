<template>
  <div class="news">
    <ul>
      <li v-for="news in newlist" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <span>{{ news.title }}</span>
      </li>
    </ul>
  </div>
  <div class="news-content">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const newlist = reactive([
  { id: "1", title: "新闻1", content: "详情1" },
  { id: "1", title: "新闻2", content: "详情2" },
  { id: "1", title: "新闻3", content: "详情3" },
  { id: "1", title: "新闻4", content: "详情4" },
]);
interface NewsInter {
  id:string,
  title:string,
  content:string
}

const router = useRouter();
function showNewsDetail(news: NewsInter) {
  router.push({
    path: "/news/detail",
    query: {
      id: news.id,
      title: news.title,
      content: news.content,
    },
  });
}
</script>
