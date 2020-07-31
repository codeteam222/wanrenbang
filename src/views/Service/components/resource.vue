<template>
  <div class="service-resource">
    <b-banner text="全心全意为用户服务" ></b-banner>
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
          avatar: require("@/assets/img/avatar.png"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "圣卡洛斯考虑好开发来",
          imgs: [
            require("@/assets/img/1-1.png"),
            require("@/assets/img/1-2.png"),
            require("@/assets/img/1-3.png")
          ],
          state: 2,
          sex: 0
        },
        {
          avatar: require("@/assets/img/avatar1.png"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "圣卡洛斯考虑好开发来",
          imgs: [
           require("@/assets/img/2-1.png"),
           require("@/assets/img/2-2.png"),
           require("@/assets/img/2-3.png")
          ],
          state: 1,
          sex: 1
        },
        {
          avatar: require("@/assets/img/avatar2.png"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "圣卡洛斯考虑好开发来",
          imgs: [
            require("@/assets/img/3-1.png"),
            require("@/assets/img/3-2.png"),
            require("@/assets/img/3-3.png")
          ],
          state: 0,
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
  width: 60px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 25px;
  font-size: 12px;
  color: #fff;
}
.state-1{
  background-color: #cccccc;
}
.state-0 {
  background-color: rgba(90, 185, 99, 1);
}
.state-2 {
  background-color:rgba(255, 153, 0, 1);
}
</style>
