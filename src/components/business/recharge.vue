<template>
  <div class="b-recharge">
    <van-popup v-model="visible" position="bottom" round class="popup-box">
      <div class="box">
        <div class="title">
          <span style="color:#E91E63;">l</span><span>充值</span><span style="color:#5AB963;">l</span>
        </div>
        <div>
          <van-field v-model="value" label="请输入充值金额:" placeholder="请输入充值金额">
            <template #button>元</template>
          </van-field>
        </div>
        <div class="recharge-title"><span style="color:#E91E63;">l</span>选择充值方式</div>
        <div class="recharge-type">
          <div
            v-for="(item, index) in rechargeTypes"
            :key="index"
            class="recharge-type-item"
            :class="{ active: index === active, ['recharge-type-item-' + index]: true }"
            @click="choosePay(item, index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="other">
          <div><span style="color:#169BD5;">l</span>我的账号：vdx8xbv</div>
          <div class="popmpt">
            <span style="font-weight:700;color:#5AB963;">l</span
            ><label>提醒：</label>截图保存二维码，打开微信扫一扫充值，充值备注请填写您的账号：
            <label>vdx8xbv</label> ；充值三分钟之内到账；如果没有到账请联系在线客服
          </div>
          <div class="qrcode">
            <img src="@/assets/img/py-qrcode.png" />
          </div>
        </div>
        <div class="action">
          <van-button @click="close">取消</van-button>
          <van-button type="info" @click="recharge">确认充值</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      value: "",
      rechargeTypes: [
        "云闪付扫码充值",
        "支付宝转账充值",
        "微信赞赏码充值",
        "微信扫码充值",
        "支付宝扫码充值",
        "人工客服充值"
      ],
      active: 0
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    recharge() {
      this.$emit("success");
      this.$notify({ type: "success", message: "充值成功" });
      this.close();
    },
    choosePay(item, index) {
      this.active = index;
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  padding: 15px 30px;
  font-size: 12px;
}
.title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.recharge-title {
  text-align: left;
  margin-top: 15px;
}
/deep/ .van-field {
  width: 230px;
  margin: auto;
  padding: 5px;
  font-size: 12px;
}
/deep/ .van-cell__value {
  color: #333333;
}
/deep/ .van-field__label {
  width: 90px;
  margin-right: 5px;
  color: #333333;
}
/deep/ .van-field__control {
  color: #ff9900;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
}
.recharge-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 15px;
  &-item {
    width: 90px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: rgba(228, 228, 228, 1);
    border-radius: 5px;
    margin: 5px 0;
    font-size: 10px;
    &.active {
      background-color: #999;
    }
    &-0 {
      color: #6d75f1;
    }
    &-1 {
      color: #e25a53;
    }
    &-2 {
      color: #02b9e4;
    }
    &-3 {
      color: #5ab963;
    }
    &-4 {
      color: #fc8ca8;
    }
    &-5 {
      color: #ff9900;
    }
  }
}
.other {
  text-align: left;
}
.qrcode {
  text-align: center;
  margin: 20px 0;
  img {
    width: 110px;
  }
}
.popmpt {
  label {
    color: #f56d91;
  }
}
.van-button {
  width: 100px;
  margin: 10px;
  line-height: 1;
  height: 30px;
}
.van-button--default {
  background-color: rgb(204, 204, 204);
  color: #fff;
}
</style>
