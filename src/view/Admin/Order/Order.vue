<template>
  <div class="container">
    <div class="navContent">
      <div class="header-logo">
        <span class="myLogo">xp</span>后台管理系统
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
          default-active="2"
          class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="gotoLinks">
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
      <div class="system-head">
        <span class="system-head-text">欢迎你, 超级管理员</span>
      </div>
      <div class="tableBox">
        <el-select @change="selectChange" v-model="selectedStaff" placeholder="查看员工业绩">
          <el-option
            v-for="item in options"
            :key="item.staffId"
            :label="item.staffId"
            :value="item.staffId">
          </el-option>
        </el-select>
        <el-button @click="getAllOrder" type="primary">显示全部订单</el-button>
        <el-button @click="exportExcel" class="exportExcel" type="primary"><i class="el-icon-plus"></i><span>导出Excel</span></el-button>
        <div class="tableBox">
        <el-table
          :data="orderTableData"
          stripe
          style="width: 100%"
          id="out-table">
          <el-table-column
            prop="num"
            label="#"
            width="60">
          </el-table-column>
          <el-table-column
            prop="staffId"
            label="推广人"
            width="80">
          </el-table-column>
          <el-table-column
            prop="product"
            label="产品"
            width="80">
          </el-table-column>
          <el-table-column
            prop="phoneCardType"
            label="充值卡类型"
            width="90">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="phoneNum"
            label="电话号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省"
            width="80">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市"
            width="80">
          </el-table-column>
          <el-table-column
            prop="area"
            label="区"
            width="80">
          </el-table-column>
          <el-table-column
            prop="address"
            label="详细地址"
            width="400">
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="提交时间"
            width="110">
          </el-table-column>
          <el-table-column
            label="操作"
            >
            <template slot-scope="scope">
              <div class="deleteBtn"  @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i><span class="text-margin">删除</span></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
      selectedStaff: "",
      orderTableData: [],
      options: []
    };
  },
  methods: {
    gotoLinks() {
      this.$router.replace({ path: "/admin/links" });
    },
    async selectChange() {
      // console.log(this.selectedStaff);
      const selectedStaff = this.selectedStaff;
      const getSelectedData = await axios.post("/getSelectedData", {
        selectedStaffId: selectedStaff
      });
      // console.log(getSelectedData.data);
      this.orderTableData = getSelectedData.data;
    },
    async getAllOrder() {
      const getOrderTableData = await axios.get("/getOrderTableData");
      this.orderTableData = getOrderTableData.data;
    },
    handleDelete(index, row) {
      // console.log(index);
      // console.log(row);
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(async () => {
          const result = await axios.post("/deleteUserData", row);

          this.orderTableData = result.data;

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
          "订单表.xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    }
  },
  async mounted() {
    //判断用户是否登录
    if (!!localStorage.getItem("adminId")) {
      //用户已登陆
    } else {
      this.$router.replace("/admin/adminLogin");
    }

    const getAllStaff = await axios.get("/getAllStaff");
    this.options = getAllStaff.data;

    const getOrderTableData = await axios.get("/getOrderTableData");
    this.orderTableData = getOrderTableData.data;
    // console.log(this.orderTableData);
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
  font-size: 16px
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
.exportExcel {
  width: 120px;
  margin-bottom: 10px;
  margin-left: 15px;
}
</style>