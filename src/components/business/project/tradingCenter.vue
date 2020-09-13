<template>
  <div class="tranding-center">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="project-item" v-for="(item, index) in data" :key="index">
        <div class="project-item-user left">
          <div>
            <img :src="item.avatar" alt="" />
            <div class="name">{{ item.username }}</div>
          </div>
        </div>
        <div class="project-item-action">
          <div>
            <img :src="item.logo" alt="" />
            <div class="project-name">
              <span style="color:#E91E63;">l</span>
              <span style="color:#5AB963;">l</span>出售{{ item.name }}{{ item.ratio }}股<span
                style="color:#FF9900;"
                >l</span
              >
              <span style="color:#169BD5;">l</span>
            </div>
            <div class="price">价格：{{ item.price }}RMB</div>
            <div class="btn">
              <div class="button" @click="openBuyPopup(item, index)">
                购入股份
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
    <van-popup
      class="popup-box"
      v-model="buyPopupVisible"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      lock-scroll
      get-container="body"
      round
    >
      <div class="popup-body">
        <div class="name">
          <span style="color:#E91E63;">l</span>购入{{ currentData.name }}{{ currentData.ratio }}股<span
            style="color:#169BD5;"
            >l</span
          >
        </div>
        <div class="price">价格：{{ currentData.price }}RMB</div>
        <div class="actions">
          <van-button type="default" size="small" @click="closeBuyPopup">取消</van-button>
          <van-button type="info" size="small" @click="buy" :loading="buyLoading">确认购入</van-button>
        </div>
      </div>
    </van-popup>
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
          name: "文化复兴项目",
          price: "4561",
          username: "闭关修炼1",
          logo: require("@/assets/img/avatar.jpg"),
          avatar: require("@/assets/img/avatar.jpg"),
          ratio: "0.0363%"
        },
        {
          name: "文化复兴项目",
          price: "4561",
          username: "闭关修炼2",
          logo: require("@/assets/img/avatar.jpg"),
          avatar: require("@/assets/img/avatar.jpg"),
          ratio: "0.0363%"
        },
        {
          name: "文化复兴项目",
          price: "4561",
          username: "闭关修炼3",
          logo: require("@/assets/img/avatar.jpg"),
          avatar: require("@/assets/img/avatar.jpg"),
          ratio: "0.0363%"
        },
        {
          name: "文化复兴项目",
          price: "4561",
          username: "闭关修炼4",
          logo: require("@/assets/img/avatar.jpg"),
          avatar: require("@/assets/img/avatar.jpg"),
          ratio: "0.0363%"
        }
      ],
      buyPopupVisible: false,
      currentData: {},
      currentIndex: -1
    };
  },
  computed: {
    buyLoading() {
      return this.$store.state.loading;
    }
  },
  created() {
    this.getData();
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
    },
    openBuyPopup(d, i) {
      this.buyPopupVisible = true;
      this.currentData = d;
      this.currentIndex = i;
    },
    closeBuyPopup() {
      this.buyPopupVisible = false;
      setTimeout(() => {
        this.currentData = {};
        this.currentIndex = -1;
      }, 350);
    },
    buy() {
      if (this.buyLoading) return;
      this.$store.commit("UPDATE_LOADING", true);
      setTimeout(() => {
        this.$store.commit("UPDATE_LOADING", false);
        this.$notify({ type: "success", message: "购入成功" });
        this.data.splice(this.currentIndex, 1);
        this.closeBuyPopup();
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.project-item {
  display: flex;
  justify-content: space-between;
  background-color: rgba(242, 242, 242, 1);
  margin: 2px 0;
  padding: 20px 15px;
  font-size: 14px;
  .left {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 1px;
      height: 80%;
      background-color: #ccc;
      right: 10px;
      top: 50%;
      transform: translateY(-50%) scaleX(0.5);
    }
  }
  &-action {
    flex: 1;
    text-align: left;
    text-align: center;
    img {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }
    .title {
      font-weight: 700;
    }
    .project-name {
      color: #f56d91;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .price {
      color: #ff9900;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
  &-user {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
    padding-right: 40px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
.button {
  padding: 5px 20px;
  border-radius: 0;
  font-size: 12px;
}
.popup-body {
  text-align: center;
  padding: 20px 0;
  .name {
    font-size: 14px;
    font-weight: 700;
  }
  .price {
    color: #ff9900;
    margin: 10px 0 20px 0;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  .van-button {
    width: 100px;
    margin: 0 10px;
  }
  .van-button--default {
    background-color: #cccccc;
    color: #fff;
  }
}
</style>
