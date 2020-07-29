<template>
  <div class="c-join-history">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item, index) in data" :key="index" class="history-item">
        <div class="title"><span style="color:#5AB963;">l</span>{{ item.name }}{{ item.state }}</div>
        <div class="ceil">参与人数：{{ item.peopleTotal }}；</div>
        <div class="ceil">金币总数：{{ item.goldTotal }}；</div>
        <div class="ceil luck-number-list">
          <span>我的幸运号码：</span
          ><span v-for="(luckNumber, numIndex) in item.myNumbers" :key="numIndex">{{ luckNumber }};</span>
        </div>
        <div class="ceil">幸运号码：{{ item.luckNunber || "等待揭晓....." }}</div>
        <div class="ceil">幸运锦鲤：{{ item.koiFishNumber }}；</div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finished: false,
      loading: false,
      data: [
        {
          name: "20200628",
          state: "进行中",
          peopleTotal: 132132,
          goldTotal: 4515132,
          myNumbers: [
            "10000086",
            "10000086",
            "10000086",
            "10000086",
            "10000086",
            "10000086",
            "10000086",
            "10000086",
            "10000086",
            "10000086"
          ],
          luckNunber: "",
          koiFishNumber: "li455136"
        },
        {
          name: "20200628",
          state: "已结束",
          peopleTotal: 132132,
          goldTotal: 4515132,
          myNumbers: ["10000086", "10000086", "10000086", "10000086", "10000086"],
          luckNunber: "100000899",
          koiFishNumber: "li455136"
        },
        {
          name: "20200628",
          state: "已结束",
          peopleTotal: 132132,
          goldTotal: 4515132,
          myNumbers: ["10000086", "10000086", "10000086", "10000086", "10000086"],
          luckNunber: "100000822",
          koiFishNumber: "li455136"
        }
      ]
    };
  },
  methods: {
    getData() {
      const copy = [].concat(this.data);
      this.data = this.data.concat(copy);
      this.done();
    },
    onLoad() {
      this.loading = true;
      this.getData();
    },
    done(isFinsh = false) {
      this.finished = isFinsh;
      this.loading = false;
    }
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
.luck-number-list {
  display: flex;
  justify-items: flex-start;
  flex-wrap: wrap;
  span {
    margin-right: 5px;
  }
}
</style>
