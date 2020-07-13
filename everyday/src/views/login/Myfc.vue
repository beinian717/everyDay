<template>
    <div class="myfc">
        <div class="myfc_header">
        <div class="myfc_header_left">
            <van-icon name="arrow-left" @click="rollBackMymine"/>
        </div>
        <div class="myfc_header_content">我的学习</div>
        <div class="myfc_header_right">
            <van-icon name="notes-o" />
        </div>
        </div> 
        <div class="myfc_header_tab">
  <van-tabs color="orange"  title-active-color="orange">
  <van-tab v-for="(item,index) in tabItem" :key="index" :title="`${item.name}(${item.count})`">
    <div class="myfc_header_tab_content">
        <div class="myfc_header_tab_item">
            <div>
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" style="width:60%"/>
            </div>
            <div style="color:grey">还没有课程，快去选择课程学习吧</div>
            <div class="myfc_header_tab_item_button">
                <button @click="rollBackCourse">选择课程</button>
            </div>
        </div>
    </div>
  </van-tab>
</van-tabs> 
       </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabItem:[
                {
                    name:"直播课",
                    count:0
                },
                {
                    name:"点播课",
                    count:0
                },
                {
                    name:"音频课",
                    count:0
                },
                {
                    name:"图文课",
                    count:0
                },
                {
                    name:"面授课",
                    count:0
                },
                {
                    name:"会员课",
                    count:0
                }
            ]
        }
    },
    methods: {
        rollBackMymine(){
            this.$router.go(-1)
        },
        rollBackCourse(){
            this.$router.push("/course")
        }
    },
}
</script>
<style>
    .myfc_header
    {
        width: 100%;
        height: 4rem;
        /* background: yellow; */
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
        font-size: 1.2rem;
    }
    .myfc_header_left,.myfc_header_right{
        width: 4rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .myfc_header_content
    {
         flex: 1;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
.myfc_header_tab
{
    width: 100%;
}
.myfc_header_tab_content
{
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.myfc_header_tab_item
{
    width: 64%;
    height: 20rem;
    /* background: chartreuse; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 100px;
}
.myfc_header_tab_item div{
    width: 100%;
    display: inline-flex;
     justify-content: center;
    align-items: center;
    margin: 20px 0px;
}
.myfc_header_tab_item_button button
{
    width: 40%;
    height: 2rem;
 background: orangered;
 color: white;
 border: 1px solid orangered;
 border-radius: 0.3rem;
}
</style>