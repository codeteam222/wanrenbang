<template>
  <div class="personal-safe">
    <c-popup-layout title="账号安全" @back="$router.push({ name: 'Personal' })">
      <div class="form-box">
        <div class="form-content">
          <c-form ref="baseForm" :data="baseInfo" :form="baseInfoForm" label-width="100px"></c-form>
        </div>
      </div>
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
      fileList: [],
      baseInfo: {
        avatar: "",
        username: ""
      },
      baseInfoForm: [
        {
          type: "avatar",
          prop: "avatar",
          upload: this.afterRead
        },
        {
          type: "input",
          label: "修改昵称:",
          prop: "username"
        },
        {
          type: "action",
          data: [
            {
              text: "确认修改",
              type: "primary",
              handler: this.handleBaseInfo
            }
          ]
        }
      ],
      loginPwd: {
        password: "",
        new_password: "",
        com_password: ""
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
          prop: "new_password"
        },
        {
          type: "password",
          label: "确认密码:",
          prop: "com_password"
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
        pay_password: "",
        new_password: "",
        com_password: ""
      },
      payPwdForm: [
        {
          type: "password",
          label: "原密码:",
          prop: "pay_password"
        },
        {
          type: "password",
          label: "新密码:",
          prop: "new_password"
        },
        {
          type: "password",
          label: "确认密码:",
          prop: "com_password"
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
        bank_name: "",
        bank_user: "",
        bank_num: "",
        com_bank_num: ""
      },
      bankcardForm: [
        {
          type: "select",
          label: "开户银行:",
          prop: "bank_name",
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
          prop: "bank_user"
        },
        {
          type: "input",
          label: "银行卡号:",
          prop: "bank_num"
        },
        {
          type: "input",
          label: "确认银行卡号:",
          prop: "com_bank_num"
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
    afterRead({ file }, { index }) {
      this.$refs.baseForm.updateField(index, {}, "del");
      let formData = new FormData();
      formData.append("file", file);
      formData.append("is_user", 1);
      this.$fetch
        .post("/Home/Create/upload_ajax_img", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(({ data }) => {
          this.$refs.baseForm.updateField(index, {
            url: data.src,
            id: data.image_id
          });
        })
        .catch(() => {
          this.$refs.baseForm.updateField(index, {
            status: "failed",
            message: "上传失败"
          });
        });
    },
    handleLoginPwd(valid, value) {
      if (valid) {
        this.updateInfo(value, "登录修改成功");
      }
    },
    handlePayPwd(valid, value) {
      if (valid) {
        this.updateInfo(value, "支付密码修改成功");
      }
    },
    handleBankcardPwd(valid, value) {
      if (valid) {
        this.updateInfo(value, "银行卡信息修改成功");
      }
    },
    validateLoginPwd(rule, value, callback) {
      value !== this.loginPwd.newPassword ? callback(new Error()) : callback();
    },
    validatePayPwd(rule, value, callback) {
      value !== this.payPwd.newPassword ? callback(new Error()) : callback();
    },
    validateCardId(rule, value, callback) {
      value !== this.bankcard.cardId ? callback(new Error()) : callback();
    },
    handleBaseInfo(valid, value) {
      if (valid) {
        this.updateInfo(
          {
            username: value.username
          },
          "昵称修改成功"
        );
      }
    },
    updateInfo(value, msg) {
      this.$fetch
        .form("/Home/User/upuserinfo", value)
        .then(() => {
          this.$store.dispatch("GetUserInfo");
          this.$notify({ type: "success", message: msg });
        })
        .catch(({ msg }) => {
          this.$notify({ type: "danger", message: msg });
        });
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
