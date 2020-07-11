<template>
  <div>
    <div class="rigister_title">
      <div class="rigister_img">
        <img src="../../assets/msmk.png" />
      </div>
    </div>
    <div>
      <div class="rigister_phone">
        <input type="number" name v-model="phone" id placeholder="请输入手机号" />
        <button style="color:orange" @click="onClick">获取验证码</button>
        <span v-show="timeShow"></span>
      </div>
      <div class="rigister_phone">
        <input type="number" name id v-model="code" placeholder="请输入验证码" />
      </div>
      <div class="rigister_phone">
        <input type="password" name id placeholder="*未注册的手机号将自动注册" />
        <button style="color:grey">使用密码登录</button>
      </div>
    </div>
    <div class="rigister_confirm">
      <button @click="loginClick">登录</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      phone: "",
      code: "",
      times: 60,
    };
  },
  methods: {
    onClick() {
      this.$Https
        .post("/api/app/smsCode", {
          mobile: this.phone,
          sms_type: "login"
        })
        .then(res => {
          console.log(res.data);
        });
    },
    loginClick() {
      if (!this.phone) {
        Toast("手机号不能为空");
      }
      this.$Https
        .post("/api/app/login", {
          type: 2,
          mobile: this.phone,
          sms_code: this.code,
          client: 1
        })
        .then(resp => {
          console.log(resp.data);
          window.localStorage.setItem("id", resp.data.data.id);
          window.localStorage.setItem("Token", resp.data.data.remember_token);
          if (resp.data.data.is_new == 1) {
            this.$router.push("/setPassWord");
          }else{
            this.$router.push('/mymine')
          }
        });
    }
  },
  computed: {}
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
  width: 70%;
  height: 40px;
  color: white;
  border: 0;
  border-radius: 40px;
  background: orangered;
}
</style>