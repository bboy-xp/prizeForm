<template>
  <div class="container">
    <div class="loginContent">
      <div class="title">xp管理后台</div>
      <div class="inputContent">
        <el-input v-model="account" placeholder="请输入账号"></el-input>
      </div>
      <div class="inputContent">
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </div>
      <div class="submitBtn" @click="loginSubmit">
        提交
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  async mounted() {
    // const res = await axios.get("/saveAdmin");
    
  },
  methods: {
    async loginSubmit() {
      console.log(this.account,this.password);
      const loginRes = await axios.post('/adminLogin',{
        account: this.account,
        password: this.password
      });
      if(loginRes.data === "success") {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
        localStorage.setItem("adminId", this.account);
        this.$router.replace("/admin/links");

      }else {
        this.$message.error('登录失败，密码错误');
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  /* height: 100vh;
  width: 100vw; */
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #e9ecf3;
}
.loginContent {
  z-index: 10;
  background-color: white;
  width: 450px;
  padding: 40px 40px 25px;
  margin: 12% auto 0 auto;
  border-radius: 4px;
}
.title {
  margin-bottom: 2vh;
}
.inputContent {
  margin-top: 3vh;
}
.submitBtn {
  background-color: #32c5d2;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 14px;
  color: white;
  display: flex;
  justify-content: center;
  margin: 5vh 0 3vh 0;
}
</style>