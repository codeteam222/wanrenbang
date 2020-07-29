<template>
  <div class="c-join-history">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item, index) in data" :key="index" class="history-item">
        <div class="ceil"><span style="color:#E91E63;">l</span>提现金额：{{ item.money }}元</div>
        <div class="ceil">
          <span style="color:#5AB963;">l</span>提现状态：{{ getState(item.operateStatus) }}
        </div>
        <div class="ceil"><span style="color:#169BD5;">l</span>提现时间：{{ item.createTime }}</div>
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
      data: [],
      params: {
        start: 0,
        size: 10,
        type: 1
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(params = this.params) {
      this.loading = true;
      this.$fetch
        .get("/appMoneyRecord/findAllAppMoneyRecord", {
          ...params,
          token: this.token
        })
        .then(({ data }) => {
          this.data = data;
          this.done(data.length < this.params.size);
        })
        .catch(({ msg }) => {
          this.$notify({ type: "warning", message: msg });
          this.done(true);
        });
    },
    onLoad() {
      this.getData({
        start: this.params.start + 1
      });
    },
    getState(state) {
      const map = {
        0: "提现中",
        1: "提现成功",
        2: "提现失败"
      };
      return map[state];
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
</style>
