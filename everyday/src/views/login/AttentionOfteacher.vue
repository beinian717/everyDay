<template>
    <div class="attention_of_teacher">
        <div class="attention_of_header">
            <div class="attention_of_header_left">
                 <van-icon name="arrow-left" @click="rollBackMymine"/>
            </div>
            <div class="attention_of_header_right">我的关注</div>
        </div>
        <div class="attention_of_content">
            <div class="attention_of_content_info">
                <div class="attention_of_content_info_img">
                    <img src=""/>
                </div>
                <div class="attention_of_content_info_name"></div>
                <div class="attention_of_content_info_btn">
                    <button>{{attention}}</button>
                </div>
            </div>
        </div>
        <div class="attention_of_teacher_end">
            没有更多了
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
          attention:"取消关注"
        }
    },
    methods: {
        rollBackMymine(){
            this.$router.go(-1)
        }
    },
}
</script>
<style>
.attention_of_teacher
{
    width: 100%;
    height: 667px;
    background: rgb(238, 237, 237);
}
   .attention_of_header
   {
       width: 100%;
       height: 3.5rem;
       background: white;
       display: inline-flex;
       justify-content: center;
       align-items: center;
       color: rgb(94, 93, 93);
       font-size: 1.2rem;
   } 
   .attention_of_header_left
   {
        width: 2.5rem;
        display: inline-flex;
       justify-content: center;
       align-items: center;
   }
   .attention_of_header_right
   {
         flex: 1;
        display: inline-flex;
       justify-content: center;
       align-items: center;
       margin-right: 2rem;
   }
   .attention_of_content
   {
       width: 93%;
       margin: 1rem auto 0;
   }
   .attention_of_content_info
   {
       width: 100%;
       height: 5rem;
       background: white;
       border-radius: 0.3rem;
       display: inline-flex;
       justify-content: center;
       align-items: center;
   }
   .attention_of_content_info_img,.attention_of_content_info_name,
   .attention_of_content_info_btn
   {
      display: inline-flex;
      justify-content: center;
      align-items: center;
   }
   .attention_of_content_info_img
   {
       width: 5rem;
       height: 5rem;
       background: chartreuse;
   }
   .attention_of_content_info_btn
   {
       width: 6rem;
       height: 5rem;
       /* background: chartreuse; */
   }
   .attention_of_content_info_btn button
   {
       width: 80%;
       height: 1.7rem;
       background: rgb(247, 215, 221);
       border: 0;
       border-radius: 5rem;
       color: orangered;
       font-size: 0.85rem;
   }
   .attention_of_content_info_name
   {
       flex:1;
       height: 5rem;
       background: rgb(255, 0, 179);
   }
   .attention_of_teacher_end
   {
       width: 100%;
       height: 4rem;
       display: inline-flex;
       justify-content: center;
       align-items: center;
       color: grey;
       font-size: 0.9rem;
   }
</style>