<template>
    <div>
      <div class="york_header">
        约课记录
      </div>
      <div class="york_detail">
        <van-tabs color="orange" title-active-color="orange">
           <van-tab title="待上课"></van-tab>
           <van-tab title="已上课"></van-tab>
           <van-tab title="已取消"></van-tab>
        </van-tabs>  
      </div>
      <div class="york_login">
        <div>
            <img src="../assets/york_img.png" alt="">
            <br>
            <button @click="toLogin">登录/注册</button>
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
    methods: {
      toLogin(){
        this.$router.push('/mine')
      }
    },
    mounted() {},
    }
</script>
<style  scoped>
.york_header{
    width: 100%;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
}
.york_login{
    width: 100%;
    height: 29.6rem;
    background-color: rgb(240, 242, 245);
}
.york_login div{
    position: absolute;
    top: 12rem;
    left: 4rem;
}
.york_login button{
    width: 7.5rem;
    height: 1.5rem;
    font-size: 0.7rem;
    margin-left: 2.5rem;
    background-color: orange;
    border: none;
    color: white;
}
</style>