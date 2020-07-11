<template>
  <div>
    <div>首页</div>
    <div class="swiper_container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiper" :key="index">
          <img :src="item.banner_img" alt class="swiper_img" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="teacher_container" v-for="(item,index) in teacher" :key="index">
      <div class="purple" v-if="item.channel_info.type==3">
        <h5>{{item.channel_info.name}}</h5>
        <div class="teacher_items" v-for="(items,index) in item.list" :key="index">
          <div>
            <img :src="items.teacher_avatar" alt class="teacher_items_icon" />
          </div>
          <div class="size">
            <div>{{items.teacher_name}}</div>
            <div class="size_child">{{items.introduction}}</div>
          </div>
        </div>
      </div>
      <div class="pink" v-if="item.channel_info.type==1">
        <h5>{{item.channel_info.name}}</h5>
        <div class="pink_items" v-for="(items,index) in item.list" :key="index">
            <div style="font-size:18px;">{{items.title}}</div>
            <div style="font-size:14px;color:grey;">共{{items.total_periods}}课时</div>
           <div class="pink_teacher" style="margin-top:10px" v-for="(v,i) in items.teachers_list" :key="i">
               <img :src="v.teacher_avatar" class="pink_items_icon" alt="">
               <span style="font-size:12px;">{{v.teacher_name}}</span>
           </div>
           <div class="pink_bottom">
               <div>{{items.sales_num}}人已报名</div>
               <div>{{items.price | showPrice}}</div>
           </div>
        </div>
      </div>
    <div class="green" v-if="item.channel_info.type==4">
      <h5>{{item.channel_info.name}}</h5>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: [],
      teacher: []
    };
  },
  methods: {
    async showSwiper() {
      let { data: res } = await this.$http.get("/api/app/banner");
      //   window.console.log(res.data);
      this.swiper = res.data;
    },
    async showTeacher() {
      let { data: res } = await this.$http.get("/api/app/recommend/appIndex");
      window.console.log(res.data);
      this.teacher = res.data;
    }
  },
  filters:{
     showPrice(val){
         if(val==0){
             return '免费'
         }else{
             return `￥${(val/100).toFixed(2)}`
         }
     }
  },
  mounted() {
    this.showSwiper();
    this.showTeacher();
  }
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 260px;
  line-height: 260px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.swiper_img {
  width: 100%;
}
.purple {
  width: 100%;
  height: 230px;
  background: rgb(233, 233, 233);
}
.pink {
  width: 100%;
  /* height: 200px; */
  /* background: pink; */
}
.green {
  width: 100%;
  /* height: 200px; */
  background: green;
}
.teacher_container {
  width: 100%;
  /* height: 600px; */
}
.teacher_items {
  width: 100%;
  height: 50px;
  /* background: red; */
  margin-top: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  background: white;
}
.teacher_items_icon {
  width: 30px;
  border-radius: 100%;
  margin: 0 20px;
}
.pink_items_icon {
  width: 30px;
  height: 30px;
  margin:0 10px;;
  border-radius: 100%;
  vertical-align: middle;
}
.size {
  width: 80%;
}
.size_child {
  width: 100%;
  font-size: 12px;
  color: grey;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.pink_items{
    width:100%;
    height: 150px;
    background:rgb(236, 236, 236);
    margin-top:10px;
}
.pink_bottom{
    width:100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items:center;;
    font-size:16px;
}
.green{
  width:100%;
  height: 200px;
  background:green;;
}
</style>