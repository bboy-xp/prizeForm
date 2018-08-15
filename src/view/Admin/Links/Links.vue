<template>
  <div class="container">
    <div class="navContent">
      <div class="header-logo">
        <span class="myLogo">xp</span>
        后台管理系统
      </div>
      <div class="user-panel">
        <div class="user-panel-headImg">
          <img class="headImg" src="../../../assets/img/headImg.jpg" alt="404">
        </div>
        <div><i class="el-icon-circle-check-outline"></i><span class="user-panel-text">超级管理员</span></div>
        <div class="user-panel-edit-admin"><i class="el-icon-edit"></i><span class="user-panel-text user-panel-text-color">管理员管理入口</span></div>
      </div>
      <div class="sidebar-nav-heading">
        <span class="nav-heading-text">Controller </span>
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
      <div class="system-head">
        <span class="system-head-text">欢迎你, 超级管理员</span>
      </div>
      <div class="tableBox">
        <div class="addStaffContent">
          <el-button @click="addStaff" class="addStaffBtn" type="primary"><i class="el-icon-plus"></i><span>添加链接</span></el-button>
          <el-button @click="exportExcel" class="addStaffBtn" type="primary"><i class="el-icon-plus"></i><span>导出Excel</span></el-button>

        </div>
        <el-table
          :data="linksTableData"
          stripe
          style="width: 100%"
          id="out-table">
          <el-table-column
            prop="staffId"
            label="员工名"
            width="100">
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
            label="操作"
            
            >
            <template slot-scope="scope">
              <div class="deleteBtn" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i><span class="text-margin">删除</span></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      linksTableData: []
    };
  },
  async mounted() {
    //判断用户是否登录
    if (!!localStorage.getItem("adminId")) {
      //用户已登陆
    } else {
      this.$router.replace("/admin/adminLogin");
    }

    const getLinksTableData = await axios.get("/getLinksTableData");
    this.linksTableData = getLinksTableData.data;

    console.log(document.querySelector("#out-table"));
  },
  methods: {
    gotoOrder() {
      this.$router.replace({ path: "/admin/order" });
    },
    addStaff() {
      this.$router.replace({ path: "/admin/addStaff" });
    },
    handleDelete(index, row) {
      console.log(index);
      console.log(row);
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(async () => {
          const result = await axios.post("/deleteStaff", row);

          this.linksTableData = result.data;

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    exportExcel() {
      /* generate workbook object from table */
      var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
      /* get binary string as output */
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "员工表.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
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
.myLogo {
  font-size: 16px;
  font-weight: bold;
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
  flex-basis: 15%;
}
.sidebar-nav-heading {
  padding: 24px 17px;
  font-size: 15px;
  font-weight: 500;
  border-top: solid 1px #e6e6e6;
  border-right: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.nav-heading-text {
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
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