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
    <c-popup-layout title="查看回复" @back="back">
      <comment-list class="main-comment" :data="mainComment" no-load></comment-list>
      <comment-list :data="replays" title="全部回复" @load="getReplays" :isFinshed="isFinshed"></comment-list>
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
      params: {
        p: 1
      },
      replays: [],
      mainComment: [],
      isFinshed: false,
      loading: false
    };
  },
  methods: {
    back() {
      this.visible = false;
      this.mainComment = [];
      this.replays = [];
    },
    open(config) {
      this.visible = true;
      this.data = config.data;
      const mainComment = JSON.parse(JSON.stringify(config.data));
      this.mainComment = [mainComment];
      this.getReplays();
    },
    getReplays() {
      if (this.loading) return;
      const currentPage = this.params.p;
      const p = currentPage === 1 ? 1 : currentPage + 1;
      this.loading = true;
      this.$fetch
        .get("/Home/List/index/mcode/ape5f8554787a907", {
          cpid: this.data.cpid,
          n_id: this.data.n_id,
          ...this.params,
          p
        })
        .then(({ data }) => {
          const { table_data, totalpages } = data;
          this.replays = this.replays.concat(table_data);
          this.loading = false;
          if (totalpages === p) {
            this.isFinshed = true;
          } else {
            this.params.p++;
          }
        })
        .catch(() => {
          this.loading = false;
        });
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
