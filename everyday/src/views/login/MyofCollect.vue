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
            </div>
        </div>
        <div class="attention_of_teacher_end">
            没有更多了
        </div>
    </div>
</template>
<script>
export default {
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
       height: 11rem;
       background: white;
       border-radius: 0.3rem;
       display: inline-flex;
       justify-content: center;
       align-items: center;
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