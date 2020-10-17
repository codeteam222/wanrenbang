<template>
  <div class="comment-list">
    <div class="header">{{ title }}</div>
    <div v-for="(item, index) in data" :key="index" class="comment-item">
      <div class="avatar">
        <img :src="item.head_img_src" />
      </div>
      <div class="content">
        <div class="ceil user-box">
          <div class="user-info">
            <div class="nickname">{{ item.username }}</div>
            <div class="time">{{ item.add_time }}</div>
          </div>
          <div>
            <div class="zan" @click="handleOperation('zan', item)">
              <van-icon :name="item.is_like ? 'good-job' : 'good-job-o'" />{{ item.like_num || 0 }}
            </div>
          </div>

          <!--  -->
        </div>
        <div class="ceil comment-txt">{{ item.scontent }}</div>
        <div v-if="!noReplay" class="ceil reply-num" @click="openReplys(item)">
          查看{{ item.times }}条回复>
        </div>
      </div>
    </div>
    <div class="load-box" v-if="!noLoad">
      <span class="load-more" v-if="!isFinshed" @click="loadMore">查看更多</span>
      <span v-else>到底了</span>
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
    isFinshed: {
      type: Boolean,
      default: false
    },
    noLoad: {
      type: Boolean,
      default: false
    },
    noReplay: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    loadMore() {
      this.$emit("load");
    },
    handleOperation(type, item) {
      if (type === "zan") {
        this.$fetch
          .form("/Home/Create/pub_add/mcode/ape5f8a911d29574", {
            cid: item.cid
          })
          .then(({ code }) => {
            const value = parseInt(item.like_num);
            if (code === -2) {
              this.$set(item, "like_num", value - 1);
            } else {
              this.$set(item, "like_num", value + 1);
            }
            this.$set(item, `is_like`, !item.is_like);
          });
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
.zan i {
  vertical-align: middle;
  font-size: 16px;
  font-size: 16px;
  margin-right: 3px;
  margin-top: -3px;
}
.load-box {
  font-size: 14px;
  text-align: center;
  padding-bottom: 10px;
  span {
    padding: 25px;
  }
}
</style>
