<template>
  <div class="plan-buy">
    <div class="section section-1">
      <div class="section-title title">
        <div class="plan-id">《12345678》</div>
        <div class="plan-state">正在进行中</div>
      </div>
      <div class="body">
        <div class="bar-char">
          <div class="bar-item bar-1">
            <div class="total">￥23435</div>
          </div>
          <div class="bar-item bar-2">祝您好运</div>
          <div class="bar-item bar-3">
            <div class="total">12345人</div>
          </div>
        </div>
        <div class="bar-footer">
          <span class="people-num">当前参与人数</span>
          <span>|</span>
          <span class="gold-num">当前金币总数</span>
        </div>
        <div class="count-down">
          <div class="text">开奖</div>
          <c-countdown :remainTime="87000" @end="countDownEnd"></c-countdown>
          <div class="text">倒计时</div>
        </div>
        <div class="button button-buy" @click="handleBuyPopup">立即参与</div>
      </div>
    </div>
    <div class="section section-2">
      <div class="section-title">
        <span>计划规则</span>
      </div>
      <div class="section-body rules">
        <div class="rule-item">
          <div>
            <span style="color:#E91E63;">l</span>
            <span style="color:#FFC107;">l</span>圆梦三部曲<span style="color:#2892EE;">l</span>
            <span style="color:#5AB963;">l</span>
          </div>
        </div>
        <div class="rule-item">
          <div><span style="color:#2892EE;">l</span>第一步：赞赏幸运锦鲤免费获取金币</div>
          <p>
            （赞赏1元，系统免费赠送1个金币，赞赏100元，系统免费赠送100个金币，以此类推，赞赏N元，系统赠送N个金币）
          </p>
        </div>
        <div class="rule-item">
          <div><span style="color:#5AB963;">l</span>第二步：参与圆梦计划获取幸运号码</div>
          <p>（用系统赠送的金币参与圆梦计划，参与1个金币获取1个幸运号码，每天最多可获取100个幸运号码）</p>
        </div>
        <div class="rule-item">
          <div><span style="color:#E91E63;">l</span>第三步：中奖成为幸运锦鲤，接收别人的赞赏</div>
          <p>
            （每天20：50分准时开奖，开出的幸运号码，和你获得的幸运号码一样，那么你就是本期的幸运锦鲤，幸运锦鲤可以获得一次发帖许愿的机会发布愿望以后，将展示在幸运锦鲤大厅页面，接收别人的赞赏，收到的赞赏金额将和本期中奖的商币总额等量，直接存入账户，随时提现）
          </p>
        </div>
        <div class="rule-item">
          <div class="font-20">
            <span style="color:#FFC107;">l</span>
            <span style="color:#5AB963;">l</span>幸运号码计算公式：[ (A+B) /C ] 取余数+10000001<span
              style="color:#E91E63;"
              >l</span
            >
            <span style="color:#2892EE;">l</span>
          </div>
        </div>
        <div class="rule-item">
          <div><span style="color:#2892EE;">l</span>数值A=当天日期+当天总参与人数</div>
          <p>
            （如：2019年5月3号，总参与人数为：28374那么数值A=20190503+28374=20218877;）
          </p>
        </div>
        <div class="rule-item">
          <div><span style="color:#2892EE;">l</span>数值B=重庆时时彩每天固定第55期开奖号码</div>
          <p>
            （如：2019年5月3号，重庆时时彩第55期开奖号码为：37485那么数值B=37485，如果时时彩数据因为特殊情况未开出，那么数值B取值为00000；）
          </p>
        </div>
        <div class="rule-item">
          <div><span style="color:#E91E63;">l</span>数值C=当天总参与人数</div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#E91E63;">l</span>
            <span style="color:#FFC107;">l</span>注：余数取小数点前面的整数<span style="color:#2892EE;"
              >l</span
            >
            <span style="color:#5AB963;">l</span>
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#2892EE;">l</span
            >例：2017-11-28期总参与人数为：846545人，重庆时时彩20171128055期开奖号码：11232；
          </div>
        </div>
        <div class="rule-item">
          <div><span style="color:#2892EE;">l</span>A=20171128+846545=20017673;</div>
        </div>
        <div class="rule-item">
          <div><span style="color:#FFC107;">l</span>B=11232;</div>
        </div>
      </div>
    </div>
    <div class="message">
      公平<span style="color:#FFC107;">l</span>公正<span style="color:#2892EE;">l</span>公开
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
        <span style="color:#E91E63;">l</span>圆梦计划<span style="color:#169BD5;">l</span>
      </div>
      <div class="stepper">参与<van-stepper v-model="buyNumber" />金币</div>
      <div class="prompt">
        <p>（1个金币获取1个圆梦号码）</p>
        <p>（每天最多可参与100个金币）</p>
      </div>
      <div class="actions">
        <van-button type="default" size="small" @click="handleBuyPopup(false)">取消</van-button>
        <van-button type="info" size="small" @click="buy" :loading="loading">确认参与</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import CountDown from "@/components/comm/CountDown";
