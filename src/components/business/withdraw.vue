<template>
  <div class="b-withdraw">
    <van-popup v-model="visible" position="bottom" round>
      <div class="box">
        <div class="money">账户余额：43,211元</div>
        <div class="title">
          <span style="color:#E91E63;">l</span>提现<span style="color:#169BD5;">l</span>
        </div>
        <c-form :data="data" :form="form" :rules="rules" label-width="100px">
          <template #after>
            <p>提现将收取30%服务费用于发展平台以便于更好地服务用户（本次提现服务费为30元，实际到账：70元）</p>
          </template>
        </c-form>
      </div>
    </van-popup>
  </div>
</template>

<script>
import CForm from "@/components/comm/Form.vue";
export default {
  components: {
    "c-form": CForm
  },
  data() {
    return {
      visible: false,
      data: {
        cradId: "",
        money: "",
        password: ""
      },
      form: [
        {
          type: "input",
          label: "提现到:",
          prop: "cradId"
        },
        {
          type: "input",
          label: "提现金额:",
          prop: "money",
          unit: "元"
        },
        {
          type: "password",
          label: "提现密码:",
          prop: "password"
        },
        {
          type: "slot",
          prop: "after"
        },
        {
          type: "action",
          data: [
            {
              text: "取消",
              handler: this.close,
              validator: false
            },
            {
              text: "确认提现",
              type: "primary",
              handler: this.withdraw
            }
          ]
        }
      ],
      rules: {
        cradId: [{ required: true, message: "请输入银行卡号", trigger: "blur" }],
        money: [{ required: true, message: "请输入金额", trigger: "blur" }],
        password: [{ required: true, message: "请输入提现密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    withdraw() {
      this.$emit("success");
      this.$notify({ type: "success", message: "提现成功" });
      this.close();
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  font-size: 14px;
  padding: 10px;
}
.money {
  text-align: left;
}
.title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
}
/deep/ .van-field__label {
  width: 100px;
}
/deep/ .el-button {
  width: 100px;
  margin: 10px;
}
/deep/ .form-item__after {
  .el-form-item__content {
    margin-left: 0 !important;
    padding: 0 10px;
    line-height: normal;
    color: #f56d91;
  }
}
/deep/ .el-input {
  width: 200px;
}
</style>
