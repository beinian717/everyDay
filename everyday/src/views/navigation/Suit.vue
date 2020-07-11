<template>
  <div class="suit_container">
    <!-- 头部部分 -->
    <div class="suit_top_container">
      <div class="top_container">
        <div @click="backClick">
          <img
            style="width:18px;height:22px;"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
          />
        </div>
        <div style="font-size:1.3rem;color:#595959">{{this.$route.meta.title}}</div>
      </div>
      <div style="width:30%;height:100%;display:flex;justify-content:flex-end;align-items:center;">
        <img
          style="width:20px;height:20px;"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
    <!-- 选择部分 -->
    <div class="suit_select_container">
      <div :class="['suit_left',{'suit_left_active':leftShow==true}]" @click="leftClick">
        <div>套卷分类</div>
        <van-icon :class="leftShow?'suit_vant_sel':'suit_vant'" name="play" />
      </div>
      <div :class="['suit_right',{'suit_right_active':rightShow}]" @click="RightClick">
        <div>套卷状态</div>
        <van-icon class="suit_vant" name="play" />
      </div>
    </div>
    <!-- 提示框部分 -->
    <div class="confirm_container" v-show="leftShow">
      <div class="confirm_left">
        <div
          :class="['confirm_left_item',{'confirm_left_item_active':leftSelIndex==index}]"
          @click="onLeftClick(item,index)"
          v-for="(item,index) in left1"
          :key="index"
        >{{item.name}}</div>
      </div>
      <div class="confirm_right1">
        <div class="confirm_right1_item"  v-for="(item,index) in temp" :key="index">{{item.name}}</div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="confirm_Right" v-show="rightShow">
      <div @click="onRightClick(index)" :class="['confirm_Right_item',{'confirm_Right_item_active':RightSelIndex==index}]" v-for="(item,index) in Right" :key="index">{{item}}</div>
    </div>
    <!-- 蒙层部分 -->
    <div class="meng_container" v-show="leftShow" @click="closeLeftClick"></div>
    <div class="meng1_container" v-show="rightShow" @click="closeRightClick"></div>
    <!-- empty部分 -->
    <div class="suit_logo_container">
      <img src="../../assets/empty.png" alt />
      <p>请稍候，套卷正在赶来的路上啦</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      left1: [],
      right1: [],
      Right: [],
      temp: [],
      leftSelIndex: 0,
      RightSelIndex: 0,
      leftShow: false,
      rightShow: false
    };
  },
  computed: {},
  methods: {
    leftClick() {
      this.leftShow = !this.leftShow;
      this.rightShow=false;
    },
    RightClick() {
      this.rightShow = !this.rightShow;
      this.leftShow=false;
    },
    onLeftClick(item, index) {
      this.leftSelIndex = index;
      this.temp = [];
      this.right1.forEach(ele => {
        if (ele.pid == item.id) {
          this.temp.push(ele);
        }
      });
    },
    onRightClick(index){
      this.RightSelIndex=index;
      // this.leftShow=false;
    },
    closeLeftClick() {
      this.leftShow = !this.leftShow;
    },
    closeRightClick(){
      this.rightShow=!this.rightShow
    },
    backClick() {
      window.history.back();
    }
  },
  mounted() {
    axios.get("/suit.json").then(resp => {
      this.left1 = resp.data.left1;
      this.right1 = resp.data.right1;
      this.Right = resp.data.Right;
      console.log(this.Right);
    });
  }
};
</script>
<style  scoped>
.suit_container {
  width: 100%;
}
.suit_top_container {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top_container {
  width: 59%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.4rem;
}
.suit_select_container {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.suit_left,
.suit_right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.suit_left_active,.suit_right_active {
  color: orange;
}
.suit_vant {
  transform: rotate(90deg);
}
.suit_vant_sel {
  transform: rotate(-90deg);
}
.confirm_container {
  width: 100%;
  height: 180px;
  background: #fff;
  display: flex;
  position: fixed;
  top: 140px;
}
.confirm_left {
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.confirm_left_item {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #595959;
}
.confirm_left_item_active {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
}
.confirm_right1 {
  width: 236px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.confirm_right1_item {
  width: 100%;
  height: 100%;
  color: #595959;
  padding: 15px 15px;
  box-sizing: border-box;
}
.confirm_Right {
  width: 100%;
  height: 146px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 140px;
  background: #fff;
}
.confirm_Right_item {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
}
.confirm_Right_item_active{
  color:orange;
}
.meng_container {
  width: 100%;
  height: 360px;
  background: rgba(39, 37, 37, 0.7);
  opacity: 0.5;
  position: fixed;
  bottom: 0px;
}
.meng1_container {
  width: 100%;
  height: 400px;
  background: rgba(39, 37, 37, 0.7);
  opacity: 0.5;
  position: fixed;
  bottom: 0px;
}
.suit_logo_container {
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>