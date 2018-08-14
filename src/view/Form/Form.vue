<template>
  <div class="inner">
    <div class="wrap">
      <div class="header">
        <h3 class="title">
          华为智能手环-官方活动-正式启动
        </h3>
        <div class="owner">
          <span class="date">{{date}}</span>
          <a class="titleText" href="#">官方礼品发放中心</a>
          <span @click="gotoReport" class="report">举报</span>
        </div>
      </div>
      <div class="content">
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img1.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img2.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img3.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img4.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img5.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img6.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img7.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img8.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img9.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img10.jpg" alt="404">
        </div>
        <div class="imgContent">
          <img class="imgStyle" src="../../assets/img/img11.jpg" alt="404">
        </div>
      </div>
      <div class="join_div">
        <div class="question">请选择产品<span class="redText">*</span></div>
        <el-radio-group v-model="product">
          <el-radio label="静谧蓝"></el-radio>
          <el-radio label="摩卡棕"></el-radio>
          <el-radio label="韵律黑"></el-radio>
        </el-radio-group>
        <div class="question">电话充值卡类型<span class="redText">*</span></div>
        <el-select v-model="phoneCardType" placeholder="请选择类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="question">收货人姓名<span class="redText">*</span></div>
        <el-input v-model="name" placeholder="请输入姓名"></el-input>
        <div class="question">手机号码<span class="redText">*</span></div>
        <el-input v-model="phoneNum" placeholder="请输入手机号码"></el-input>
        <div class="question">收货地址<span class="redText">*</span></div>
        <v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
        <el-input
          class="address"
          type="textarea"
          :rows="3"
          placeholder="详细地址"
          v-model="address">
        </el-input>
        <div class="question">邮费自理<span class="redText">*</span></div>
        <div>
          <el-checkbox v-model="isAccept">请接收邮费自理</el-checkbox>
          <span class="checkboxText">( 运费+保价费在19至39元之间，收到货支付给快递小哥即可，偏远地区最高不超过39元，不接受的不予发货！）</span>
        </div>
        <div class="redText question">温馨提示</div>
        <div class="footBorder">极个别市，会出现区县填写不了的情况！这种情况您将省市区县街道一起填入详细地址即可！*亲，由于价值免费试戴-名额仅剩36名-即将恢复原价免费赠送给您，所以邮费还需自理哦(39)我们还随包裹赠送一张价值100元手机话费充值卡以弥补您的运费哦，祝您生活愉快*</div>
      </div>
      <div class="footer">
        <div @click="submit" class="submitBtn">填写好了  确认提交</div>
        <span @click="gotoReport" href="#" class="report">举报</span>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
import axios from "axios";
export default {
  components: { VDistpicker },
  data() {
    return {
      product: "",
      phoneCardType: "",
      name: "",
      phoneNum: "",
      province: "",
      city: "",
      area: "",
      address: "",
      isAccept: false,
      options: [
        {
          value: "移动",
          label: "移动"
        },
        {
          value: "联通",
          label: "联通"
        },
        {
          value: "电信",
          label: "电信"
        }
      ]
    };
  },
  computed: {
    date() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      return `${year}-${month}-${strDate}`;
    }
  },
  mounted() {
    // var date = new Date();
    // var year = date.getFullYear();
    // var month = date.getMonth() + 1;
    // var strDate = date.getDate();
    // console.log(year, month, strDate);
  },
  methods: {
    onChangeProvince(e) {
      console.log(e);
      this.province = e.value;
    },
    onChangeCity(e) {
      console.log(e);
      this.city = e.value;
    },
    onChangeArea(e) {
      console.log(e);
      this.area = e.value;
    },
    gotoReport() {
      this.$router.push("/report");
    },
    async submit() {
      const id = this.$route.query.id;
      const staffId = this.$route.query.staffId;
      const userData = {
        id: id,
        staffId: staffId,
        product: this.product,
        phoneCardType: this.phoneCardType,
        name: this.name,
        phoneNum: this.phoneNum,
        province: this.province,
        city: this.city,
        area: this.area,
        address: this.address,
        isAccept: this.isAccept
      };
      if (this.isAccept) {
        if (
          this.product &&
          this.phoneCardType &&
          this.name &&
          this.phoneNum &&
          this.province &&
          this.city &&
          this.area &&
          this.address
        ) {
          const firstStr = this.phoneNum.substr(0, 1);
          // console.log(firstStr);
          // console.log(this.phoneNum.length);
          if (this.phoneNum.length == 11 && firstStr == "1") {
            const submitRes = await axios.post("/saveUserData", userData);
            if (submitRes.data === "success") {
              this.$message({
                message: "提交成功",
                type: "success"
              });
              location.reload();
            } else {
              this.$message.error("提交失败，一个电话号只能参加一次");
              location.reload();
            }
            console.log(submitRes.data);
          } else {
            alert("手机号码不正确");
          }
        } else {
          alert("含*的内容不能为空");
        }
      } else {
        alert("请接收邮费自理");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.inner {
  margin: 1.2vh;
  height: 98vh;
  width: 96vw;
  overflow: scroll;
}
.wrap {
  max-width: 640px;
  margin: 0 auto;
}
.date {
  margin-right: 5px;
}
.titleText {
  color: #607fa6;
  text-decoration: none;
}
.title {
  padding-bottom: 10px;
  margin-bottom: 14px;
  border-bottom: 1px solid #e7e7eb;
  font-size: 24px;
}
.owner {
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.report {
  margin-left: auto;
  margin-right: 5px;
  color: #607fa6;
}
.imgStyle {
  max-width: 100%;
  height: auto;
}
.checkboxText {
  font-size: 14px;
}
.redText {
  color: #fd521e;
}
.footBorder {
  padding-bottom: 5vh;
  border-bottom: 1px solid #333333;
}
.footer {
  margin-top: 4vh;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
}
.submitBtn {
  display: inline-block;
  height: 7vw;
  width: 36vw;
  text-align: center;
  line-height: 7vw;
  background-color: #ff761a;
  color: white;
}
.question {
  margin: 3vh 0;
}
.address {
  margin-top: 10px;
}
</style>

