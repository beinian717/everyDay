<template>
  <div class="home">
    <!-- =====轮播图==== -->
    <div class="swiper_da">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in swiper" :key="i">
          <div class="home_swipwe">
            <img :src="item.banner_img" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- =====推荐===== -->
    <div class="home_introduce_da">
      <div class="home_introduce">
        <div
          class="home_introduce_conter"
          @click="goDetails(item)"
          v-for="(item,i) in introduce"
          :key="i"
        >
          <div class="introduce_image">
            <img :src="item.image" />
          </div>
          <div class="introduce_txt">{{item.name}}</div>
        </div>
      </div>
    </div>

    <!-- 下边的内容 -->
    <div class="home_container" v-for="(item,index) in homeList" :key="index">
      <!-- ======名师阵容==== -->
      <div class="home_teacher" v-if="item.channel_info.type===3">
        <div class="home_name">{{item.channel_info.name}}</div>
        <div class="home_index_da">
          <div v-for="(v,i) in item.list" :key="i" class="index_count">
            <div class="home_image">
              <img :src="v.teacher_avatar" />
            </div>
            <div>
              <div class="index_name">{{v.teacher_name}}</div>
              <div class="index_introduction">{{v.introduction}}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========精品课堂====== -->
      <div class="home_jing" v-if="item.channel_info.type===1">
        <div class="home_name">{{item.channel_info.name}}</div>
        <div class="home_jing_count">
          <div v-for="(v,i) in item.list" :key="i">
            <div class="jing_title">{{v.title}}</div>
            <div v-for="(el,ind) in v.teachers_list" :key="ind" class="jing_count">
              <div class="jing_img_name">
                <div class="home_image_jing">
                  <img :src="el.teacher_avatar" />
                </div>
                <div>{{el.teacher_name}}</div>
              </div>
            </div>
            <div class="jing_num_price">
              <div class="jing_num">{{v.sales_num}}人已报名</div>
              <div class="jing_mian">{{v.price | mianf}}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========明星讲师====== -->
      <div class="home_ming" v-if="item.channel_info.type===4">
        <div class="home_name">{{item.channel_info.name}}</div>

        <div class="home_jing_count">
          <div v-for="(v,i) in item.list" :key="i" class="ming_count">
            <div class="ming_image_name">
              <div class="ming_img">
                <img :src="v.teacher_avatar" />
              </div>
              <div class="ming_name">
                <div class="ming_teacher_name">
                  {{v.teacher_name}}
                </div>
                  <div class="ming_level_name">{{v.level_name}}</div>
              </div>
            </div>
            <div class="ming_introduction">{{v.introduction}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ====模态框====== -->
    <div class="show_block_da" v-show="show">
      <div class="show_block">
        <div class="iconfont icon-cuohao" @click="icon"></div>
        <div class="log_image">
          <img src="https://wap.365msmk.com/img/feiji.decaf161.png" />
        </div>
        <div>
          <p class="show_log">赶紧登陆一下吧</p>
        </div>
        <div>
          <p class="show_log_yu">立即预约一对一辅导</p>
        </div>
        <div class="log_botton">立即登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: [],
      introduce: [],
      show: false,
      homeList: []
    };
  },
  filters: {
    mianf(val) {
      if (val === 0) {
        return "免费";
      } else {
        return `￥：${(val / 100).toFixed(2)}`;
      }
    }
  },
  name: "Home",
  components: {},
  mounted() {
    this.$http.get("https://www.365msmk.com/api/app/banner?").then(res => {
      // console.log(res.data.data);
      this.swiper = res.data.data;
    });
    this.indexList();
  },
  methods: {
    async indexList() {
      let { data: res } = await this.$http.get(
        "https://www.365msmk.com/api/app/recommend/appIndex?"
      );
      console.log(res.data);
      this.homeList = res.data;
    },

    goDetails(item) {
      console.log(item);
      this.$router.push({
        name: "details",
        params: {
          mass: item
        }
      });
    },
    goMine() {
      this.show = true;
    },
    icon() {
      this.show = false;
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
.home_container {
  width: 100%;
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
.show_block_da {
  width: 100%;
  height: 93vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0rem;
  left: 0rem;
}
.show_block {
  width: 14rem;
  height: 18rem;
  background-color: white;
  position: fixed;
  top: 12rem;
  left: 2rem;
  border-radius: 15px;
}
.iconfont {
  margin-top: 0.5rem;
  font-size: 25px;
  margin-left: 12rem;
}
.show_log {
  width: 100%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 18px;
}
.show_log_yu {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 12px;
  color: gray;
}
.log_image img {
  width: 100%;
  height: 10rem;
}
.log_botton {
  width: 50%;
  height: 2rem;
  background-color: orangered;
  color: white;
  text-align: center;
  line-height: 2rem;
  border-radius: 10px;
  margin: auto;
}
.home_teacher {
  margin-top: 1rem;
}
.home_name {
  border-left: 3px solid orange;
  margin-left: 0.5rem;
}
.home_index_da {
  width: 100%;
  background-color: whitesmoke;
}
.home_image {
  width: 3rem;
  height: 3rem;
  background-color: greenyellow;
  border-radius: 3rem;
}
.home_image img {
  width: 100%;
  height: 3rem;
  border-radius: 3rem;
}
.home_index_da {
  margin-top: 1rem;
}
.index_count {
  width: 100%;
  background-color: white;
  display: inline-flex;
}
.index_introduction {
  font-size: 12px;
  color: gray;
  width: 13rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.home_jing {
  width: 100%;
  background-color: whitesmoke;
}
.index_name {
  margin-left: 0.5rem;
}
.home_jing_count {
  width: 90%;
  background-color: white;
  margin-left: 1rem;
}
.home_image_jing img {
  width: 100%;
  height: 2rem;
  border-radius: 3rem;
}
.home_image_jing {
  width: 2rem;
  height: 2rem;
  background-color: greenyellow;
  border-radius: 3rem;
}
.jing_title {
  font-size: 14px;
  color: gray;
  margin-top: 0.5rem;
}
.jing_count {
  width: 100%;
  height: 3rem;
}
.jing_img_name {
  display: inline-flex;
  margin-top: 1rem;
}
.jing_num_price {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}
.jing_mian {
  color: green;
}
.jing_num {
  font-size: 14px;
  color: gray;
}
.ming_img {
  width: 2rem;
  height: 2rem;
}
.ming_img img {
  width: 100%;
  height: 2rem;
}
.ming_introduction {
  font-size: 14px;
  color: gray;
  width: 15rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 1rem;
}
.ming_count {
  width: 90%;
}
.ming_image_name {
  width: 100%;
  display: inline-flex;
}
.ming_name {
  width: 100%;
  display: inline-flex;
}
.ming_level_name {
  color: orangered;
  margin-left: 1rem;
}
.ming_teacher_name{
  margin-left: 1rem;

}
</style>