<template>
    <div class="mymine_container">
         <div class="mymine_header">
            </div>
        <div class="mymine_wrapper">
         <div class="mymine_content">
             <div class="mymine_content_top">
                <div class="tmymine_content_top_left">
                    <div>
                        <img src="../../assets/radio6.jpg" alt="" width="100%"/>
                    </div>
                   <div style="font-size:20px">{{this.$route.query.mobile}}</div>
                </div>
                <div class="mymine_content_top_right">去约课</div>
             </div>
             <div class="mymine_content_bottom">
                 <div v-for="(item,index) in item" :key="index" class="mymine_content_bottom_info">
                    <div style="color:red;fontSize:1rem;fontWeight:600">{{item.number}}</div>
                    <div style="fontSize:0.85rem;fontWeight:600">{{item.title}}</div>
                    <div>{{item.info}}</div>
                 </div>
             </div>
         </div>
         <div class="mymine_app_container">
         </div>
         <div class="mymine_info_container">
            <div v-for="(item,index) in itemList" :key="index">
                <h4>
                    {{item.title}}
                </h4>
               <div class="mymine_info_wrapper">
                     <div v-for="(item,index) in item.itemListinfo" :key="index" style="fontSize:0.8rem" class="mymine_info_img">
                    <div>
                     <img :src="item.icon"/>
                    </div>
                    <div>
                        {{item.name}}
                    </div>
                </div>
               </div>
            </div>
         </div>
        </div>
    </div>
</template>
<script>
export default {
 data() {
     return {
        item:[
            {
                number:0,
                title:"我的特色课",
                info:"已购特色课程学习"
            },
             {
                number:0,
                title:"一对一辅导",
                info:"我的一对一辅导老师"
            },
             {
                number:0.00,
                title:"剩余学习币",
                info:"查看剩余学习币"
            },
        ],
        itemList:[
            {
                title:"课程相关",
                itemListinfo:[
                    {
                        icon:require("../../assets/001.png"),
                        name:"关注的老师"
                    },
                    {
                        icon:require("../../assets/001.png"),
                        name:"我的收藏"
                    },
                ]
            },
            {
                title:"订单相关",
                itemListinfo:[
                    {
                        icon:require("../../assets/001.png"),
                        name:"课程订单"
                    },
                    {
                       icon:require("../../assets/001.png"),
                        name:"会员订单"
                    },
                    {
                        icon:require("../../assets/001.png"),
                        name:"约克订单"
                    }
                ]
            },
            {
                title:"我的账户",
                itemListinfo:[
                    {
                        icon:require("../../assets/001.png"),
                        name:"优惠券"
                    },
                    {
                        icon:require("../../assets/001.png"),
                        name:"学习卡"
                    },
                     {
                        icon:require("../../assets/001.png"),
                        name:"会员"
                    },
                ]
            },
        ]
     }
 },
 mounted(){
         this.$http.get('/api/app/userInfo').then((res)=>{
          console.log(res)
         })
     }
}
</script>
<style>
    .mymine_container
    {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .mymine_wrapper
    {
       width: 93%;
       margin-top: -3.5rem;
        
    }
    .mymine_header
    {
        width: 100%;
        height: 6rem;
        background: rgb(209, 58, 3);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
    .mymine_content
    {
        width: 100%;
        height: 9rem;
        border: 1px solid rgb(223, 220, 220);
        background: white;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 0.7rem;
    }
    .mymine_content_top
    {
       width: 100%;
       flex: 1;
       /* background: chartreuse; */
       display: inline-flex;
       justify-content: space-between;
       align-items: center;
    }
    .mymine_content_top_right{
        width: 18%;
        height: 25px;
        background: darkred;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .tmymine_content_top_left{
        width: 64%;
        /* background: crimson; */
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
    }
    .tmymine_content_top_left div:nth-child(1){
        width: 4rem;
        height: 4rem;
        background: darkblue;
        border-radius: 100%;
    }
    .tmymine_content_top_left button
    {
        width: 3rem;
        height: 1.5rem;
    }
    .mymine_content_bottom
    {
       width: 100%;
       flex: 1;
       /* background: chocolate; */
       display: inline-flex;
       justify-content: center;
       align-items: center;
    }
    .mymine_content_bottom_info
    {   
        flex: 1;
    }
    .mymine_content_bottom_info div{
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .mymine_app_container
    {
        width: 100%;
        margin: 0.8rem 0;
        height: 3rem;
        background: darkred;
        border-radius: 3rem;
    }
    .mymine_info_wrapper
    {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
    }
    .mymine_info_img
    {
        width: 20%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 1rem 0 ;
    }
    .mymine_info_img div
    {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2.3rem;
    }
</style>