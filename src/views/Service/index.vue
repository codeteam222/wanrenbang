<template>
  <div class="servie-wrapper">
    <c-menu :active="0"></c-menu>
    <c-tab :tabs="tabs" :active.sync="tabActiveIndex">
      <component :is="currentComponent"></component>
    </c-tab>
    <div class="add-message" v-if="tabActiveIndex !== 1" @click="openMessage">
      <img src="@/assets/img/edit-article.png" />
      <div>发帖</div>
    </div>
    <b-message ref="message"></b-message>
  </div>
</template>

<script>
import Menu from "@/components/comm/Header";
import Tab from "@/components/comm/Tab";
import Bmessage from "@/components/business/message";
import Resource from "./components/resource";
import Welfare from "./components/welfare";
import About from "./components/about";

export default {
  name: "ServiceIndex",
  components: {
    "c-menu": Menu,
    "c-tab": Tab,
    "b-message": Bmessage
  },
  data() {
    return {
      tabActiveIndex: 0,
      tabs: [
        {
          label: "每日福利"
        },
        {
          label: "卡片商城"
        },
        {
          label: "聚合联创"
        }
      ]
    };
  },
  computed: {
    currentComponent() {
      if (this.tabActiveIndex === 0) {
        return Resource;
      } else if (this.tabActiveIndex === 1) {
        return Welfare;
      } else if (this.tabActiveIndex == 2) {
        return About;
      }
      return Resource;
    }
  },
  methods: {
    openMessage() {
      this.$refs.message.open();
    }
  }
};
</script>

<style lang="less" scoped>
.add-message {
  position: fixed;
  right: 20px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 10px;
  color: #2892ee;
  background-color: rgb(255, 193, 7);
  padding-top: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-weight: 700;
  line-height: 10px;
  img {
    width: 15px;
  }
}
/deep/ .c-tab {
  .tab-item {
    color: #999999;
  }
  .tab-0.active {
    color: #6d75f1;
  }
  .tab-1.active {
    color: rgb(252, 140, 168);
  }
  .tab-2.active {
    color: rgb(253, 179, 93);
  }
}
</style>