export default {
  components: {
    "c-countdown": CountDown
  },
  data() {
    return {
      buyPopupVisible: false,
      buyNumber: 1
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    countDownEnd() {
      console.log("倒计时结束");
    },
    handleBuyPopup(state = true) {
      if (this.loading) return;
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
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.section {
  padding: 20px 20px;
}
.section-2 .section-title {
  font-size: 16px;
  font-weight: 700;
  span {
    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 120px;
      height: 1px;
      background-color: rgb(164, 164, 164);
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: -122px;
    }
    &::after {
      right: -122px;
    }
  }
}
.plan-id {
  font-size: 16px;
  font-weight: 600;
}
.plan-state {
  font-size: 12px;
  color: #999;
}
.bar-char {
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  margin-top: 25px;
  align-items: flex-end;
  .total {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-weight: 600;
    font-size: 16px;
  }
  .bar-item {
    width: 31px;
    height: 300px;
    color: #fff;
    position: relative;
    &.bar-1,
    &.bar-3 {
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        top: -3px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    &.bar-1 {
      background-color: rgb(226, 90, 83);
      color: rgb(226, 90, 83);
      height: 200px;
      &::before {
        background-color: rgb(255, 153, 0);
      }
    }
    &.bar-2 {
      background-color: rgb(109, 117, 241);
      font-size: 16px;
      line-height: 60px;
      padding-top: 40px;
    }
    &.bar-3 {
      background-color: rgb(253, 179, 93);
      color: rgb(253, 179, 93);
      height: 250px;
      &::before {
        background-color: rgb(90, 185, 99);
      }
    }
  }
}
.bar-footer {
  background-color: rgba(252, 140, 168, 1);
  border-radius: 31px;
  height: 31px;
  line-height: 31px;
  display: flex;
  justify-content: space-between;
  color: rgb(152, 95, 109);
}
.people-num,
.gold-num {
  color: #fff;
}
.people-num {
  padding-left: 13px;
}
.gold-num {
  padding-right: 13px;
}
.count-down {
  margin-top: 40px;
  .text {
    letter-spacing: 50px;
    text-indent: 50px;
    text-align: center;
    margin: 5px 0;
  }
}
.button-buy {
  width: 120px;
  margin: auto;
  margin-top: 30px;
  font-size: 16px;
  border-radius: 50px;
}
.rules {
  text-align: left;
  .rule-item {
    margin-bottom: 20px;
    & > div {
      font-weight: 700;
      font-size: 15px;
      color: #333;
      &.font-20 {
        font-size: 16px;
      }
    }
    p {
      color: rgb(172, 172, 172);
      font-size: 14px;
      color: #999;
    }
  }
}
/deep/ .c-countdown {
  .item {
    display: inline-block;
    width: 10px;
    height: 70px;
    line-height: 70px;
    font-size: 40px;
    font-weight: 700;
    color: #e0e0df;
  }
  .is-num {
    width: 50px;
    background-color: rgba(141, 141, 170, 1);
    font-size: 50px;
    border-radius: 12px;
    margin: 0 3px;
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
    text-align: left;
    padding-left: 80px;
    margin-bottom: 20px;
  }
  .van-button {
    width: 100px;
    margin: 0 5px;
  }
}
.message {
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 24px;
  color: #333;
  span {
    margin: 0 10px;
  }
}
</style>
