<template>
  <div class="wrapper plan-wrapper">
    <div class="page-header">
      <c-menu :active="1"></c-menu>
      <c-tab :tabs="tabs" :active.sync="tabActiveIndex"></c-tab>
    </div>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Menu from "@/components/comm/Header";
import Tab from "@/components/comm/Tab";
import Buy from "./components/buy";
import KoiFish from "./components/koiFish";
import Detail from "./components/detail";
/* eslint-disable */
export default {
  name: "PlanIndex",
  components: {
    "c-menu": Menu,
    "c-tab": Tab
  },
  data() {
    return {
      tabActiveIndex: 1,
      tabs: [
        {
          label: "幸运锦鲤"
        },
        {
          label: "参与计划"
        },
        {
          label: "详情记录"
        }
      ]
    };
  },
  computed: {
    currentComponent() {
      if (this.tabActiveIndex === 0) {
        return KoiFish;
      } else if (this.tabActiveIndex === 1) {
        return Buy;
      } else if (this.tabActiveIndex === 2) {
        return Detail;
      }
      return Buy;
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
	/deep/ .c-tab {
	 
	  .tab-item.active{
	    color: #fc8eaa; 
	  }
	  .active_1{
		  color: #6d75f1!important; 
	  }
	  .active_2{
		  color:#fdb562!important;
	  }
	  
	}
</style>
