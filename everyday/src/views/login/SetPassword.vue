<template>
    <div>
        <div class="set_password_header">
            <div>设置密码</div>
            <div>跳过</div>
        </div>
         <div >
          <div class="set_password_phone">
             <input type="password" name="" id="" placeholder="请输入登录密码">
        </div>
        <div class="set_password_phone">
             <input type="password" name="" id="" placeholder="请再次输入密码">
        </div>
        </div>
             <div class="set_password_confirm">
            <button>确定</button>
    </div>  
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
.set_password_header
{
     width: 100%;
       height: 64px;
       display: flex;
      justify-content:space-around;
      align-items: center;
}
.set_password_header div:nth-child(1)
   {
      flex: 1;
     display: flex;
     justify-content:center;
     align-items: center;
   }
   .set_password_header div:nth-child(2)
   {
     width: 50px;
    display: flex;
    justify-content:center;
     align-items: center;
     color: grey;
   }
     .set_password_confirm
   {
       width: 100%;
       height: 64px;
       display: inline-flex;
       justify-content: center;
       align-items: center;
       font-size: 0.7rem;
   }
   .set_password_confirm button
   {
       width: 70%;
       height: 40px;
       color: white;
       border: 0;
       border-radius: 40px;
       background: orangered;
   }
   .set_password_phone
   {
       width: 100%;
    height: 64px;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
     font-size: 0.7rem;
   }
   .set_password_phone input
   {    
       flex: 1;
       border: 0;
       padding-left: 20px;
   }
</style>