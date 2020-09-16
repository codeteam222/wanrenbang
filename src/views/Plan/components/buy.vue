<template>
  <div class="plan-buy">
    <div class="section section-1">
      <div class="section-title title">
        <div class="plan-id">《12345678》</div>
        <div class="plan-state">正在进行中</div>
      </div>
      <div class="body">
        <div class="char">
          <div class="bar-char">
            <div class="bar-item bar-1"><div class="total">23435人</div></div>
            <div class="bar-item bar-2">圆梦计划</div>
            <div class="bar-item bar-3"><div class="total">￥12345</div></div>
          </div>
          <div class="bar-footer">
            <span class="people-num">当前参与人数</span>
            <span>|</span>
            <span class="gold-num">当前金币总数</span>
          </div>
        </div>
        <div class="count-down">
          <div class="stext">
            <div class="open-draw open">开</div>
            <div class="open-draw draw">奖</div>
          </div>
          <c-countdown :remainTime="87000" @end="countDownEnd"></c-countdown>
          <div class="dtext">
            <div class="count-down-time down">倒</div>
            <div class="count-down-time count">计</div>
            <div class="count-down-time time">时</div>
          </div>
        </div>
        <div class="button button-buy" @click="handleBuyPopup">立即参与</div>
      </div>
    </div>
    <div class="section section-2">
      <div class="section-title"><span>计划规则</span></div>
      <div class="section-body rules">
        <div class="rule-item">
          <div>
            <span style="color:#E91E63;">l</span>
            <span style="color:#FFC107;">l</span>
            圆梦三部曲
            <span style="color:#2892EE;">l</span>
            <span style="color:#5AB963;">l</span>
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#2892EE;">l</span>
            第一步：购买福利卡，系统免费赠送金币
          </div>
          <p>
            （购买1张福利卡，系统免费赠送1个金币，购买100张，系统免费赠送100个金币，以此类推，购买N张，系统赠送N个金币）
          </p>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#5AB963;">l</span>
            第二步：参与圆梦计划获取幸运号码
          </div>
          <p>（用系统赠送的金币参与圆梦计划，参与1个金币获取1个幸运号码，每天最多可获取100个幸运号码）</p>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#E91E63;">l</span>
            第三步：中奖成为幸运锦鲤，享受特权
          </div>
          <p>
            （每天20：50分准时开奖，开出的幸运号码，和你获得的其中一个幸运号码一样，那么你就是本期的幸运锦鲤，幸运锦鲤可以在卡卷商城以0.3元每张的价格购买本期圆梦计划中奖所得金币相等数量的福利卡，并在幸运锦鲤页面以每张1元的价格出售。出售所得的钱直接存入账户余额，随时提现！（前期购买福利卡的费用，可等售完之后再付钱）
          </p>
        </div>
        <div class="rule-item">
          <div class="font-20">
            <span style="color:#FFC107;">l</span>
            <span style="color:#5AB963;">l</span>
            幸运号码计算公式：[ (A+B) /C ] 取余数+10000001
            <span style="color:#E91E63;">l</span>
            <span style="color:#2892EE;">l</span>
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#2892EE;">l</span>
            数值A=当天日期+当天总参与人数
          </div>
          <p><span>（如：2019年5月3号，总参与人数为：28374</span></p>
          <p><span>那么数值A=20190503+28374=20218877;）</span></p>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#2892EE;">l</span>
            数值B=重庆时时彩每天固定第55期开奖号码
          </div>
          <p>
            （如：2019年5月3号，重庆时时彩第55期开奖号码为：37485，那么数值B=37485，如果时时彩数据因为特殊情况未开出，那么数值B取值为00000；）
          </p>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#E91E63;">l</span>
            数值C=当天总参与人数
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#E91E63;">l</span>
            <span style="color:#FFC107;">l</span>
            注：余数取小数点前面的整数
            <span style="color:#2892EE;">l</span>
            <span style="color:#5AB963;">l</span>
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#2892EE;">l</span>
            例：2017-11-28期总参与人数为：846545人，重庆时时彩20171128055期开奖号码：11232；
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#2892EE;">l</span>
            A=20171128+846545=20017673;
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#FFC107;">l</span>
            B=11232;
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#E91E63;">l</span>
            C=846545;
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#5AB963;">l</span>
            根据公式：【(A+B)/C】取余数+10000001=10000712；
          </div>
        </div>
        <div class="rule-item">
          <div>
            <span style="color:#2892EE;">l</span>
            2017-11-28期幸运号码为：10000712
          </div>
        </div>
      </div>
    </div>
    <div class="message">
      公平
      <span style="color:#FFC107;">l</span>
      公正
      <span style="color:#2892EE;">l</span>
      公开
    </div>
    <van-popup
      class="popup-box"
      v-model="buyPopupVisible"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      round
    >
      <div class="my-gold">我的金币：4321231</div>
      <div class="title">
        <span style="color:#E91E63;">l</span>
        圆梦计划
        <span style="color:#169BD5;">l</span>
      </div>
      <div class="stepper">
        参与
        <van-stepper v-model="buyNumber" />
        金币
      </div>
      <div class="prompt">
        <p>（1个金币获取1个圆梦号码）</p>
        <p>（每天最多可参与100个金币）</p>
      </div>
      <div class="actions">
        <van-button class="abo-bnt" type="default" size="small" @click="handleBuyPopup(false)"
          >取消</van-button
        >
        <van-button type="info" class="commit-bnt" size="small" @click="buy" :loading="loading"
          >确认参与</van-button
        >
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
  padding: 15px 20px;
}
.section-1 .section-title {
  margin-bottom: 15px;
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
  color: #000;
  font-size: 16px;
  font-weight: 600;
}
.plan-state {
  font-size: 10px;
  color: #999;
}
.bar-char {
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  margin-top: 10px;
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
    width: 22px;
    height: 260px;
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
      height: 100px;
      &::before {
        background-color: rgb(255, 153, 0);
      }
    }
    &.bar-2 {
      background-color: rgb(109, 117, 241);
      font-size: 12px;
      line-height: 50px;
      padding-top: 40px;
    }
    &.bar-3 {
      background-color: rgb(253, 179, 93);
      color: rgb(253, 179, 93);
      height: 210px;
      &::before {
        background-color: rgb(90, 185, 99);
      }
    }
  }
}
.char {
  width: 300px;
  margin: auto;
}
.bar-footer {
  background-color: rgba(252, 140, 168, 1);
  border-radius: 26px;
  height: 26px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
  color: rgb(152, 95, 109);
  font-size: 12px;
}
.people-num,
.gold-num {
  color: #fff;
}
.people-num {
  padding-left: 20px;
}
.gold-num {
  padding-right: 20px;
}
.count-down {
  margin-top: 20px;
  .text {
    letter-spacing: 81px;
    text-indent: 50px;
    text-align: center;
    margin: 5px 0;
  }
  .open-draw {
    width: 30%;
    display: inline-block;
    padding: 2px 0;
  }
  .count-down-time {
    width: 33%;
    display: inline-block;
    padding: 2px 0;
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
    /*
	width: 10px;
	height: 70px;
    line-height: 70px;*/
    height: 60px;
    line-height: 60px;

    font-size: 40px;
    font-weight: 700;
    color: #e0e0df;
  }
  .is-num {
    background-color: rgba(141, 141, 170, 1);
    /*width: 50px;
   font-size: 50px;*/
    padding: 0 10px;
    font-size: 30px;
    border-radius: 12px;
    margin: 0 3px;
  }
}
.popup-box {
  background-color: rgba(242, 242, 242, 1);
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
    width: 160px;
    color: #ff9900;
    background: #fff;
    height: 32px;
  }
  .van-stepper__minus,
  .van-stepper__plus {
    background-color: rgba(215, 215, 215, 1);
    color: #000;
    font-size: 12px;
    height: 32px;
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
  .actions {
    margin-bottom: 20px;
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
.commit-bnt,
.abo-bnt {
  border-radius: 3px;
}
.abo-bnt {
  background-color: rgba(204, 204, 204, 1);
  color: #fff;
}
</style>
