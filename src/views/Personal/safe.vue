<template>
  <div class="personal-safe">
    <c-popup-layout title="账号安全" @back="$router.push({ name: 'Personal' })">
      <div class="form-box">
        <div class="form-title"><span style="color:#E91E63;">l</span>登录密码</div>
        <div class="form-content">
          <c-form :data="loginPwd" :form="loginPwdForm" :rules="loginPwdRules" label-width="100px"></c-form>
        </div>
      </div>
      <div class="form-box">
        <div class="form-title"><span style="color:#FF9900;">l</span>支付密码</div>
        <div class="form-content">
          <c-form :data="payPwd" :form="payPwdForm" :rules="payPwdRules" label-width="100px"></c-form>
        </div>
      </div>
      <div class="form-box">
        <div class="form-title"><span style="color:#5AB963;">l</span>提现银行卡</div>
        <div class="form-content">
          <c-form :data="bankcard" :form="bankcardForm" :rules="bankcardRules" label-width="100px"></c-form>
        </div>
      </div>
    </c-popup-layout>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
import CForm from "@/components/comm/Form.vue";
export default {
  components: {
    "c-form": CForm,
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      loginPwd: {
        password: "",
        newPassword: "",
        configrmPassword: ""
      },
      loginPwdForm: [
        {
          type: "password",
          label: "原密码:",
          prop: "password"
        },
        {
          type: "password",
          label: "新密码:",
          prop: "newPassword"
        },
        {
          type: "password",
          label: "确认密码:",
          prop: "configrmPassword"
        },
        {
          type: "action",
          data: [
            {
              text: "确认修改",
              type: "primary",
              handler: this.handleLoginPwd
            }
          ]
        }
      ],
      loginPwdRules: {
        password: [{ required: true, message: "旧密码不能为空", trigger: "blur" }],
        newPassword: [{ required: true, message: "新密码不能为空", trigger: "blur" }],
        configrmPassword: [{ validator: this.validateLoginPwd, message: "两次密码不一致", trigger: "blur" }]
      },
      payPwd: {
        password: "",
        newPassword: "",
        configrmPassword: ""
      },
      payPwdForm: [
        {
          type: "password",
          label: "原密码:",
          prop: "password"
        },
        {
          type: "password",
          label: "新密码:",
          prop: "newPassword"
        },
        {
          type: "password",
          label: "确认密码:",
          prop: "configrmPassword"
        },
        {
          type: "action",
          data: [
            {
              text: "确认修改",
              type: "primary",
              handler: this.handlePayPwd
            }
          ]
        }
      ],
      payPwdRules: {
        password: [{ required: true, message: "旧密码不能为空", trigger: "blur" }],
        newPassword: [{ required: true, message: "新密码不能为空", trigger: "blur" }],
        configrmPassword: [{ validator: this.validatePayPwd, message: "两次密码不一致", trigger: "blur" }]
      },
      bankcard: {
        bank: "",
        name: "",
        cardId: "",
        configrmCardId: ""
      },
      bankcardForm: [
        {
          type: "select",
          label: "开户银行:",
          prop: "bank",
          data: [
            {
              label: "中国银行",
              value: "中国银行"
            },
            {
              label: "农业银行",
              value: "农业银行"
            }
          ]
        },
        {
          type: "input",
          label: "持卡人姓名:",
          prop: "name"
        },
        {
          type: "input",
          label: "银行卡号:",
          prop: "cardId"
        },
        {
          type: "input",
          label: "确认银行卡号:",
          prop: "configrmCardId"
        },
        {
          type: "action",
          data: [
            {
              text: "确认修改",
              type: "primary",
              handler: this.handleBankcardPwd
            }
          ]
        }
      ],
      bankcardRules: {
        name: [{ required: true, message: "持卡人姓名不能为空", trigger: "blur" }],
        cardId: [{ required: true, message: "银行卡号不能为空", trigger: "blur" }],
        configrmCardId: [{ validator: this.validateCardId, message: "银行卡号不一致", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleLoginPwd(valid) {
      console.log(valid);
    },
    handlePayPwd(valid) {
      console.log(valid);
    },
    handleBankcardPwd(valid) {
      console.log(valid);
    },
    validateLoginPwd(rule, value, callback) {
      value !== this.loginPwd.newPassword ? callback(new Error()) : callback();
    },
    validatePayPwd(rule, value, callback) {
      value !== this.payPwd.newPassword ? callback(new Error()) : callback();
    },
    validateCardId(rule, value, callback) {
      value !== this.bankcard.cardId ? callback(new Error()) : callback();
    }
  }
};
</script>

<style lang="less" scoped>
.personal-safe {
  font-size: 14px;
}
.form-box {
  text-align: left;
  background-color: rgba(242, 242, 242, 1);
  padding: 20px 50px 1px 20px;
  margin-bottom: 2px;
}
.form-title {
  padding-left: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 700;
}
/deep/ .form-item__action {
  padding-left: 50px;
}
</style>
