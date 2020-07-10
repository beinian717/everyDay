<template>
    <div>
        <div class="get_passwork_container">
        <div>
         <van-icon name="arrow-left" @click="gotoback"/>
        </div>
        <div>找回密码</div>
        </div>
        <div >
             <div class="get_passwork_phone">
             <input type="number" name="" id="" placeholder="请输入手机号">
             <button style="color:orange">获取验证码</button>
        </div>
        <div class="get_passwork_phone">
             <input type="number" name="" id="" placeholder="请输入验证码">
        </div>
          <div class="get_passwork_phone">
             <input type="password" name="" id="" placeholder="请输入密码">
        </div>
        </div>
        <div class="get_passwork_confirm">
            <button @click="onClick">确定</button>
        </div>
    </div>
</template>
<script>
export default {
 methods: {
     gotoback(){
         this.$router.go(-1)
     },
    onClick(){
      this.$router.push("/mymine")
    }
 },
 computed: {
 }
}
</script>
<style>
   .get_passwork_container 
   {
       width: 100%;
       height: 64px;
       display: flex;
      justify-content:space-around;
      align-items: center;
      color: rgb(80, 80, 80);
   }
   .get_passwork_container div:nth-child(1)
   {
       width: 50px;
        display: flex;
     justify-content:center;
     align-items: center;
   }
   .get_passwork_container div:nth-child(2)
   {
     flex: 1;
    display: flex;
     justify-content:center;
     align-items: center;
   }
   .get_passwork_phone
   {
       width: 100%;
    height: 64px;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
     font-size: 0.7rem;
   }
   .get_passwork_phone_active
   {
       border-bottom: 1px solid rgb(218, 143, 3);
   }
   .get_passwork_phone input
   {    
       flex: 1;
       border: 0;
       padding-left: 20px;
       
   }
   .get_passwork_phone button
   {
       height: 40px;
       width: 120px;
       border: 0;
       background: white;
   }
   .get_passwork_confirm
   {
       width: 100%;
       height: 64px;
       display: inline-flex;
       justify-content: center;
       align-items: center;
       font-size: 0.7rem;
   }
   .get_passwork_confirm button
   {
       width: 64%;
       height: 40px;
       color: white;
       border: 0;
       border-radius: 40px;
       background: orangered;
   }
</style>