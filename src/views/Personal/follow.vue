<template>
  <div class="service-resource">
    <c-popup-layout
      title="我的收藏/关注/动态"
      @back="$router.push({ name: 'Personal' })"
      :tabs="tabs"
      @change="tabChnage"
    >
      <b-fans v-if="activeTab === 'follow'" :data="fansList"></b-fans>
      <c-feed v-else :data="activeTab === 'collection' ? commentList : shareList" @load="load">
        <template v-if="activeTab === 'share'" v-slot="scope">
          <div class="delete" @click="deleteShare(scope)">删除</div>
        </template>
      </c-feed>
    </c-popup-layout>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
import Feed from "@/components/comm/Feed/index";
import BFans from "@/components/business/fans";
export default {
  components: {
    "c-popup-layout": PopupLayout,
    "c-feed": Feed,
    "b-fans": BFans
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
      shareList: [
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
          sex: 0
        }
      ],
      tabs: [
        {
          title: "我的收藏",
          name: "collection"
        },
        {
          title: "我的关注",
          name: "follow"
        },
        {
          title: "我的分享",
          name: "share"
        }
      ],
      fansList: [
        {
          avatar: require("@/assets/img/avatar.jpg"),
          name: "爱吃萝卜的兔子",
          state: 1
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          name: "爱吃萝卜的兔子2",
          state: 1
        }
      ],
      activeTab: "collection"
    };
  },
  methods: {
    load(done) {
      const copy = [].concat(this.commentList);
      this.commentList = this.commentList.concat(copy);
      done();
    },
    tabChnage(name) {
      this.activeTab = name;
    },
    deleteShare(scope) {
      this.shareList.splice(scope.index, 1);
    }
  }
};
</script>

<style lang="less" scoped>
.delete {
  width: 50px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(109, 117, 241, 1);
}
</style>
