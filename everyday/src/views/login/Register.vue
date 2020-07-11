<template>
  <div>
    <div class="rigister_title">
      <div class="rigister_img">
        <img src="../../assets/msmk.png" />
      </div>
    </div>
    <div>
      <div class="rigister_phone">
        <input type="number" name id v-model="user" placeholder="请输入手机号" />

        <button :class="this.isClick?'getCode':'getGrey'" v-on:click="onClick">{{codeText}}</button>
      </div>
      <div class="rigister_phone">
        <input type="number" name id v-model="code" placeholder="请输入验证码" />
      </div>
      <div class="rigister_phone">
        <input type="password" name id placeholder="*未注册的手机号将自动注册" />
        <button style="color:grey" v-on:click="userPassword">使用密码登录</button>
      </div>
    </div>
    <div class="rigister_confirm">
      <button v-on:click="toLogin">登录</button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      user: "",
      code: "",
      id: "",
      time: 60,
      isClick: true,
      codeText: "获取验证码"
    };
  },
  methods: {
     onClick() {
      if (this.isClick) {
            this.$http.post("/api/app/smsCode", { mobile: this.user, sms_type: "login" }).then(res => {
          window.console.log(res.data);
             this.id = setInterval(() => {
          this.time--;
          this.isClick = false;
          this.codeText = `发送验证码${this.time}`;
         
          if (this.time <= 0) {
            this.time = 60;
            this.isClick = true;
            this.codeText = `获取验证码`;
            clearInterval(this.id);
          }
        }, 1000);
        });
      }
    },
    async toLogin() {
      await this.$http
        .post("/api/app/login", {
          mobile: this.user,
          sms_code: this.code,
          type: 2,
          client: 1
        })
        .then(res => {
          window.console.log(res.data);
          //  过期时间字符串
          window.localStorage.setItem(
            "adminToken",
            res.data.data.remember_token
          );
          //  用户id
          window.localStorage.setItem("userid", res.data.data.id);
          console.log(res.data.data.is_new)
          if(res.data.data.is_new==2){
              this.$router.push('/mymine')
          }else if(res.data.data.is_new==1){
              this.$router.push({
                  path:'/setpassword',
                  query:{
                      users:this.user,
                      codes:this.code
                  }
              })
          }
        });
    },
    userPassword(){
        this.$router.push('/getpasswork')
    }
  },
  computed: {},
  mounted() {}
};
</script>
<style>
.rigister_title {
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rigister_img {
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rigister_phone {
  width: 100%;
  height: 64px;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.7rem;
}
.rigister_phone_active {
  border-bottom: 1px solid rgb(218, 143, 3);
}
.rigister_phone input {
  flex: 1;
  border: 0;
  padding-left: 20px;
}
.rigister_phone button {
  height: 40px;
  width: 120px;
  border: 0;
  background: white;
}
.rigister_confirm {
  width: 100%;
  height: 64px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
}
.rigister_confirm button {
  width: 64%;
  height: 40px;
  color: white;
  border: 0;
  border-radius: 40px;
  background: orangered;
}
.getCode {
  color: orange;
}
.getGrey {
  color: #ddd;
}
</style>