<template>
  <div class="container">
    <div class="title">请选择投诉原因</div>
    <group class="groupContent">
      <cell-box is-link link="/report2">
        欺诈
      </cell-box>
      <cell-box is-link link="/report2">
        色情
      </cell-box>
      <cell-box is-link link="/report2">
        政治谣言
      </cell-box>
      <cell-box is-link link="/report2">
        常识性谣言
      </cell-box>
      <cell-box is-link link="/report2">
        诱导分享
      </cell-box>
      <cell-box is-link link="/report2">
        恶意营销
      </cell-box>
      <cell-box is-link link="/report2">
        隐私信息收集
      </cell-box>
      <cell-box is-link link="/report2">
        抄袭公众号文章
      </cell-box>
      <cell-box is-link link="/report2">
        其他侵权类（冒名、诽谤、抄袭）
      </cell-box>
      <cell-box is-link link="/report2">
        违规声明原创
      </cell-box>
    </group>
  </div>
</template>

<script>
import { CellBox } from "vux";
export default {
  components: {
    CellBox,
    
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f1f0f5;
}
.title {
  padding-left: 15px;
  padding-top: 7px;
  color: #8a898e;
  line-height: 30px;
  font-size: 14px;
}
.groupContent {
  margin-top: -20px;
}
.submitBtn {
  margin: 20px 15px;
}
</style>