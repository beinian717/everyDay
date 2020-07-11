<template>
    <div class="mine_container">
       <div class="mine_wrapper">
           <div class="mine_wrapper_title">
               <div class="mine_wrapper_img">
                   <img src="../assets/msmk.png"/>
               </div>
           </div>
       </div> 
       <div class="mine_input_container">
           <div class="mine_input_text">
               <input type="number" v-model="mobile" name="" id="" placeholder="请输入手机号">
           </div>
           <div class="mine_input_password">
              <input type="password" v-model="password" name="" id="" placeholder="请输入密码">
           </div>
           <div class="mine_verify">
           <div @click="getPasswork">找回密码</div>
           <div @click="rigister">注册/验证码登录</div>
           </div>
           <div class="mine_button">
               <button v-on:click="goLogin">登录</button>
           </div>
       </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
           mobile:'',
           password:''
        };
    },
    computed: {},
    methods: {
        getPasswork(){
           this.$router.push("/getPasswork")
        },
        rigister(){
             this.$router.push("/register")
        },
        goLogin(){
            this.$http.post('/api/app/login',{mobile:this.mobile,password:this.password,type:1}).then((res)=>{
                console.log(res.data)
                if(res.data.msg=='操作成功'){
                    this.$router.push({
                        path:'/mymine',
                        query:{
                            mobile:this.mobile
                        }
                    })
                }else{
                    alert('111')
                }
                
            })
        }
    },
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
    /* background: green; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.mine_wrapper_title
{
    width: 100%;
    height: 8rem;
    /* background: chartreuse; */
     display: flex;
    justify-content: center;
    align-items: center;
}
.mine_wrapper_img
{
    width: 100%;
    height: 6.5rem;
    /* background: crimson; */
     display: flex;
    justify-content: center;
    align-items: center;
}
.mine_input_container
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.7rem;
}
.mine_input_text
{
    width: 80%;
    height: 3.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.mine_input_password
{
    width: 80%;
    height: 3.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.mine_input_container div input
{
    width: 100%;
    height: 3rem;
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
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    /* background: chartreuse; */
}
.mine_button{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mine_button button
{
    width: 70%;
    height: 40px;
    color: white;
    border: 0;
    border-radius: 40px;
    background: orangered;
}
</style>