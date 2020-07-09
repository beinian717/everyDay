<template>
  <div id="app">
    <van-tabbar v-show="this.$route.meta.isShowTabbar" active-color="orange" v-model="active">
      <van-tabbar-item
        @click="onClick(index)"
        :icon="item.icon"
        v-for="(item,index) in tabbarData"
        :key="index"
      >
        <span style="font-size:1rem">{{item.name}}</span>
      </van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      tabbarData: [
        { name: "首页", icon: "home-o" },
        { name: "课程", icon: "search" },
        { name: "约课记录", icon: "friends-o" },
        { name: "练习", icon: "friends-o" },
        { name: "我的", icon: "setting-o" }
      ]
    };
  },
  mounted() {
    var path = window.location.pathname;
    switch (path) {
      case "/":
        this.active = 0;
        break;
      case "/course":
        this.active = 1;
        break;
      case "/historyCourse":
        this.active = 2;
        break;
      case "/practice":
        this.active = 3;
        break;
      case "/mine":
        this.active = 4;
        break;
    }
  },
  methods: {
    onClick(index) {
      this.active = index;
      switch (index) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/course");
          break;
        case 2:
          this.$router.push("/historyCourse");
          break;
        case 3:
          this.$router.push("/practice");
          break;
        case 4:
          this.$router.push("/mine");
          break;
      }
    }
  }
};
</script>

<style>
html {
  font-size: 20px;
}
</style>
