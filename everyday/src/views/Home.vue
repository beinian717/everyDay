<template>
  <div class="home">
    <!-- =====轮播图==== -->
    <div class="swiper_da">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in swiper" :key="i">
          <div class="home_swipwe">
            <img :src="item.img" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- =====推荐===== -->
    <div class="home_introduce_da">
      <div class="home_introduce" >
        <div class="home_introduce_conter" @click="goDetails(item)" v-for="(item,i) in introduce" :key="i">
          <div class="introduce_image">
            <img :src="item.image" />
          </div>
          <div class="introduce_txt">{{item.name}}</div>
        </div>
      </div>
    </div>

    <!-- ======名师阵容==== -->
    <div class="home_teacher">
      <div class="teacher_border"></div>
      <div class="teacher_name_title">名师阵容</div>
    </div>
    <!-- ======名师阵容详情==== -->
    <div>
      <div v-for="(item,i) in teacher" :key="i" @click="goMine" class="teacher_count">
        <div class="teacher_iamge">
          <img :src="item.img" />
        </div>
        <div class="teacher_txt">
          {{item.name}}
          <div class="teacher_name">
            {{item.details}}
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <!-- ========精品课堂====== -->
    <div class="home_jing">
      <div class="teacher_border"></div>
      <div class="teacher_name_title">精品课堂</div>
    </div>

    <!-- =======精品课堂详情====-->
    <div>
      <div v-for="(item,i) in bottom" :key="i" class="bottom_count">
        <div>
          <div class="home_bottom">{{item.title}}</div>
          <div class="home_ke">{{item.ke}}</div>
        </div>
        <div class="buttom_img_name">
          <div class="bottom_image">
            <img :src="item.img" />
          </div>
          <div class="buttom_name">{{item.name}}</div>
        </div>
        <div class="bottom_price">
          <div class="bottom_num">{{item.num}}</div>
          <div class="bottom_mian">{{item.mian}}</div>
        </div>
      </div>
    </div>
    <!-- ========明星讲师====== -->
    <div class="home_jing">
      <div class="teacher_border"></div>
      <div class="teacher_name_title">明星讲师</div>
    </div>
    <!-- ======明星详情==== -->
    <div>
      <div v-for="(item,i) in star" :key="i"  @click="goMine" class="star_count">
        <div class="teacher_iamge">
          <img :src="item.img" />
        </div>
        <div>
          <div class="star_txt_da">
            <div class="star_name">{{item.name}}</div>
            <div class="star_stite">{{item.stite}}</div>
          </div>
          <div class="star_details">{{item.details}}</div>
        </div>
      </div>
    </div>
    <div class="show_block_da" v-show="show">
      <div class="show_block">
        <div class="iconfont icon-cuohao" @click="icon"></div>
        <div class="log_image"><img src="https://wap.365msmk.com/img/feiji.decaf161.png"/></div>
        <div><p class="show_log">赶紧登陆一下吧</p></div>
        <div><p class="show_log_yu">立即预约一对一辅导</p></div>
        <div class="log_botton">立即登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      swiper: [],
      introduce: [],
      teacher: [],
      bottom: [],
      star: [],
      show:false
    };
  },
  name: "Home",
  components: {},
  mounted() {
    axios.get("http://localhost:8080/swiper.json").then(res => {
      console.log(res.data.bottom);
      this.swiper = res.data.swiper;
      this.introduce = res.data.introduce;
      this.teacher = res.data.teacher;
      this.bottom = res.data.bottom;
      this.star = res.data.star;
    });
  },
  methods:{
    goDetails(item){
      console.log(item)
      this.$router.push({
        name:"details",
        params:{
          mass:item
        }
      })
    },
    goMine(){
      this.show = true
    },
    icon(){
      this.show = false
    }
  }
};
</script>
<style  scoped>
.home {
  width: 100%;
  height: 93vh;
  overflow: scroll;
  background-color: whitesmoke;
}
.swiper_da {
  width: 100%;
  height: 10rem;
  /* background-color: red; */
}
.home_swipwe img {
  width: 100%;
  height: 10rem;
}
.introduce_txt {
  font-size: 16px;
  color: gray;
}
.home_introduce {
  width: 100%;
  /* height: 5rem; */
  /* background-color: greenyellow; */
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -35px;
}
.home_introduce_conter {
  width: 5rem;
  height: 5rem;
  background-color: white;
  border-radius: 10px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.introduce_image {
  width: 100%;
  /* background-color: indianred; */
  text-align: center;
}
.introduce_image img {
  width: 1.5rem;
  height: 1.5rem;
}
.home_teacher {
  width: 100%;
  /* background-color: tomato; */
  display: inline-flex;
}
.teacher_border {
  border: 2px orange solid;
}
.teacher_name {
  margin-left: 10px;
}
.teacher_iamge {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 25px;
  background-color: orange;
  overflow: hidden;
}
.teacher_count {
  width: 90%;
  height: 3.5rem;
  margin-left: 20px;
  margin-top: 10px;
  background-color: white;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.teacher_iamge img {
  width: 2.5rem;
}
.teacher_txt {
  font-size: 16px;
}
.teacher_name {
  font-size: 12px;
  color: gray;
}
.teacher_name_title {
  font-size: 16px;
  color: gray;
}
.home_jing {
  width: 100%;
  display: inline-flex;
}
.home_bottom {
  margin-top: 1rem;
  font-size: 16px;
  margin-left: 1rem;
}
.home_ke {
  font-size: 12px;
  color: gray;
  margin-top: 0.5rem;
  margin-left: 1rem;
}
.buttom_img_name {
  width: 100%;
  height: 1rem;
  display: inline-flex;
  margin-top: 1rem;
  margin-left: 1rem;
}
.buttom_name {
  height: 1rem;
  font-size: 14px;
  color: gray;
  line-height: 1rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-left: 1rem;
}
.bottom_price {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-top: 1rem;
}
.bottom_num {
  font-size: 16px;
  color: gray;
}
.bottom_mian {
  font-size: 16px;
  margin-right: 1.5rem;
  color: green;
}
.bottom_count {
  width: 90%;
  background-color: white;
  margin-left: 1rem;
}
.bottom_image {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 25px;
  background-color: orange;
  overflow: hidden;
  /* margin-left: 1rem; */
}
.bottom_image img {
  width: 1.5rem;
}
.home_introduce_da {
  width: 100%;
  height: 5rem;
  /* background-color: thistle; */
  position: relative;
}
.star_count {
  display: inline-flex;
  width: 90%;
  background-color: white;
  margin-left: 1rem;
  margin-top: 1rem;
}
.star_txt_da {
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
}
.star_name{
  margin-left: 0.5rem;
}
.star_stite{
  color: orangered;
  margin: 0.5rem;
}
.star_details{
  margin-top: 0.3rem;
  font-size: 12px;
  color: gray;
  margin-left: 0.5rem;
}
.show_block_da{
  width: 100%;
  height: 93vh;
  background-color: rgba(0,0,0,0.5);
   position: fixed;
  top: 0rem;
  left: 0rem;
}
.show_block{
  width: 14rem;
  height: 18rem;
  background-color: white;
  position: fixed;
  top: 12rem;
  left: 2rem;
  border-radius: 15px;
}
.iconfont{
  margin-top: 0.5rem;
  font-size: 25px;
  margin-left:12rem;
}
.show_log{
  width: 100%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 18px;
}
.show_log_yu{
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 12px;
  color: gray;
}
.log_image img{
  width: 100%;
  height: 10rem;
}
.log_botton{
  width: 50%;
  height: 2rem;
  background-color: orangered;
  color: white;
  text-align: center;
  line-height:2rem;
  border-radius: 10px;
  margin: auto;
}
</style>