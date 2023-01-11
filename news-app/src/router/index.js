import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailedNewsView from "../views/DetailedNewsView.vue";
import HistoryOfVisitedView from "../views/HistoryOfVisitedView.vue";
import NewsSourcesView from "../views/NewsSourcesView.vue";
import ErrorApiCallView from "../views/ErrorApiCallView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView
    },
    {
      path: "/news-view",
      name: "DetailedNewsView",
      component: DetailedNewsView
      
    },
    {
      path: "/history-of-visited",
      name: "HistoryOfVisitedView",
      component: HistoryOfVisitedView
      
    },
    {
      path: "/news-sources",
      name: "NewsSourcesView",
      component: NewsSourcesView
     
    },
    {
      path: "/error-api",
      name: "ErrorApiCallView",
      component: ErrorApiCallView
      
    }
  ],
});

export default router;
