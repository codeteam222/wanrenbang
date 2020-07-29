<template>
  <van-popup
    v-model="visible"
    :position="position"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="type === 'money'"
    :class="{ 'is-money': type === 'money' }"
    :duration="duration"
  >
    <template v-if="type === 'money'">
      <b-money></b-money>
    </template>
    <template v-else>
      <c-popup-layout :title="title" @back="back" :tabs="tabs" @change="tabChange">
        <b-explain v-if="type === 'explain'"></b-explain>
        <b-project v-if="type === 'project'" :type="currentTab"></b-project>
      </c-popup-layout>
    </template>
  </van-popup>
</template>

<script>
import Explain from "./explain";
import Money from "./money";
import Project from "../project/index";
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "b-explain": Explain,
    "b-money": Money,
    "b-project": Project,
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      visible: false,
      type: "",
      tabs: [],
      position: "right",
      currentTab: "all",
      duration: "0.3",
      backCb: null
    };
  },
  computed: {
    title() {
      const map = {
        explain: "聚合联创计划",
        project: "项目中心"
      };
      return map[this.type];
    }
  },
  methods: {
    open(config) {
      this.type = config.type;
      this.tabs = config.tabs || [];
      this.position = config.position || "right";
      this.duration = config.duration || "0.3";
      this.backCb = config.back || null;
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    tabChange(name) {
      this.currentTab = name;
    },
    back() {
      if (typeof this.backCb === "function") {
        this.backCb(this.close);
      } else {
        this.close();
      }
    }
  }
};
</script>

<style lang="less">
.is-money {
  background-color: transparent;
}
.van-popup--right {
  width: 100%;
}
</style>
