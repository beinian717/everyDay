import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue';
import HistoryCourse from '../views/HistoryCourse.vue';
import Practice from '../views/Practice.vue';
import Mine from '../views/Mine.vue';
import Details from '../components/Details.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      isShowTabbar:true,
    }
  },
  {
    path: '/course',
    name: 'Course',
    component: Course,
    meta:{
      isShowTabbar:true,
    }
  },
  {
    path: '/historyCourse',
    name: 'HistoryCourse',
    component: HistoryCourse,
    meta:{
      isShowTabbar:true,
    }
  },
  {
    path: '/practice',
    name: 'Practice',
    component: Practice,
    meta:{
      name:"练习",
      isShowTabbar:true,
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component:Mine,
    meta:{
      isShowTabbar:false,
    }
  },
  {
    path: '/details',
    name: 'details',
    component:Details,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
