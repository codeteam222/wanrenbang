<template>
  <div class="c-join-history">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <div v-for="(item, index) in data" :key="index" class="history-item">
        <div class="title">
          <span style="color:#5AB963;">l</span>{{ item.rw_num }}{{ item.rw_status ? "已结束" : "正在进行中" }}
        </div>
        <div class="ceil">参与人数：{{ item.people_num | initVal }}；</div>
        <div class="ceil">金币总数：{{ item.coin_count | initVal }}；</div>
        <div class="ceil luck-number-list">
          <span>我的幸运号码：</span
          ><span v-for="(luckNumber, numIndex) in item.znum_list" :key="numIndex"
            >{{ luckNumber.znum }};</span
          >
        </div>
        <div class="ceil">幸运号码：{{ item.rw_status ? item.luck_znum : "等待揭晓....." }}</div>
        <div class="ceil">幸运锦鲤：{{ item.luck_username | initStr }}</div>
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
      listUrl: "/Home/List/index/mcode/ape5f8ff70a84c5e.html"
    };
  },
  methods: {}
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
.luck-number-list {
  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;
  span {
    margin-right: 5px;
  }
}
</style>
