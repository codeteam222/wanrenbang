<template>
  <div class="service-welfare">
    <div class="card">
      <img class="price" src="@/assets/img/bridge-card_price.png" />
      <div class="title">
        <p>
          <span style="color: #F56D91">fú</span>
          <span style="color: #6D75F1">lì</span>
          <span style="color: #339933">kǎ</span>
        </p>
        <img src="@/assets/img/bridge-card_title.png" />
        <div class="prompt">&lt;凭本卡片可兑换各种福利&gt;</div>
        <div class="buy" @click="handleBuyPopup(true, 2)">购买</div>
      </div>
    </div>
    <div class="preferential-card">
      <div class="left">
        <p>
          <span style="color:#F56D91;">l</span><span>福利卡优惠活动</span
          ><span style="color:#FFD000;">l</span>
        </p>
        <p class="desc">
          &lt;本活动福利卡仅售0.3元一张，可以先购买，然后在圆梦计划→幸运锦鲤页面售完以后再付钱，活动仅限于圆梦计划幸运锦鲤用户参与
          &gt;
        </p>
        <p class="price">
          <img src="@/assets/img/bridge-card_price2.png" />
        </p>
      </div>
      <div class="right preferential-card-buy" @click="handleBuyPopup(true, 0.3)">
        先买后付
      </div>
    </div>
    <div class="card-list">
      <div class="card-item">
        <div class="title">我的卡片</div>
        <div class="message">福利卡<span style="color:#336633;">×3000</span></div>
      </div>
      <div class="card-item">
        <div class="title">待支付订单</div>
        <div class="message">
          无&您有一笔待支付账单，<span style="text-decoration:underline;color:#6D75F1;" @click="handleyPay"
            >去支付</span
          >
        </div>
      </div>
    </div>
    <van-popup
      v-model="buyPopupVisible"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      round
    >
      <div class="my-gold">我的金币：4321231</div>
      <div class="title">
        <span style="color:#E91E63;">l</span><span>福利卡</span><span style="color:#169BD5;">l</span>
      </div>
      <div class="stepper">购买<van-stepper v-model="buyNumber" />金币</div>
      <div class="prompt">&lt; {{ buyNumber }}张需要{{ totalPrice }}元 &gt;</div>
      <div class="actions">
        <van-button type="default" size="small" @click="handleBuyPopup(false)">取消</van-button>
        <van-button type="info" size="small" @click="buy" :loading="loading">确认购买</van-button>
      </div>
    </van-popup>
    <van-popup
      v-model="payPopupVisible"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      round
    >
      <div class="my-gold">我的金币：4321231</div>
      <div class="title">
        <span style="color:#F56D91;">&lt;</span><span> 支付3541元 </span
        ><span style="color:#FFD000;">&gt;</span>
      </div>
      <div class="prompt">该笔账单是您参与优惠活动购买3120张福利卡的费用</div>
      <div class="actions">
        <van-button type="default" size="small" @click="handleyPay(false)">取消</van-button>
        <van-button type="info" size="small" @click="buy" :loading="loading">确认支付</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { accMul } from "@/utils/util";
export default {
  data() {
    return {
      commentList: [
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",
          imgs: [
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg")
          ],
          state: 0,
          sex: 0
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",
          imgs: [
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg")
          ],
          state: 0,
          sex: 1
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "哈哈哈哈",
          createTime: "2020-10-28 18:11:22",
          content:
            "流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",
          imgs: [
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg"),
            require("@/assets/img/avatar.jpg")
          ],
          state: 0,
          sex: 0
        }
      ],
      stateMap: {
        0: "话圈"
      },
      buyPopupVisible: false,
      buyNumber: 1,
      unitPrice: 0,
      payPopupVisible: false
    };
  },
  computed: {
    totalPrice() {
      return accMul(this.buyNumber, this.unitPrice);
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    openBuyPopup() {},
    handleBuyPopup(state = true, unitPrice = 0) {
      if (this.loading) return;
      this.unitPrice = unitPrice;
      this.buyPopupVisible = state;
      if (!state) {
        this.buyNumber = 1;
      }
    },
    buy() {
      if (this.loading) return;
      this.$store.commit("UPDATE_LOADING", true);
      setTimeout(() => {
        this.$store.commit("UPDATE_LOADING", false);
        this.handleBuyPopup(false);
      }, 500);
    },
    handleyPay(state = true) {
      if (this.loading) return;
      this.payPopupVisible = state;
    },
    pay() {
      if (this.loading) return;
      this.$store.commit("UPDATE_LOADING", true);
      setTimeout(() => {
        this.$store.commit("UPDATE_LOADING", false);
        this.handleyPay(false);
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.service-welfare {
  padding: 10px;
  font-size: 14px;
}
.card {
  background-color: rgba(242, 242, 242, 1);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.349019607843137);
  height: 150px;
  border-radius: 20px;
  position: relative;
  padding: 5px;
  .title {
    background-image: url("~@/assets/img/circle.png");
    background-repeat: no-repeat;
    background-size: 110px 110px;
    background-position: center;
    height: 110px;
    width: 100%;
    p {
      width: 130px;
      display: flex;
      justify-content: space-around;
      margin: auto;
      font-size: 12px;
      padding-top: 18px;
    }
    img {
      width: 120px;
    }
  }
  .price {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 70px;
  }
  .prompt {
    margin-top: 25px;
  }
}
.buy {
  width: 250px;
  height: 30px;
  line-height: 30px;
  margin: auto;
  background-color: rgba(109, 117, 241, 1);
  color: #ffd000;
  font-weight: 700;
  box-shadow: 0px 3px 15px rgba(51, 51, 51, 1);
  border-radius: 25px;
  margin-top: 8px;
}
.preferential-card {
  background-color: rgba(242, 242, 242, 1);
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.349019607843137);
  height: 100px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  .left {
    text-align: left;
    padding: 10px 0 0 10px;
    font-size: 12px;
    .desc {
      width: 90%;
      color: #336633;
      font-size: 10px;
      margin-top: 10px;
    }
  }
  &-buy {
    background-color: rgba(109, 117, 241, 1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.349019607843137);
    font-weight: 700;
    color: #ffd000;
    padding: 18px 12px;
    height: 100%;
    border-radius: 5px;
    font-size: 12px;
  }
  .price {
    text-align: right;
    margin-top: 2px;
    padding-right: 6px;
    img {
      width: 45px;
    }
  }
}
.card-list {
  margin-top: 20px;
}
.card-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  .title {
    display: inline-block;
    width: 15px;
    font-size: 8px;
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 15px 5px;
    box-sizing: content-box;
    border-radius: 20px;
    margin-right: 10px;
  }
  .message {
    flex: 1;
    text-align: left;
    font-weight: bold;
  }
}
/deep/ .van-popup {
  padding: 10px;
  font-size: 14px;
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
  .stepper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .van-stepper__input {
    width: 120px;
    color: #ff9900;
  }
  .prompt {
    font-size: 12px;
    color: #999;
    margin-bottom: 20px;
    text-align: center;
  }
  .van-button {
    width: 100px;
    margin: 0 5px;
  }
}
</style>
