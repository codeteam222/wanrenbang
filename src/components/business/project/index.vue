<template>
  <div class="b-project">
    <trading-center v-if="type === 'center'"></trading-center>
    <all-projcet v-if="type === 'all'"></all-projcet>
    <my-project v-if="type === 'my'"></my-project>
  </div>
</template>

<script>
import TradingCenter from "./tradingCenter";
import AllProject from "./allProject";
import MyProject from "./myProject";
export default {
  components: {
    "trading-center": TradingCenter,
    "all-projcet": AllProject,
    "my-project": MyProject
  },
  props: {
    type: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.b-about-money {
  width: 300px;
  margin: auto;
  border-radius: 15px;
  background-color: #fff;
  padding: 20px 30px;
}
.title {
  margin-bottom: 10px;
  font-weight: 700;
}
.content {
  font-size: 12px;
  text-align: left;
  line-height: 18px;
}
.button {
  padding: 5px 20px;
  border-radius: 0;
  font-size: 12px;
}
</style>
