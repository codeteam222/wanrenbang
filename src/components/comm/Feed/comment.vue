<template>
  <div class="comment-list">
    <comment-list :data="data" title="评论" @openReplys="openReplys"></comment-list>
    <replys ref="replys"></replys>
  </div>
</template>

<script>
import Replys from "./replys";
import CommentList from "./commentList";
export default {
  name: "Comment",
  components: {
    replys: Replys,
    "comment-list": CommentList
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    replys: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleOperation(type, item) {
      if (type === "zan") {
        if (item.isZan) return;
        this.$set(item, "zanNum", item.zanNum ? item.zanNum + 1 : 1);
        item.isZan = true;
      }
    },
    openReplys(item) {
      if (item.replys.length && this.$refs.replys) {
        this.$refs.replys.open({ data: item });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/comment.less";
</style>
