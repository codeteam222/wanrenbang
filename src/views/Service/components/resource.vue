<template>
  <div class="service-resource">
    <b-banner text="全心全意为用户服务" bg-color="rgba(59, 172, 106, 0.8)"></b-banner>
    <b-search @change="handleSearch"></b-search>
    <c-feed :data="commentList" @load="load">
      <template v-slot="scope">
        <div :class="['state', 'state-' + scope.data.state]" @click="handlerAction(scope.data)">
          {{ stateMap[scope.data.state] }}
        </div>
      </template>
      <template v-slot:detailAction="scope">
        <div :class="['state', 'state-' + scope.data.state]" @click="handlerAction(scope.data)">
          {{ stateMap[scope.data.state] }}
        </div>
      </template>
    </c-feed>
  </div>
</template>

<script>
import Feed from "@/components/comm/Feed/index";
import BBanner from "./banner";
import BSearch from "./search";
export default {
  components: {
    "c-feed": Feed,
    "b-banner": BBanner,
    "b-search": BSearch
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
        0: "关注",
        1: "已关注",
        2: "广告"
      }
    };
  },
  methods: {
    handlerAction(data) {
      if (data.state === 0) {
        this.$set(data, "state", 1);
      } else if (data.state === 1) {
        this.$set(data, "state", 0);
      }
    },
    load(done) {
      const copy = [].concat(this.commentList);
      this.commentList = this.commentList.concat(copy);
      done();
    },
    handleSearch(d) {
      console.log(d);
    }
  }
};
</script>

<style lang="less" scoped>
.state {
  width: 40px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  border-radius: 15px;
  font-size: 6px;
  color: #fff;
}
.state-0 {
  background-color: #ec7259;
}
.state-1 {
  background-color: #5ab963;
}
.state-2 {
  background-color: rgba(255, 153, 0, 1);
}
</style>
