<template>
  <div class="course_container">
    <!-- 头部 -->
    <div class="course_top_contaier">
      <div class="course_top_left">特色课</div>
      <div class="course_top_right">
        <img src="../assets/sousuo.png" class="course_top_right_icon" alt />
      </div>
    </div>

    <!-- 筛选栏 -->
    <div class="course_sort_container">
      <div
        class="course_sort_items"
        v-for="(item,index) in list.sorts"
        :key="index"
        v-on:click="onClick(index)"
      >
        <span>{{item.title}}</span>
        <span>
          <img src="../assets/down.png" v-show="showDown" class="course_sorts_items_icon" />
        </span>
        <span>
          <img src="../assets/up.png" v-show="showUp" class="course_sorts_items_icon" />
        </span>
      </div>
    </div>

    <!-- 主体部分 -->
    <div class="course_main_container">
        <div class="course_main_items" v-for="(item,index) in list.course" :key="index">
          <div>{{item.title}}</div>
          <div class="course_main_items_time">
              <img :src="item.icon" class="course_main_items_time_icon" alt="">
              <span class="course_main_items_time.date">{{item.date}}</span>
          </div>
          <div style="margin-top:30px;">
              <img :src="item.photo" class="cours_main_items_photo" alt="">
              <span style="color:grey;font-size:14px">{{item.name}}</span>
          </div>
          <div class="course_main_footer">
              <span style="color:grey;font-size:14px">{{item.apply}}</span>
              <span class="course_main_footer_pay">{{item.pay}}</span>
          </div>
        </div>
         <div style="width:100%;height:60px;"></div>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
    components: {},
    data() {
        return {
           list:[],
           showDown:true,
           showUp:false,
           
        };
    },
    computed: {},
    methods: {
        onClick(){
        //   this.selectIndex=index
         this.showDown=false
         this.showUp=true
        }
    },
    mounted() {
        axios.get('http://localhost:8081/data.json').then((response)=>{
            window.console.log(response.data)
            this.list=response.data
        })
    },
    }
</script>
<style>
.course_container {
  width: 100vw;
  height: 100vh;
  position:relative;
}
.course_top_contaier {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
  position: relative;
  position:fixed;
  top:0;
  z-index: 999;
  background:white;
}
.course_top_left {
  position: absolute;
  left: 45%;
}
.course_top_right_icon {
  width: 25px;
  height: 25px;
}
.course_sort_container {
  width: 100%;
  height: 50px;
  /* background:pink; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  position:fixed;
  top:50px;
  z-index: 999;
  background:white;
}
.course_sort_items {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
}
.course_sorts_items_icon {
  widows: 25px;
  height: 25px;
  vertical-align: middle;
}
.course_main_container{
    width:100%;
    /* height: 800px; */
    background:rgb(219, 219, 219);
    position: absolute;;
    top:100px;
    margin:0 auto;;
}
.course_main_items{
    width:90%;
    height: 180px;
    background:white;
    margin:0 auto;
    margin-top:15px;
    padding:2%;
    font-size:16px;;
    position: relative;
}
.course_main_items_time{
    width:100%;
    height: 40px;
    display: flex;
    align-items:center;
}
.course_main_items_time_icon{
    width:20px;
    height: 20px;;
}
.course_main_items_time{
    font-size:14px;
    color:grey;
}
.cours_main_items_photo{
    width:30px;
    height: 30px;;
}
.course_main_footer{
    width:100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid rgb(218, 218, 218);
    position:absolute;
    bottom:0;
}
.course_main_footer_pay{
    margin-right:10px;
    font-size: 18px;
    color:green;;
}
</style>