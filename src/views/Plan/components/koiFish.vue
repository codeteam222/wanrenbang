<template>
  <div class="plan-koifish">
    <c-feed :data="commentList" @load="load">
      <template v-slot="scope">
        <div :class="['state', 'state-' + scope.data.state]" @click="handlerAction(scope.data)">
          {{ stateMap[scope.data.state] }}
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
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",
          links: [
            {
              text: "#第20200206期幸运锦鲤",
              url: "https://wwww.baidu.com"
            }
          ],
          imgs: [
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg")
          ],
          state: 0,
          sex: 0
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",
          links: [
            {
              text: "#第20200206期幸运锦鲤",
              url: "https://wwww.baidu.com"
            }
          ],
          imgs: [
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg")
          ],
          state: 1,
          sex: 1
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",
          links: [
            {
              text: "#第20200206期幸运锦鲤",
              url: "https://wwww.baidu.com"
            }
          ],
          imgs: [
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg")
          ],
          state: 2,
          sex: 0
        }
      ],
      stateMap: {
        0: "赞成",
        1: "已赞成",
        2: "已圆梦"
      }
    };
  },
  methods: {
    handlerAction(data) {
      if (data.state === 0) {
        this.$set(data, "state", 1);
      }
    },
    load(done) {
      const copy = [].concat(this.commentList);
      this.commentList = this.commentList.concat(copy);
      done();
    }
  }
};
</script>

<style lang="less" scoped>
.state {
  width: 60px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 15px;
  font-size: 12px;
  color: #fff;
}
.state-0 {
  background-color: rgb(90, 185, 99);
}
.state-1 {
  background-color: #ec7259;
}
.state-2 {
  background-color: rgb(204, 204, 204);
}
</style>
