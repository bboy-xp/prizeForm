<template>
  <div class="container">
    <div class="navContent">
      <div class="header-logo">
        xp后台管理系统
      </div>
      <div class="user-panel">
        <div class="user-panel-headImg">
          <img class="headImg" src="../../../assets/img/headImg.jpg" alt="404">
        </div>
        <div><i class="el-icon-circle-check-outline"></i><span class="user-panel-text">超级管理员</span></div>
        <div class="user-panel-edit-admin"><i class="el-icon-edit"></i><span class="user-panel-text user-panel-text-color">管理员管理入口</span></div>
      </div>
      <div class="sidebar-nav-heading">
        <span>Controller </span>
        <span>管理控制中心</span>
      </div>
      <div class="nav">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">链接管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-tickets"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
        </el-menu>
      </div>
      
    </div>
    <div class="tableContent">
      <dic class="system-head">
        <span class="system-head-text">欢迎你, 超级管理员</span>
      </dic>
      <div class="tableBox">
        <div class="addStaffContent">
          <div class="inputContent">
            <span class="staffNameText">用户名：</span>
            <el-input v-model="staffName" placeholder="请输入用户名"></el-input>
          </div>
          <div class="submitBtn">
            <el-button type="primary">创建</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffName: "",
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
}
.header-logo {
  height: 57px;
  font-size: 16px;
  text-align: center;
  line-height: 57px;
  color: #0e90d2;
  border-right: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.user-panel {
  padding: 28px 22px 22px 22px;
  border-right: solid 1px #e6e6e6;
}
.user-panel-headImg {
  border-radius: 50%;
  width: 82px;
  height: 82px;
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
}
.user-panel-text {
  margin-left: 5px;
  
}
.user-panel-text-color {
  color: #0e90d2;
}
.user-panel-edit-admin {
  font-size: 12px;
  margin-top: 5px;
}
.headImg {
  width: 82px;
  height: 82px;
}
.navContent {
  flex-basis: 18%;
}
.sidebar-nav-heading {
  padding: 24px 17px;
  font-size: 15px;
  font-weight: 500;
  border-top: solid 1px #e6e6e6;
  border-right: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.tableContent {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.system-head {
  height: 57px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;

}
.system-head-text {
  color: #999;
  font-size: 14px;
  margin-right: 5vw;
}
.tableBox {
  flex: 1;
  background-color: rgb(233, 236, 243);
  padding: 20px;
}
.addStaffContent {
  padding: 40px 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.inputContent {
  display: flex;
}
.staffNameText {
  width: 100px;
  line-height: 40px;
}
.submitBtn {
  margin-top: 20px;
  margin-left: 14%;
}
</style>