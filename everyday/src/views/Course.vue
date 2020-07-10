<template>
  <div class="course_container">
    <!-- 头部 -->
    <div class="course_top_contaier">
      <div class="course_top_left">特色课</div>
      <div class="course_top_right">
        <img src="../assets/sousuo.png" class="course_top_right_icon" v-on:click="toSearch" alt />
      </div>
    </div>

    <!-- 筛选栏 -->
    <div class="course_sort_container">
      <!-- <div
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
      </div>-->
      <div v-on:click="leftClick" class="course_sort_items">
        <span>分类</span>
        <span>
          <img src="../assets/down.png" v-show="showDown" class="course_sorts_items_icon" />
        </span>
        <span>
          <img src="../assets/up.png" v-show="showUp" class="course_sorts_items_icon" />
        </span>
      </div>
      <div v-on:click="middleClick" class="course_sort_items">
        <span>排序</span>
        <span>
          <img src="../assets/down.png" v-show="showDown" class="course_sorts_items_icon" />
        </span>
        <span>
          <img src="../assets/up.png" v-show="showUp" class="course_sorts_items_icon" />
        </span>
      </div>
      <div v-on:click="rightClick" class="course_sort_items">
        <span>筛选</span>
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
      <div
        class="course_main_items"
        v-for="(item,index) in list.course"
        :key="index"
        v-on:click="courseDetails(item)"
      >
        <div>{{item.title}}</div>
        <div class="course_main_items_time">
          <img :src="item.icon" class="course_main_items_time_icon" alt />
          <span class="course_main_items_time.date">{{item.date}}</span>
          <span style="margin-left:5px;">{{item.time}}</span>
          <span style="margin-left:5px;">|</span>
          <span style="margin-left:5px;">{{item.class}}</span>
        </div>
        <div style="margin-top:30px;">
          <img :src="item.photo" class="cours_main_items_photo" alt />
          <span style="color:grey;font-size:14px">{{item.name}}</span>
        </div>
        <div class="course_main_footer">
          <span style="color:grey;font-size:14px">{{item.apply}}</span>
          <span class="course_main_footer_pay">{{item.pay}}</span>
        </div>
      </div>
      <div style="width:100%;height:60px;"></div>
    </div>

    <!-- 蒙层 -->
    <div class="pop_container" v-show="popShow">
      <!-- 左边弹出层 -->
      <div class="pop_content_left" v-show="popLeft">
        <div v-for="(item,index) in popLeftItems" :key="index">
         <div class="pop_content_left_items">{{item.secondtitle}}</div>
         <div class="pop_content_left_items_list">
           <div class="pop_content_left_items_list_items" v-for="(items,index) in item.classify" :key="index">
             <div>{{items.name}}</div>
           </div>
         </div>
        </div>

        <div class="pop_left_footer">
          <div class="pop_left_footer_reset">重置</div>
          <div class="pop_left_footer_commit">提交</div>
        </div>
      </div>
      <!-- 中间弹出层 -->
      <div class="pop_content_middle" v-show="popMiddle">
        <div class="pop_content_middle_items" v-for="(item,index) in popMiddleItems.classify" :key="index">
          {{item.name}}
        </div>
      </div>
      <!-- 右边弹出层 -->
      <div class="pop_content_right" v-show="popRight">
        <div class="pop_content_left_items_list_items" v-for="(item,index) in popRightItems" :key="index">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      list: [],
      sorts:[],
      popLeftItems:[],
      popMiddleItems:[],
      popRightItems:[],
      showDown: true,
      showUp: false,
      show: false,
      popShow: false,
      popLeft: false,
      popMiddle: false,
      popRight: false
    };
  },
  computed: {},
  methods: {
    toSearch() {
      this.$router.push("/search");
    },
    courseDetails(item) {
      console.log(item);
      this.$router.push({
        path: "/courseDetails",
        query: {
          courses: item
        }
      });
    },
    leftClick() {
      this.popShow = !this.popShow;
      this.popLeft = !this.popLeft;
    },
    middleClick() {
      this.popShow = !this.popShow;
      this.popLeft=false
      this.popMiddle = !this.popMiddle;
      
  
    },
    rightClick() {
      this.popShow = !this.popShow;
      this.popRight = !this.popRight;
    }
  },
  mounted() {
    axios.get("data.json").then(response => {
      // window.console.log(response.data);
      this.list = response.data;
      this.sorts=this.list.sorts
      this.popLeftItems=this.sorts[0].left
      this.popMiddleItems=this.sorts[1]
      this.popRightItems=this.sorts[2]
      window.console.log(this.popLeftItems)
      // this.popLeftItems=this.list.sorts.left
    });
  }
};
</script>
<style>
.course_container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.course_top_contaier {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid rgb(228, 228, 228);
  position: relative;
  position: fixed;
  top: 0;
  z-index: 999;
  background: white;
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
  position: fixed;
  top: 50px;
  z-index: 999;
  background: white;
  /* position: relative; */
  font-size: 16px;
  border-bottom:1px solid rgb(214, 214, 214);
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
.course_main_container {
  width: 100%;
  /* height: 800px; */
  background: rgb(240, 242, 245);
  position: absolute;
  top: 100px;
  margin: 0 auto;
}
.course_main_items {
  width: 90%;
  height: 180px;
  background: white;
  margin: 0 auto;
  margin-top: 15px;
  padding: 2%;
  font-size: 16px;
  position: relative;
}
.course_main_items_time {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.course_main_items_time_icon {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.course_main_items_time {
  font-size: 14px;
  color: grey;
}
.cours_main_items_photo {
  width: 30px;
  height: 30px;
}
.course_main_footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(218, 218, 218);
  position: absolute;
  bottom: 0;
}
.course_main_footer_pay {
  margin-right: 10px;
  font-size: 18px;
  color: green;
}
.pop_container {
  width: 100vw;
  height: 600px;;
  position: fixed;
  top:100px;
  background: rgba(0, 0, 0, 0.6);
}
.pop_content_left {
  width: 100%;
  height: 257px;
  background: white;
}
.pop_content_middle {
  width: 100%;
  height: 250px;
  background: white;
}
.pop_content_right {
  width: 100%;
  height: 200px;
  background: seagreen;
}
.pop_content_left_items{
  width:100%;
  height:30px;
  font-size:14px;
  display: flex;
  align-items: center;
}
.pop_content_left_items_list{
  width:100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap:wrap;
}
.pop_content_left_items_list_items{
  width:18%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgb(238, 238, 238);
  margin:0 3%;
  margin-top:3px;
  font-size:14px;
}
.pop_left_footer{
  width:100%;
  height: 50px;
  /* background:pink; */
  margin-top:10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size:14px;;
}
.pop_left_footer_reset{
  width:170px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background:white;
  border:1px solid rgb(231, 231, 231);
  color:grey;
}
.pop_left_footer_commit{
  width:170px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgb(235, 97, 0);
  /* border:1px solid black; */
  color:white;
}
.pop_content_middle_items{
  width:100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:16px;;
}
</style>