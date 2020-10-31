<template>
  <div class="c-join-history">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <div v-for="(item, index) in data" :key="index" class="history-item">
        <div class="ceil"><span style="color:#E91E63;">l</span>充值金额：{{ item.money }}元</div>
        <div class="ceil"><span style="color:#5AB963;">l</span>充值状态：{{ item.al_status }}</div>
        <div class="ceil"><span style="color:#169BD5;">l</span>充值时间：{{ item.update_time }}</div>
      </div>
    </van-list>
  </div>
</template>

<script>
import loadMixin from "@/mixins/load";
export default {
  mixins: [loadMixin],
  data() {
    return {
      listUrl: "/Home/List/index/mcode/ape5f952db984094.html"
    };
  }
};
</script>

<style lang="less" scoped>
.history-item {
  background-color: rgba(242, 242, 242, 1);
  margin: 2px 0;
  padding: 15px;
}
.title {
  font-size: 18px;
  font-weight: 700;
}
.ceil {
  margin: 10px 0;
}
</style>
