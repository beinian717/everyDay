<template>
   <div>
           <div class="rigister_title">
               <div class="rigister_img">
                   <img src="../../assets/msmk.png"/>
               </div>
           </div>
        <div >
             <div class="rigister_phone">
             <input type="number" name="" id="" v-model="user" placeholder="请输入手机号">
             <button style="color:orange" @click="onClick">获取验证码</button>
        </div>
        <div class="rigister_phone">
             <input type="number" name="" id="" v-model="code" placeholder="请输入验证码">
        </div>
          <div class="rigister_phone">
             <input type="password" name="" id="" placeholder="*未注册的手机号将自动注册">
             <button style="color:grey">使用密码登录</button>
        </div>
        </div>
        <div class="rigister_confirm">
            <button @click="denglu">登录</button>
    </div>  
   </div>
</template>
<script>
export default {
 computed: {
 },
 data(){
     return{
         user:"",
         code:""
     }  
 },
 methods:{
    async onClick(){
        let res = await this.$http.post("/api/app/smsCode",{mobile:this.user,sms_type:'login'})
            console.log(res.data)
        
        
     },
    async denglu(){
         let resdeng = await this.$http.post("/api/app/login",{mobile:this.user,sms_code:this.code,type:2,client:1})
            console.log(resdeng.data)
            window.localStorage.setItem("deng_token",resdeng.data.data.remember_token)
            window.localStorage.setItem("dengid",resdeng.data.data.id)
     }
 }
}
</script>
<style>
   .rigister_title
{
    width: 100%;
    height: 8rem;
    /* background: chartreuse; */
     display: flex;
    justify-content: center;
    align-items: center;
}
.rigister_img
{
    width: 100%;
    height: 6.5rem;
    /* background: crimson; */
     display: flex;
    justify-content: center;
    align-items: center;
}
   .rigister_phone
   {
       width: 100%;
    height: 64px;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
     font-size: 0.7rem;
   }
   .rigister_phone_active
   {
       border-bottom: 1px solid rgb(218, 143, 3);
   }
   .rigister_phone input
   {    
       flex: 1;
       border: 0;
       padding-left: 20px;
       
   }
   .rigister_phone button
   {
       height: 40px;
       width: 120px;
       border: 0;
       background: white;
   }
   .rigister_confirm
   {
       width: 100%;
       height: 64px;
       display: inline-flex;
       justify-content: center;
       align-items: center;
       font-size: 0.7rem;
   }
   .rigister_confirm button
   {
       width: 64%;
       height: 40px;
       color: white;
       border: 0;
       border-radius: 40px;
       background: orangered;
   }
   </style>