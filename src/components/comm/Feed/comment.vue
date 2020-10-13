<template>
  <div class="comment-list">
    <comment-list
      :data="data"
      title="评论"
      @openReplys="openReplys"
      @load="getComment"
      :isFinshed="isFinshed"
    ></comment-list>
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
    id: {
      type: String
    },
    replys: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      data: [],
      params: {
        p: 1,
        n_id: this.id
      },
      loading: false,
      isFinshed: false
    };
  },
  watch: {
    id(now) {
      if (now) {
        this.getComment();
      } else {
        this.data = [];
        this.params.p = 1;
      }
    }
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      if (this.loading) return;
      const currentPage = this.params.p;
      const p = currentPage === 1 ? 1 : currentPage + 1;
      this.loading = true;
      this.$fetch
        .get("/Home/List/index/mcode/ape5f8554787a907", {
          ...this.params,
          p
        })
        .then(({ data }) => {
          const { table_data, totalpages } = data;
          this.data = this.data.concat(table_data);
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
    },
    handleOperation(type, item) {
      if (type === "zan") {
        if (item.isZan) return;
        this.$set(item, "zanNum", item.zanNum ? item.zanNum + 1 : 1);
        item.isZan = true;
      }
    },
    openReplys(item) {
      this.$refs.replys.open({ data: item });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/comment.less";
</style>
