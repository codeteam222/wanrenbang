<template>
  <van-popup
    v-model="visible"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    :duration="duration"
    lock-scroll
    get-container="body"
  >
    <c-popup-layout title="我的收藏/关注/分享" @back="back" :tabs="tabs" @change="tabChange">
      <b-collection v-if="type === 'collection'"></b-collection>
      <b-follow v-if="type === 'follow'"></b-follow>
      <b-share v-if="type === 'share'"></b-share>
    </c-popup-layout>
  </van-popup>
</template>

<script>
import collection from "./collection";
import follow from "./follow";
import share from "./share";
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "b-collection": collection,
    "b-follow": follow,
    "b-share": share,
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
