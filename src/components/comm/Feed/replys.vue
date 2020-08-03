<template>
  <van-popup
    v-model="visible"
    class="c-feed-replys"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    lock-scroll
    get-container="body"
  >
    <c-popup-layout title="查看回复" @back="visible = false">
      <comment-list class="main-comment" :data="mainComment"></comment-list>
      <comment-list :data="data.replys" title="全部回复"></comment-list>
    </c-popup-layout>
  </van-popup>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
import CommentList from "./commentList";
export default {
  components: {
    "c-popup-layout": PopupLayout,
    "comment-list": CommentList
  },
  data() {
    return {
      visible: false,
      data: {},
      mainComment: []
    };
  },
  methods: {
    open(config) {
      this.visible = true;
      this.data = config.data;
      const mainComment = JSON.parse(JSON.stringify(config.data));
      delete mainComment.replys;
      this.mainComment = [mainComment];
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/styles/comment.less";
.c-feed-replys {
  /deep/ .main-comment {
    border-bottom: 2px solid rgb(228, 228, 228);
    padding-bottom: 0;
    margin-bottom: 15px;
    .content {
      border-bottom: none;
    }
    .comment-item {
      margin-bottom: 0;
    }
  }
}
</style>
