<template>
    <div class="mine_container">
       <div class="mine_wrapper">
           <div class="mine_wrapper_title">
               <div class="mine_wrapper_img">
                   <img src=""/>
               </div>
           </div>
       </div> 
       <div class="mine_input_container">
           <div class="mine_input_text">
               <input type="number" name="" id="" placeholder="请输入手机号">
           </div>
           <div class="mine_input_password">
              <input type="password" name="" id="" placeholder="请输入密码">
           </div>
           <div class="mine_verify">
           <div>找回密码</div>
           <div>注册/验证码登录</div>
           </div>
           <div class="mine_button">
               <button>登录</button>
           </div>
       </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    computed: {},
    methods: {},
    mounted() {},
    }
</script>
<style  scoped>
.mine_container
{
    width: 100%;
    /* background: red; */
}
.mine_wrapper
{
    width: 100%;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mine_wrapper_title
{
    width: 100%;
    height: 15rem;
    background: chartreuse;
     display: flex;
    justify-content: center;
    align-items: center;
}
.mine_wrapper_img
{
    width: 100%;
    height: 6.5rem;
    background: crimson;
}
.mine_input_container
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.mine_input_text
{
    width: 80%;
    height: 4.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.mine_input_password
{
    width: 80%;
    height: 4.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.mine_input_container div input
{
    width: 100%;
    height: 4rem;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom: 1px solid gray;
    /* border-radius: 2.5rem; */
    /* border: 1px solid grey; */
}
.mine_verify
{
     width: 80%;
    height: 4.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    /* background: chartreuse; */
}
.mine_button{
     width: 80%;
    height: 7rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}
.mine_button button
{
    width: 100%;
    height: 3.5rem;
    border-radius: 3.5rem;
    border: 0;
    background: orange;
    color: white;
}
</style>