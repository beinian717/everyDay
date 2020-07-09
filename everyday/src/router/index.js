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
<<<<<<< HEAD
    path: '/search',
    name: 'Search',
    component:()=>import('../components/Search'),
    meta:{
      isShowTabbar:false,
    }
  },
  {
    path: '/courseDetails',
    name: 'CourseDetails',
    component:()=>import('../components/CourseDetails'),
    meta:{
      isShowTabbar:false,
    }
  }
  
=======
    path: '/details',
    name: 'details',
    component:Details,
  },
>>>>>>> 2ea69b4f2e55cd5d0142ed3011844ce13c2c3e7e
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
