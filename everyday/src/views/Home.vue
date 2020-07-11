<template>
  <div class="home_container">
    <!-- 轮播图部分 -->
    <div class="swiper_container">
      <van-swipe class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiperList" :key="index">
          <img :src="item.banner_img" alt />
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
          <div class="list_info">
            <div class="list_info_top">{{v.teacher_name}}</div>
            <div class="list_info_bottom">{{v.introduction}}</div>
          </div>
        </div>
      </div>
      <div class="list_two_container" v-if="item.channel_info.type==1">
        <div class="list_two_item" v-for="(v,i) in item.list" :key="i">
          <div class="list_item_top">{{v.title}}</div>
          <div class="list_two_avatar" v-for="(value,i) in v.teachers_list" :key="i">
            <span>
              <img :src="value.teacher_avatar" alt />
            </span>
            <div
              style="color:#B7B7B7;font-size:14px;padding-left:10px;box-sizing:border-box;"
            >{{value.teacher_name}}</div>
          </div>
          <div class="list_two_bottom">
            <div style="color:#B7B7B7">{{v.sales_num}}人报名</div>
            <div>{{v.price|price}}</div>
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
      swiperList: [],
      listData: []
    };
  },
  computed: {},
  filters: {
    price(val) {
      if (val == 0) {
        return "免费";
      } else {
        return `￥${(val / 100).toFixed(2)}`;
      }
    }
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
  mounted() {
    this.ajaxSwiper();
    this.ajaxList();
  }
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