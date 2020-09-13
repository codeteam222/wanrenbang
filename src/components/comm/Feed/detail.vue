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
    <c-popup-layout :title="detail.nickname" @back="visible = false">
      <template v-if="type === 'koiFish'">
        <koi-fish-detail :data="data">
          <template v-slot="{ data }">
            <slot v-bind:data="data"></slot>
          </template>
        </koi-fish-detail>
      </template>
      <template v-if="type === 'lock'">
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
      <comment :data="detail.comments" title="评论"></comment>
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
      visible: false,
      detail: {
        avatar: require("@/assets/img/avatar.jpg"),
        nickname: "哈哈哈哈",
        createTime: "2020-10-28 18:11:22",
        content:
          "流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",
        imgs: [
          require("@/assets/img/avatar.jpg"),
          require("@/assets/img/avatar.jpg"),
          require("@/assets/img/avatar.jpg")
        ],
        state: 0,
        sex: 1,
        comments: [
          {
            nickname: "闭关修炼",
            avatar: require("@/assets/img/avatar.jpg"),
            time: "2020-10-28 18:11:22",
            zanNum: 22,
            content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果",
            replys: [
              {
                nickname: "闭关修炼",
                avatar: require("@/assets/img/avatar.jpg"),
                time: "2020-10-28 18:11:22",
                zanNum: 22,
                content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果"
              }
            ]
          },
          {
            nickname: "闭关修炼",
            avatar: require("@/assets/img/avatar.jpg"),
            time: "2020-10-28 18:11:22",
            zanNum: 22,
            content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果",
            replys: [
              {
                nickname: "闭关修炼",
                avatar: require("@/assets/img/avatar.jpg"),
                time: "2020-10-28 18:11:22",
                zanNum: 22,
                content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果"
              }
            ]
          },
          {
            nickname: "闭关修炼",
            avatar: require("@/assets/img/avatar.jpg"),
            time: "2020-10-28 18:11:22",
            zanNum: 22,
            content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果",
            replys: [
              {
                nickname: "闭关修炼",
                avatar: require("@/assets/img/avatar.jpg"),
                time: "2020-10-28 18:11:22",
                zanNum: 22,
                content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果"
              }
            ]
          },
          {
            nickname: "闭关修炼",
            avatar: require("@/assets/img/avatar.jpg"),
            time: "2020-10-28 18:11:22",
            zanNum: 22,
            content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果",
            replys: [
              {
                nickname: "闭关修炼",
                avatar: require("@/assets/img/avatar.jpg"),
                time: "2020-10-28 18:11:22",
                zanNum: 22,
                content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果"
              }
            ]
          },
          {
            nickname: "闭关修炼",
            avatar: require("@/assets/img/avatar.jpg"),
            time: "2020-10-28 18:11:22",
            zanNum: 22,
            content: "拉萨经过了卡接受了可根据爱上了看过卡洛斯结果",
            replys: []
          }
        ]
      }
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
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
