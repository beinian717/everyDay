<template>
  <div class="test_container">
    <!-- 头部部分 -->
    <div class="test_top_container">
      <div class="top_container">
          <div @click="backClick"><img style="width:1rem;height:1.5rem;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt=""></div>
          <div style="font-size:1.3rem;color:#595959">{{this.$route.meta.title}}</div>
      </div>
    </div>
    <!-- 搜索框部分 -->
    <div class="search_container">
        <input type="text" id="ipt" placeholder="请输入题库名称或关键词">
        <div class="right_icon"><van-icon name="search" /></div>
    </div>
    <!--  分类部分  -->
    <Classify />
  </div>
</template>

<script>
import Classify from '../.././components/classify/Classify';

export default {
  components: {
      Classify,

  },
  data() {
    return {};
  },
  computed: {},
  methods: {
      backClick(){
          window.history.back();
      }
  },
  mounted() {}
};
</script>
<style  scoped>
.test_container{
    width:100%;
}
.test_top_container{
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items:center;
}
.top_container{
    width:59%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-left:0.4rem;
}
.search_container{
    width:100%;
    height:4.5rem;
    border-bottom:1px solid #999;
    display: flex;
    justify-content: center;
    align-items:center;
}
#ipt{
    width:85%;
    height:2.8rem;
    border-radius:1rem 0 0 1rem;
    padding-left:1.5rem;
    border:none;
    background: #eeeeee;
    color:#595959;
}
.right_icon{
    width:1.5rem;
    height:2.8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #eeeeee;
    border-radius:0px 1rem 1rem 0;
}
</style>