import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue';
import HistoryCourse from '../views/HistoryCourse.vue';
import Practice from '../views/Practice.vue';
import Mine from '../views/Mine.vue';
//引入 navigation路由
import Test from '../views/navigation/Test.vue';
import Suit from '../views/navigation/Suit.vue';
import Scale from '../views/navigation/Scale.vue';
import Mistakes from '../views/navigation/Mistakes.vue';
import Appraisal from '../views/navigation/Appraisal.vue';
import Collect from '../views/navigation/Collect.vue';

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

  // navigation页面路由
  {
    path: '/test',
    name: 'Test',
    component:Test,
    meta:{
      title:'专点专练',
    }
  },
  {
    path: '/suit',
    name: 'suit',
    component:Suit,
    meta:{
      title:'套卷练习',
    }
  },
  {
    path: '/scale',
    name: 'Scale',
    component:Scale,
    meta:{
      title:'仿真模考',
    }
  },
  {
    path: '/mistakes',
    name: 'Mistakes',
    component:Mistakes,
    meta:{
      title:'错题练习',
    }
  },
  {
    path: '/appraisal',
    name: 'Appraisal',
    component:Appraisal,
    meta:{
      title:'测评记录',
    }
  },
  {
    path: '/collect',
    name: 'Collect',
    component:Collect,
    meta:{
      title:'习题收藏',
    }
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
