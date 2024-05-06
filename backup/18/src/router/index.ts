// 创建路由
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";
import About from "@/components/About.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: Home },
    { path: "/news", component: News },
    { path: "/about", component: About },
  ],
})

//暴露出去
export default router