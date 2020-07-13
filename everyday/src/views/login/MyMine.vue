<template>
    <div class="mymine_container">
         <div class="mymine_header">
            </div>
        <div class="mymine_wrapper">
         <div class="mymine_content">
             <div class="mymine_content_top">
                <div class="mymine_content_top_left">
                    <div>
                        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="" width="100%"/>
                    </div>  
                   <div class="mymine_content_top_phone">
                       <div style="fontSize:1rem">{{phoneItem}}</div>
                       <div><img src="../../assets/open.png"/></div>
                       <!--  -->
                   </div>
                </div>
                <div class="mymine_content_top_right">去约课</div>
             </div>
             <div class="mymine_content_bottom">
                 <div v-for="(item,index) in item" :key="index" class="mymine_content_bottom_info" @click="clickTomyfc(index)">
                    <div style="color:red;fontSize:1.5rem;fontWeight:600">{{item.number}}</div>
                    <div style="fontSize:0.85rem;fontWeight:600">{{item.title}}</div>
                    <div style="color:grey">{{item.info}}</div>
                 </div>
             </div>
         </div>
         <!-- ////////////////////////////// -->
         <div class="mymine_app_container">
             <div class="mymine_app_email">
                 <van-icon name="envelop-o" />
             </div>
             <div class="mymine_app_name">
                 <p>邀请好友注册APP，享受多重豪礼</p>
                 <p>限时特惠，多邀多得</p>
             </div>
             <div class="mymine_app_right">
                 <van-icon name="arrow" />
             </div>
         </div>
          <!-- ////////////////////////// -->
          <!-- 课程相关 -->
          <div class="mymine_correlation_container">
             <div class="mymine_correlation_top" style="fontSize:1.1rem">课程相关</div>
             <div class="mymine_correlation_bottom">
                 <div class="mymine_correlation_item" @click=" onAttention">
                     <div>
                         <img src="../../assets/2020_1.png"/>
                     </div>
                     <div>关注的老师</div>
                 </div>
                  <div class="mymine_correlation_item" @click="onCollect">
                     <div>
                         <img src="../../assets/2020_2.png"/>
                     </div>
                     <div>我的收藏</div>
                 </div>
             </div>   
          </div>

          <!-- 订单相关 -->
            <div class="mymine_correlation_container">
             <div class="mymine_correlation_top" style="fontSize:1.1rem">订单相关</div>
             <div class="mymine_correlation_bottom">
                 <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_3.png"/>
                     </div>
                     <div>课程订单</div>
                 </div>
                  <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_3.png"/>
                     </div>
                     <div>会员订单</div>
                 </div>
                  <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_3.png"/>
                     </div>
                     <div>约课订单</div>
                 </div>
             </div>   
          </div>

          <!-- 我的账户 -->
            <div class="mymine_correlation_container">
             <div class="mymine_correlation_top" style="fontSize:1.1rem">我的账户</div>
             <div class="mymine_correlation_bottom">
                 <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_4.png"/>
                     </div>
                     <div>优惠券</div>
                 </div>
                  <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_5.png"/>
                     </div>
                     <div>学习卡</div>
                 </div>
                  <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_6.png"/>
                     </div>
                     <div>会员</div>
                 </div>
             </div>   
          </div>

          <!-- 自助服务 -->
            <div class="mymine_correlation_container">
             <div class="mymine_correlation_top" style="fontSize:1.1rem">自助服务</div>
             <div class="mymine_correlation_bottom">
                 <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_7.png"/>
                     </div>
                     <div>我的消息</div>
                 </div>
                  <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_8.png"/>
                     </div>
                     <div>意见反馈</div>
                 </div>
                  <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_9.png"/>
                     </div>
                     <div>在线客服</div>
                 </div>
                  <div class="mymine_correlation_item">
                     <div>
                         <img src="../../assets/2020_10.png"/>
                     </div>
                     <div>设置</div>
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
        phoneItem:this.$route.query.mobile
     }
 },
 mounted(){
         this.$http.get('/api/app/userInfo').then((res)=>{
          console.log(res)
         })
     },
     methods: {
        clickTomyfc(index){
            if(index===0){
                this.$router.push("/myfc")
            }
        },
       onAttention(){
           this.$router.push("/attentionofteacher")
        },
        onCollect(){
            this.$router.push("/myofcollect")

        }
     },
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
        background: rgb(247, 110, 19);
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
        background: rgb(247, 110, 19);
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .mymine_content_top_left{
        width: 64%;
        /* background: crimson; */
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
    }
    .mymine_content_top_left div:nth-child(1){
        width: 4rem;
        height: 4rem;
        /* background: darkblue; */
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }
    .mymine_content_top_phone
    {
        /* width: 1rem; */
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .mymine_content_top_phone div
    {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .mymine_content_top_phone div img 
    {
        width: 18%;
    }
    .mymine_content_top_left button
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
        background: rgb(247, 110, 19);
        border-radius: 3rem;
        color: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .mymine_app_container div{
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    .mymine_app_email,.mymine_app_right{
        width: 3rem;
        height: 2.2rem;
        font-size: 1.5rem;
    }
    .mymine_app_name{
        flex: 1;
        flex-wrap: wrap;
        font-size: 0.8rem;
    }
    .mymine_app_name p{
        width: 100%;
    }
    .mymine_correlation_container
    {
        width: 100%;
        height: 7rem;
        /* background: chartreuse; */
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
    }
    .mymine_correlation_top
    {
        width: 100%;
        height: 3rem;
        display: inline-flex;
        align-items: center;
    }
    .mymine_correlation_bottom{
        width: 93%;
        display: inline-flex;
        /* background: chartreuse; */
        /* justify-content: space-between; */
        align-items: center;
        font-size: 0.8rem;
    }
    .mymine_correlation_item
    {
        width: 5rem;
        /* background: red; */
    }
    .mymine_correlation_item div
    {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .mymine_correlation_item div img
    {
        width: 30%;
        height: 1.4rem;
    }
</style>