<template>
  <div class="container">
    <div class="iconContent">
      <icon type="success" is-msg></icon>
    </div>
    <div class="textContent">
      <h2 class="titleText">投诉已提交</h2>
      <p class="contentText">微信团队会尽快核实，并通过“微信团队”通知你审核结果。感谢你的支持。</p>
    </div>
    <div class="btnContent">
      <div @click="close" class="btn-area">
        <x-button type="primary" action-type="button">返回</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, XButton } from "vux";
export default {
  components: {
    Icon,
    XButton,
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$router.replace("/form");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding-top: 36px;
  text-align: center;
}
.iconContent {
  margin-bottom: 30px;
}
.textContent {
  margin-bottom: 25px;
  padding: 0 20px;
}
.btnContent {
  margin-bottom: 25px;
}
.btn-area {
  margin: 1.17647059em 15px 0.3em;
}
.titleText {
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 20px;
}
.contentText {
  font-size: 14px;
  color: #999;
}
</style>