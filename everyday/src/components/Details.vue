<template>
<div class="details">
    <div class="details_header_container">
        <div>
            <van-icon name="arrow-left" @click="gohome"/>
        </div>
        <div>讲师详情</div>
    </div>
    <div class="details_teacher_name">
        <div class="details_teacher_content">
            <div class="details_teacher_content_img">
                <img :src="teacherData.avatar"/>
            </div>
            <div class="details_teacher_content_name">
             <div>
                 <span>{{teacherData.teacher_name}}</span>
                 <span style="color:red">{{teacherData.level_name}}</span>
             </div>
             <div style="color:grey;fontSize:0.8rem">
                 男&nbsp;&nbsp;{{teacherData.teach_age}}教龄
             </div>
            </div>
            <div class="details_taecher_content_attention">
                <div @click="onAttention">{{attention}}</div>
            </div>
        </div>
    </div>
    <div class="details_teacher_info_container">
    <van-tabs  color=orange line-width=1.2rem title-active-color=orange>
     <van-tab title="讲师介绍">
         <div class="details_teacher_info_item">
             <div class="details_teacher_info_top" v-for="(element,index) in teacherInfoItem.attr" :key="index">
                 <div class="details_teacher_info_top_name">
                     {{element.attr_name}}
                 </div>
                 <div class="details_teacher_info_top_value" v-for="(ele,index) in element.attr_value" :key="index">
                     {{ele.attr_value_name}}   
                 </div> 
             </div>  
               <div class="details_teacher_info_top_name">老师简介</div>
          <div class="details_teacher_info_top_value">{{teacherInfoItem.intro}}</div>
         </div>
     </van-tab>
    <van-tab title="主讲课程"></van-tab>
    <van-tab title="学员评价"></van-tab>
    </van-tabs>
    </div>
    <div class="details_teacher_cart">
        <div>立即购买</div>
    </div>
</div>
</template>
<script>
import {Toast} from 'vant';

export default {
    data(){
        return{
            teacherInfoItem:[],
            teacherData:this.$route.query.data.teacher?this.$route.query.data.teacher:{},
            attention:"关注",
            gray:false
        }
    },
    mounted(){
        this.teacherInfo()
    },
    methods: {
        gohome(){
            this.$router.go(-1)
        },
        async teacherInfo(){
            let {data:response}=await this.$http.get(`/api/app/teacher/info/${this.$route.query.id}`)
            console.log(response.data)
            this.teacherInfoItem=response.data
        },
        onAttention(){
            this.attention="已关注"
            this.gray=!this.gray
            if(this.gray){
                Toast("已关注")
            }else{
                Toast("已取消")
                this.attention="关注"
                            }
        }
    },
}
</script>
<style  scoped>
.details
{
    width: 100%;
    background: rgb(221, 220, 220);
}
.details_header_container
{
    width: 100%;
    height: 7.5rem;
    background: rgb(88, 188, 228);
    color: white;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    font-size: 1.5rem;
    /* z-index: 100px; */
}
.details_header_container div:nth-child(1){
    width: 2.5rem;
    height: 2.8rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.details_header_container div:nth-child(2){
    flex: 1;
    height: 2.8rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.details_teacher_name
{
    width: 100%;  
    display: inline-flex;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 3.5rem;
}
.details_teacher_content
{
    width: 95%;
    height: 5.5rem;
    background: white;
 display: inline-flex;
 justify-content: space-around;
 align-items: center;

    /* border: 1px solid grey; */
}
.details_teacher_content_img
{
    width: 5.5rem;
    height: 4rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 5rem; */
    /* background: chartreuse; */
}
.details_teacher_content_img img
{
     width: 3.5rem;
    height: 3.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    /* background: chartreuse; */
}
.details_teacher_content_name{
    flex: 1;
}
.details_taecher_content_attention{
    width: 7rem;
    height: 5rem;
    /* background: chocolate; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.details_taecher_content_attention div
{
    width: 4.5rem;
    height: 2rem;
    background:rgb(224, 223, 223);
    color: chocolate;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
}
.details_teacher_info_container
{
    width: 100%;
    background: white;
    margin-top: 2rem;
}
.details_teacher_cart
{
    width: 100%;
    height: 3.5rem;
    position: fixed;
    left: 0;
    bottom: 0;
}
.details_teacher_cart div{
    width: 100%;
    height: 3.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: rgb(247, 113, 4);
    color: white;
}
.details_teacher_info_item
{
    width: 100%;
    color: gray;
}
.details_teacher_info_top
{
    width: 95%;
    display: inline-flex;
    /* justify-content: center;
    align-items: center; */
    
}
.details_teacher_info_top_name
{
    width: 25%;
    height: 3rem;
    /* background: chocolate; */
    display: inline-flex;
    align-items: center;
   justify-content: center;
}
.details_teacher_info_top_value
{
     width: 70%;
     /* height: 3rem; */
     display: inline-flex;
    align-items: center;
   justify-content: flex-start;
}
 </style>