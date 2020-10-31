<template>
  <div class="c-feed feed-wrapper">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <template v-for="(item, index) in data">
        <feed :key="index" :data="item" :actions="actions" @action="action" :type="type" @detail="openDetail">
          <template v-slot:content="{ data }">
            <slot name="content" v-bind:data="data" :index="index"></slot>
          </template>
          <template v-slot="{ data }">
            <slot v-bind:data="data" :index="index"></slot>
          </template>
        </feed>
      </template>
    </van-list>
    <detail
      ref="commentDetail"
      :data="currentComment"
      :type="type || currentComment.type"
      @close="closeDetail"
    >
      <template v-slot="{ data }">
        <slot name="detailAction" v-bind:data="data"></slot>
      </template>
    </detail>
  </div>
</template>

<script>
import detail from "./detail";
import feed from "./feed";
export default {
  components: {
    detail: detail,
    feed: feed
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "resouce"
    },
    actions: {
      type: Array,
      default: () => ["share", "comment", "like", "collect"]
    }
  },
  data() {
    return {
      finished: false,
      loading: false,
      currentComment: {}
    };
  },
  methods: {
    reset() {
      this.finished = false;
      this.onLoad();
    },
    onLoad() {
      this.loading = true;
      this.$emit("load", this.done);
    },
    done(isFinsh = false) {
      this.finished = isFinsh;
      this.loading = false;
    },
    openDetail(info) {
      console.log(info);
      this.currentComment = info;
      this.$refs.commentDetail.open();
    },
    closeDetail() {
      this.currentComment = {};
    },
    action(type, item) {
      this.$emit("action", type, item);
    }
  }
};
</script>
