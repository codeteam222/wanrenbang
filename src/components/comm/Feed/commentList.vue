<template>
  <div class="comment-list">
    <div class="header">{{ title }}</div>
    <div v-for="(item, index) in data" :key="index" class="comment-item">
      <div class="avatar">
        <img :src="item.avatar" />
      </div>
      <div class="content">
        <div class="ceil user-box">
          <div class="user-info">
            <div class="nickname">{{ item.nickname }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
          <div class="zan" @click="handleOperation('zan', item)">
            <img src="@/assets/img/zan.png" />{{ item.zanNum || 0 }}
          </div>
        </div>
        <div class="ceil comment-txt">{{ item.content }}</div>
        <div v-if="item.replys && item.replys.length" class="ceil reply-num" @click="openReplys(item)">
          查看{{ item.replys.length }}条回复>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
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
      this.$emit("openReplys", item);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/comment.less";
</style>
