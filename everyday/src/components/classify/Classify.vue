<template>
  <div class="classify_container">
    <!-- 一级分类 -->
    <div class="classify_one_container">
      <div
        class="one_item"
        @click="onClick(index)"
        v-for="(item,index) in leftData"
        :key="index"
      >{{item.name}}</div>
    </div>
    <!-- 二级分类 -->
    <div class="classify_two_container">
      <div class="two_item" v-for="(item,index) in rightData" :key="index">
        <div class="item_top">
          <div>{{item.name}}</div>
        </div>
        <div class="item_info" v-show="item.info">
          <div :class="item.hot?'item_info_div_active':'item_info_div'">{{item.info}}</div>
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
      leftData: [],
      rightData: []
    };
  },
  computed: {},
  methods: {
    onClick(index) {
      this.rightData = this.leftData[index].two;
    }
  },
  mounted() {
    axios.get("/classify.json").then(resp => {
      console.log(resp.data.data);
      this.leftData = resp.data.data;
      this.rightData=this.leftData[0].two;
    });
  }
};
</script>
<style  scoped>
.classify_container {
  width: 100%;
  display: flex;
  margin-top: 1rem;
}
.classify_one_container {
  width: 18%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left:10px;
}
.one_item {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #595959;
  font-size: 1.3rem;
}
.classify_two_container {
  width: 80%;
  height: 550px;
}
.two_item {
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  margin:20px 0px;
}
.item_top {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-items: flex-start;
  align-items: center;
}
.item_top div {
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #595959;
  font-size: 17px;
  border-radius: 20px;
  background: #eee;
  margin-left: 10px;
  box-sizing: border-box;
}
.item_info {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-items: flex-start;
  align-items: center;
}
.item_info_div {
  width: 30%;
  height: 90%;
  background: #eee;
  color: #595959;
  font-size: 17px;
  border-radius: 20px;
  margin-left: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item_info_div_active {
  width: 30%;
  height: 100%;
  background: #eee;
  font-size: 17px;
  border-radius: 20px;
  margin-left: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
}
</style>