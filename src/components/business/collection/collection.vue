<template>
  <div class="b-collection">
    <c-feed :data="commentList" @load="load"></c-feed>
  </div>
</template>

<script>
import Feed from "@/components/comm/Feed/index";
export default {
  components: {
    "c-feed": Feed
  },
  data() {
    return {
      commentList: [
        {
          avatar: require("@/assets/img/avatar.png"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content: "圣卡洛斯考虑好开发来",
          imgs: [
            require("@/assets/img/1-1.png"),
            require("@/assets/img/1-2.png"),
            require("@/assets/img/1-3.png")
          ],
          state: 2,
          sex: 0,
          isLike: true,
          likeNum: "收藏"
        },
        {
          avatar: require("@/assets/img/avatar1.png"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content: "圣卡洛斯考虑好开发来",
          imgs: [
            require("@/assets/img/2-1.png"),
            require("@/assets/img/2-2.png"),
            require("@/assets/img/2-3.png")
          ],
          state: 1,
          sex: 1,
          isLike: true,
          likeNum: "收藏"
        },
        {
          avatar: require("@/assets/img/avatar2.png"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content: "圣卡洛斯考虑好开发来",
          imgs: [
            require("@/assets/img/3-1.png"),
            require("@/assets/img/3-2.png"),
            require("@/assets/img/3-3.png")
          ],
          state: 0,
          sex: 0,
          isLike: true,
          likeNum: "收藏"
        }
      ]
    };
  },
  methods: {
    load(done) {
      const copy = [].concat(this.commentList);
      this.commentList = this.commentList.concat(copy);
      done();
    }
  }
};
</script>
