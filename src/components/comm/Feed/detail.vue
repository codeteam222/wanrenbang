<template>
  <van-popup
    class="popup-feed-detail"
    v-model="visible"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    lock-scroll
    get-container="body"
  >
    <c-popup-layout title="详情" @back="close">
      <template v-if="type === 'koiFish'">
        <koi-fish-detail :data="data">
          <template v-slot="{ data }">
            <slot v-bind:data="data"></slot>
          </template>
        </koi-fish-detail>
      </template>
      <template v-else-if="type === 'lock'">
        <lock-detail :data="data">
          <template v-slot="{ data }">
            <slot v-bind:data="data"></slot>
          </template>
        </lock-detail>
      </template>
      <template v-else>
        <feed :data="data">
          <template v-slot="{ data }">
            <slot v-bind:data="data"></slot>
          </template>
        </feed>
      </template>
      <comment :id="data.n_id" title="评论"></comment>
    </c-popup-layout>
  </van-popup>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
import Feed from "./feed";
import koiFishDetail from "./koiFishDetail";
import lockDetail from "./lockDetail";
import Comment from "./comment";
export default {
  components: {
    "c-popup-layout": PopupLayout,
    feed: Feed,
    comment: Comment,
    koiFishDetail,
    lockDetail
  },
  props: {
    data: {
      type: Object
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.$emit("close");
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
