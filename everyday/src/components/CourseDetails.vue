<template>
  <div class="course_details_container">
    <div class="course_details_top">
      <div>&lt;</div>
      <div>课程详情</div>
      <div>
        <img src="../assets/fenxiang.png" class="course_details_top_icon" alt />
      </div>
    </div>
    <div class="course_datails_main">
      <div class="course_details_content">
        <div class="course_details_title">{{detiailsItem.title}}</div>
        <div class="course_details_pay">{{detiailsItem.pay}}</div>
        <div class="course_details_data">
          <span>{{detiailsItem.class}}</span>
          <span>|</span>
          <span>{{detiailsItem.apply}}</span>
        </div>
        <div class="course_datails_time">
          <span>开课时间：</span>
          <span>{{detiailsItem.date}}</span>
          <span>{{detiailsItem.time}}</span>
        </div>
      </div>

    <!-- 团队 -->
    <div class="course_details_team">
        <div style="font-size:16px;margin-left:5px;">教学团队</div>
        <div>
            <div>
                <img :src="detiailsItem.photo" alt="" class="course_details_team_photo">
            </div>
            <div style="margin-left:20px;font-size:14px;">{{detiailsItem.name}}</div>
        </div>
    </div>

<!-- 课程介绍 -->
<div class="course_details_introduce">课程介绍</div>
<!-- 课程介绍 -->
<div class="course_details_outline">
    <div style="font-size:16px;">课程大纲</div>
    <div class="course_details_course">
     <div class="course_details_course_top">
         <span class="course_details_course_top_span">回放</span>
         <span>第一讲第一课时</span>
     </div>
     <div class="course_details_course_bottom">
         <span style="margin:0 5px">{{detiailsItem.name}}</span>
         <span>03月16日 18:00 - 19:30</span>
     </div>
    </div>
</div>
<!-- 课程评论 -->
<div class="course_details_comment">
  <div class="course_details_comment_title">课程评论</div>
    <div class="course_details_comment_content">
        <div class="course_details_comment_content_left">
            <img src="../../public/img/boy.png" style="width:35px;marign-top:5px;" alt="">
        </div>
        <div class="course_details_comment_content_right">
            <div class="course_details_comment_content_right_top">
                <span style="font-size:16px;">17482937502</span>
                <span style="color:grey;">2020-04-23 14:56</span>
            </div>
            <div class="course_details_comment_content_right_bottom">
                <div>very good!</div>
            </div>
        </div>
    </div>
 </div>
 <div class="width:100%;height:50px"></div>
<div class="course_details_add">立即报名</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detiailsItem: []
    };
  },
  mounted() {
    this.detiailsItem = this.$route.query.courses;
    console.log(this.detiailsItem);
  }
};
</script>

<style>
::-webkit-scrollbar{
    display: none;
}
.course_details_container {
  width: 100vw;
  height: 100vh;
}
.course_details_top {
  width: 96%;
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  position:fixed;
  top:0;
}
.course_details_top_icon {
  width: 20px;
}
.course_details_content {
  width: 94%;
  height: 150px;
  background: white;
  font-size: 16px;
  padding:0 2%;
}
.course_details_title {
  font-size: 18px;
  margin-top: 10px;
}
.course_details_pay {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  color: orange;
}
.course_details_data {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  color: grey;
}
.course_datails_time {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  color: grey;
}
.course_datails_main {
margin-top:50px;
  width: 100%;
  height: 800px;
  background: rgb(240, 242, 245);
}
.course_details_team{
    width:100%;
    height: 120px;
    margin-top:15px;
   background:white;;
}
.course_details_team_photo{
    width:40px;
    margin-top:10px;;
    margin-left:20px;
}
.course_details_introduce{
  width:100%;
  height: 60px;
  margin-top:15px;
  background: white;
  font-size:16px;
  padding-left:5px;
  padding-top:10px;
}
.course_details_outline{
    width:96%;
    height: 400px;
    background:white;
    margin-top:15px;
    padding:0 2%;;
}
.course_details_course{
    width:100%;
    height: 55px;
    /* background:pink; */
    font-size:14px;
    margin-top:5px;
}
.course_details_course_top_span{
    background:orange;
    color:white;
    font-size:14px;
    margin-right: 5px;;
}
.course_details_course_bottom{
   margin-top:5px;
   color:grey;
}
.course_details_comment{
    width:96%;
    height: 300px;
    padding:0 2%;
    margin-top:15px;
    background:white;
    font-size:14px;;
}
.course_details_comment_title{
 font-size:16px;
}
.course_details_comment_content{
    width:100%;
    height: 50px;
    /* background:salmon; */
    display: flex;
    align-items: center;
}
.course_details_comment_content_left{
    width:20%;
    height: 50px;
    line-height:75px;
    /* background:pink; */
    text-align:center;;
}
.course_details_comment_content_right{
  width:80%;
  height:50px;
}
.course_details_comment_content_right_top{
    width:100%;
    height: 25px;
    font-size:14px;
    display: flex;
    justify-content: space-between;
    align-items: center;;
}
.course_details_comment_content_right_bottom{
    width:100%;
     height: 25px;
    font-size:14px;
    display: flex;
    color:grey;;
}
.course_details_add{
    width:100%;
    height: 50px;
    background:rgb(239, 97, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size:16px;
    position:fixed;
    bottom:0;;
}
</style>