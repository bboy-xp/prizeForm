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
          <el-menu-item index="2" @click="gotoOrder">
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
          <el-button @click="addStaff" class="addStaffBtn" type="primary"><i class="el-icon-plus"></i><span>添加链接</span></el-button>
        </div>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="staffId"
            label="员工名"
            width="80">
          </el-table-column>
          <el-table-column
            prop="formUrl"
            label="链接地址"
            width="400">
          </el-table-column>
          <el-table-column
            prop="searchUrl"
            label="数据查询后台"
            width="450">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <div class="deleteBtn"><i class="el-icon-delete"></i><span class="text-margin">删除</span></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          staffId: "1",
          formUrl: "http://www.china-liantong.com.cn/thsProduction.html?id=258",
          searchUrl: "http://www.china-liantong.com.cn/admin/Chaxun/login.html?id=258",
        },
        {
          staffId: "2",
          formUrl: "http://www.china-liantong.com.cn/thsProduction.html?id=258",
          searchUrl: "http://www.china-liantong.com.cn/admin/Chaxun/login.html?id=258",
        },
        {
          staffId: "2",
          formUrl: "http://www.china-liantong.com.cn/thsProduction.html?id=258",
          searchUrl: "http://www.china-liantong.com.cn/admin/Chaxun/login.html?id=258",
        },
      ]
    };
  },
  methods: {
    gotoOrder() {
      this.$router.replace({ path: "/admin/order" });
    },
    addStaff() {
      this.$router.replace({ path: "/admin/addStaff" });
    }
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
  padding: 10px;
  overflow: scroll;
}
.deleteBtn {
  height: 24px;
  width: 50px;
  border: 1px solid #f35842;
  color: #f35842;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-margin {
  margin-left: 3px;
}
.addStaffBtn {
  width: 120px;
  margin-bottom: 10px;
  margin-left: 15px;
}
</style>