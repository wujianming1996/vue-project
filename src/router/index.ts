// 创建路由
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import detail from "@/pages/detail.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: Home },
    {
      path: "/news",
      component: News,
      children: [
        {
          path: "detail",
          component: detail,
        },
      ],
    },
    { path: "/about",
     component: About },
     {
      path:'/',
      redirect:'/home'
     }
  ],
});

//暴露出去
export default router;
