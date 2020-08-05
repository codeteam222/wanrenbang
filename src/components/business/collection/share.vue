<template>
  <div class="b-share">
    <c-feed :data="commentList" :actions="actions" @load="load">
      <template v-slot="scope">
        <div class="delete" @click="handlerAction(scope)">
          删除
        </div>
      </template>
    </c-feed>
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
          isLike: true
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
          isLike: true
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
          isLike: true
        }
      ],
      actions: ["share", "comment", "zan"]
    };
  },
  methods: {
    load(done) {
      const copy = [].concat(this.commentList);
      this.commentList = this.commentList.concat(copy);
      done();
    },
    handlerAction(scope) {
      this.commentList.splice(scope.index, 1);
    }
  }
};
</script>
<style lang="less" scoped>
.delete {
  width: 60px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 25px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(109, 117, 241, 1);
}
</style>
