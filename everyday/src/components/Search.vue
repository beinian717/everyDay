<template>
  <div class="search_container">
    <div class="search_top">
      <div v-on:click="backCourse">&lt;</div>
      <div>
          <input type="text" v-model="value" placeholder="请输入内容" class="search_top_input">
      </div>
      <div class="Search_top_rigth">
          <span style="color:grey" v-show="showCancle" v-on:click="backCourse">取消</span>
          <span v-show="showSearch" v-on:click="addHistory">搜索</span>
      </div>
    </div>
    <div class="search_history" v-show="showHistory">
        <div class="search_history_top">
            <div class="search_history_top_left">搜索历史</div>
            <div class="search_history_top_right">
                <img src="../assets/shanchu.png" class="search_history_top_right_icon" alt="" v-on:click="allDelete">
            </div>
        </div>
        <div class="search_history_main">
            <div class="search_history_main_items" v-for="(item,index) in searchHistory" v-on:click="toValue(item)" :key="index">{{item}}</div>
        </div>
    </div>
    <div class="search_more" v-show="showMore"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
         value:'',
         showHistory:true,
         showMore:false,
         showCancle:true,
         showSearch:false,
         searchHistory:JSON.parse(window.localStorage.getItem('history'))||[]
        }
    },
    methods:{
        backCourse(){
            this.$router.push('/Course')
        },
        addHistory(){
            if(this.searchHistory.length>4){
                this.searchHistory.pop()
            }
            this.searchHistory.unshift(this.value)

            window.localStorage.setItem('history',JSON.stringify(this.searchHistory))
        },
        allDelete(){
            var temp=[]
            this.searchHistory=temp
            window.localStorage.setItem('history',JSON.stringify(this.searchHistory))
        },
        toValue(item){
           this.value=item
        }
    },
    watch:{
        value:function(newVlue){
            if(newVlue.length>0){
                this.showHistory=false
                this.showMore=true
                this.showCancle=false
                this.showSearch=true
            }else{
                this.showHistory=true
                this.showMore=false
                this.showCancle=false
                this.showSearch=true
            }
        }
    }
};
</script>

<style>
.search_container {
  width: 100vw;
  height: 100vh;
}
.search_top {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Search_top_rigth{
    font-size:14px;
}
.search_history{
    width:100%;
    height: 500px;
    /* background:chocolate;; */
}
.search_more{
     width:100%;
    height: 500px;
    background:cornflowerblue;;
}
.search_history_top{
    width:90%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding:0 20px;
}
.search_history_top_left{
    font-size:14px;
    font-weight: 600;;
}
.search_history_top_right_icon{
    width:25px;
}
.search_top_input{
    font-size:14px;
    width:230px;
    height: 30px;
    border:none;
    outline:none;
    background:rgb(228, 231, 235);
    padding-left:20px;
    border-radius:20px;
}
.search_history_main{
    width:100%;
    height: 50px;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    font-size:14px;
}
.search_history_main_items{
    width:20%;
    height: 50px;
    line-height:50px;
    text-align: center;
}
</style>