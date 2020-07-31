<template>
  <div class="servie-wrapper">
    <c-menu :active="0"></c-menu>
    <c-tab :tabs="tabs" :active.sync="tabActiveIndex">
      <component :is="currentComponent"></component>
    </c-tab>
    <div class="add-message" v-if="tabActiveIndex === 0">
      <img src="@/assets/img/edit-article.png" />
      <div @click="openMessage">发帖</div>
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
/* eslint-disable */
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
          label: "卡券商城"
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 12px;
  color: #2892ee;
  background-color: rgb(255, 193, 7);
  padding-top: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  img {
    width: 20px;
  }
}
/deep/ .c-tab {
  .tab-item {
    color: #999999;
  }
  .tab-item.active{
    color: #6d75f1;
  }
  .active_1{
	  color: #fc8eaa!important; 
  }
  .active_2{
	  color:#fdb562!important;
  }
  .imgs,.img-item{
      height:4rem;
  }
   .img-item{
     border-radius:4px;
   }
}
</style>
 