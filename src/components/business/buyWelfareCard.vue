<template>
  <van-popup
    v-model="visible"
    position="bottom"
    class="buyWelfareCard-popup-box"
    lock-scroll
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    round
    :get-container="'body'"
  >
    <div class="my-gold">我的余额：4321231</div>
    <div class="title">
      <span style="color:#E91E63;">l</span><span>购买福利卡</span><span style="color:#5AB963;">l</span>
    </div>
    <div class="num-list">
      <div
        v-for="item in numList"
        :key="item"
        class="num-item"
        :class="{ active: fixedNum === item }"
        @click="setNun(item)"
      >
        {{ item }}张
      </div>
    </div>
    <div class="custom-input">
      <van-field v-model="customNum" center clearable label="其他数量：">
        <template #button>张</template>
      </van-field>
    </div>
    <div class="prompt">&lt; 本次购买需要{{ totalPrice }}元 &gt;</div>
    <div class="actions">
      <van-button class="abo-bnt" type="default" size="small" @click="handleBuyPopup(false)">取消</van-button>
      <van-button class="commit-bnt" type="info" size="small" @click="buy" :loading="loading"
        >确认支付</van-button
      >
    </div>
  </van-popup>
</template>

<script>
import { accMul } from "@/utils/util";
export default {
  props: {
    price: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      visible: false,
      customNum: 0,
      fixedNum: 0,
      buyNumber: 0,
      numList: [1, 5, 10, 20, 50, 100]
    };
  },
  watch: {
    customNum(now) {
      if (now > 0) {
        this.buyNumber = now;
        this.fixedNum = 0;
      }
    }
  },
  computed: {
    totalPrice() {
      return accMul(this.buyNumber, this.price);
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    handleBuyPopup(state = true) {
      if (this.loading) return;
      this.visible = state;
      if (!state) {
        this.buyNumber = 0;
      }
    },
    buy() {
      if (this.loading) return;
      this.$store.commit("UPDATE_LOADING", true);
      setTimeout(() => {
        this.$store.commit("UPDATE_LOADING", false);
        this.handleBuyPopup(false);
        this.$emit("success");
      }, 500);
    },
    setNun(num) {
      if (this.fixedNum === num) {
        this.fixedNum = 0;
        this.fixedNum = 0;
      } else {
        this.fixedNum = num;
        this.buyNumber = num;
        this.customNum = 0;
      }
    }
  }
};
</script>

<style lang="less">
.buyWelfareCard-popup-box {
  padding: 10px;
  font-size: 14px;
  text-align: center;
  background-color: rgba(242, 242, 242, 1);
  .van-stepper {
    margin: 0 5px;
  }
  .my-gold {
    text-align: left;
    margin-bottom: 10px;
  }
  .title {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .prompt {
    font-size: 14px;
    color: #999;
    margin-bottom: 20px;
    text-align: center;
  }
  .van-button {
    width: 100px;
    margin: 0 5px;
  }
  .num-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    .num-item {
      width: 75px;
      height: 32px;
      line-height: 32px;
      border-radius: 20px;
      background-color: rgba(228, 228, 228, 1);
      margin: 8px 10px;
      &.active {
        background-color: rgba(153, 153, 153, 1);
        color: #fff;
      }
    }
  }
  .custom-input {
    width: 265px;
    margin: auto;
    margin-bottom: 10px;
    .van-field__control {
      color: #ff9900;
    }
  }
  .actions {
    margin-bottom: 20px;
  }
}
</style>
