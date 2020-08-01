<template>
  <div class="service-about">
    <b-banner text="一切为了用户，一切依靠用户"></b-banner>
    <div class="about-item plan-detail" @click="handleOpenPopup('explain')">
      <van-divider>聚合联创计划说明</van-divider>
    </div>
    <div class="about-item project-money" @click="handleOpenPopup('money')">
      <div class="title">&lt;项目启动资金&gt;</div>
      <div class="money">￥132.132.00</div>
    </div>
    <div class="about-item project-center" @click="handleOpenPopup('project')">项目中心</div>
    <b-about-popup ref="aboutPopup"></b-about-popup>
  </div>
</template>

<script>
import BBanner from "./banner";
import BAboutPopup from "@/components/business/about";
export default {
  components: {
    "b-banner": BBanner,
    "b-about-popup": BAboutPopup
  },
  data() {
    return {
      projectTabs: [
        {
          title: "所有项目",
          name: "all"
        },
        {
          title: "我入股的项目",
          name: "my"
        },
        {
          title: "股权交易中心",
          name: "center"
        }
      ]
    };
  },
  methods: {
    handleOpenPopup(type) {
      this.$refs.aboutPopup.open({
        type,
        position: type === "money" ? "" : "right",
        tabs: type === "project" ? this.projectTabs : []
      });
    }
  }
};
</script>

<style lang="less" scoped>
.service-about {
  font-size: 18px;
}
.about-item {
  margin: auto;
  margin-bottom: 10px;
  border-radius: 10px;
}
.plan-detail {
  width: 300px;
  height: 80px;
  line-height: 80px;
  background-color: rgba(90, 185, 99, 1);
  position: relative;
  padding: 0 30px;
  color: #fff;
  overflow: hidden;
}
.project-money {
  width: 230px;
  height: 60px;
  background-color: rgba(255, 224, 104, 0.8);
  padding-top: 10px;
  .title {
    font-size: 12px;
  }
  .money {
    font-size: 18px;
    font-weight: 700;
    margin-top: 1px;
  }
}
.project-center {
  width: 150px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(109, 117, 241, 1);
  color: #fff;
  font-size: 14px;
}
.van-divider {
  position: relative;
  color: #fff;
  font-size: 18px;
  margin: 0;
  line-height: inherit;
}
</style>
