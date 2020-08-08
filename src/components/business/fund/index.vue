<template>
  <van-popup
    v-model="visible"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    :duration="duration"
  >
    <c-popup-layout :title="title" @back="back" :tabs="tabs" @change="tabChange">
      <c-recharge-history v-if="type === 'recharge'"></c-recharge-history>
      <C-Withdraw-history v-else-if="type === 'withdraw'"></C-Withdraw-history>
    </c-popup-layout>
  </van-popup>
</template>

<script>
import Recharge from "./Recharge";
import Withdraw from "./Withdraw";
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "c-recharge-history": Recharge,
    "C-Withdraw-history": Withdraw,
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      visible: false,
      type: "",
      tabs: [],
      duration: "0.3",
      backCb: null,
      fiedTitle: ""
    };
  },
  computed: {
    title() {
      const map = {
        recharge: "充值记录",
        withdraw: "提现记录"
      };
      return this.fiedTitle || map[this.type];
    }
  },
  methods: {
    open(config) {
      this.type = config.type;
      this.tabs = config.tabs || [];
      this.duration = config.duration || "0.3";
      this.backCb = config.back || null;
      this.fiedTitle = config.title || "";
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    back() {
      if (typeof this.backCb === "function") {
        this.backCb(this.close);
      } else {
        this.close();
      }
    },
    tabChange(tab) {
      console.log(tab);
      this.type = tab;
    }
  }
};
</script>

<style lang="less">
.van-popup--right {
  width: 100%;
}
</style>
<style lang="less" scoped>
/deep/ .van-tabs {
  .van-tabs__line {
    width: 60px !important;
  }
}
</style>
