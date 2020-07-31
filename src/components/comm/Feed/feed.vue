<template>
  <div class="feed-item">
    <div class="feed-info">
      <div class="message-box">
        <img class="avatar" :src="data.avatar" />
        <div>
          <div class="nickname">
            {{ data.nickname }}
            <img v-if="data.sex === 0" class="sex" src="@/assets/img/man.png" />
            <img v-if="data.sex === 1" class="sex" src="@/assets/img/women.png" />
          </div>
          <div class="time">{{ data.createTime }}</div>
        </div>
      </div>
      <div class="action">
        <slot v-bind:data="data"></slot>
      </div>
    </div>
    <div class="feed-content" @click="openDetail(data)">
      <div class="content">{{ data.content }}</div>
      <div class="links">
        <a v-for="(link, linkIndex) in data.links" :key="linkIndex" :href="link.url" target="_blank">{{
          link.text
        }}</a>
      </div>
      <div class="imgs">
        <div class="img-item" v-for="(img, imgIndex) in data.imgs" :key="imgIndex">
          <img :src="img" />
        </div>
      </div>
    </div>
    <div class="feed-operation">
      <div class="share" @click="handleOperation('share', data)">
        <img src="@/assets/img/share.png" />{{ data.shareNum || 0 }}
      </div>
      <div class="comment" @click="handleOperation('comment', data)">
        <img src="@/assets/img/comment.png" />{{ data.commentNum || 0 }}
      </div>
      <div class="zan" @click="handleOperation('zan', data)">
        <img src="@/assets/img/zan.png" />{{ data.zanNum || 0 }}
      </div> 
	<div class="zan" @click="handleOperation('like', data)">
	<img src="@/assets/img/like.png" />{{ data.like || 0 }}
    </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    openDetail(d) {
      this.$emit("detail", d);
    },
    handleOperation(type, item) {
      if (type === "zan") {
        if (item.isZan) return;
        this.$set(item, "zanNum", item.zanNum ? item.zanNum + 1 : 1);
        item.isZan = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/feed.less";
</style>
