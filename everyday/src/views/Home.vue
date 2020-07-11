<template>
  <div class="home">
    <!-- =====轮播图==== -->
    <div class="swiper_da">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in swiper" :key="i">
          <div class="home_swipwe">
            <img :src="item.banner_img" alt/>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 列表部分 -->
    <div class="list_container" v-for="(item,index) in listData" :key="index">
      <div class="list_title">{{item.channel_info.name}}</div>
      <div class="list_one_container" v-if="item.channel_info.type==3">
        <div class="list_one_item" v-for="(v,i) in item.list" :key="i">
          <div class="list_avatar">
            <img :src="v.teacher_avatar" alt />
          </div>
          <div class="introduce_txt">{{item.name}}</div>
        </div>
      </div>
    </div>

    <!-- ======名师阵容==== -->
    <div class="home_teacher">
      <div class="teacher_border"></div>
      <div class="teacher_name_title">{{this.one.name}}</div>
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
      <div class="teacher_name_title">{{this.two.name}}</div>
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
      <div class="teacher_name_title">{{this.three.name}}</div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      swiper: [],
      introduce: [],
      teacher: [],
      bottom: [],
      star: [],
      show:false,
      one:[],
      two:[],
      three:[]
    };
  },
  name: "Home",
  mounted() {
    this.$http.get('/api/app/banner').then((res)=>{
      // console.log(res.data.data)
       this.swiper = res.data.data;
       this.introduce = res.data.introduce;
       this.teacher = res.data.teacher;
       this.bottom = res.data.bottom;
       this.star = res.data.star;

    })
     this.$http.get('/api/app/recommend/appIndex').then((res)=>{
      console.log(res.data.data[0].channel_info)
      //  this.introduce = res.data.introduce;
       this.teacher = res.data.teacher;
       this.bottom = res.data.bottom;
       this.star = res.data.star;
       this.one=res.data.data[0].channel_info
       this.two=res.data.data[1].channel_info
       this.three=res.data.data[2].channel_info
    })
  },
  methods: {
    async ajaxSwiper() {
      let { data: res } = await this.$Https.get("/api/app/banner");
      this.swiperList = res.data;
    },
    async ajaxList() {
      let { data: res } = await this.$Https.get("/api/app/recommend/appIndex");
      console.log(res.data);
      this.listData = res.data;
    }
  },
  // mounted() {
  //   this.ajaxSwiper();
  //   this.ajaxList();
  // }
};
</script>
<style  scoped>
.home_container {
  width: 100%;
}
.swiper_container {
  width: 100%;
  height: 200px;
}
.swiper_container img {
  width: 100%;
  height: 200px;
}
.list_container {
  width: 100%;
  /* height: 350px; */
  border: 1px solid red;
  margin-top: 10px;
}
.list_title {
  width: 100%;
  height: 20px;
  margin: 10px 10px;
  box-sizing: border-box;
}
.list_one_container {
  width: 100%;
  height: 290px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.list_one_container img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.list_one_item {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: Center;
}
.list_info {
  width: 82%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}
.list_info_top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
}
.list_info_bottom {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #b7b7b7;
  font-size: 13px;
  padding-left: 10px;
  box-sizing: border-box;
}
.list_two_container {
  width: 100%;
  background: rgb(197, 192, 192);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: Center;
}
.list_two_item {
  width: 90%;
  height: 260px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
}
.list_item_top {
  width: 100%;
  height: 44px;
  font-size: 16px;
  margin-top: 5px;
  box-sizing: border-box;
}
.list_two_avatar {
  width: 100%;
  height: 35px;
  display: flex;
  padding-left: 30px;
  box-sizing: border-box;
  align-items: center;
}
.list_two_avatar img {
  width: 45px;
  height: 35px;
  border-radius: 50%;
}
.s1 {
  color: #b7b7b7;
  margin-bottom: 10px;
  vertical-align: middle;
}
.list_two_bottom {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.list_three_container {
  width: 100%;
  background: green;
}
</style>