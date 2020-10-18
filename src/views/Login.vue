<template>
  <div class="login-wrapper">
    <div class="header">
      <img class="logo" src="@/assets/img/login_logo.png" />
    </div>
    <div class="body">
      <c-form
        v-show="type === 'login'"
        ref="loginForm"
        :data="loginData"
        :form="loginColumn"
        :rules="loginRules"
        :label-width="'0px'"
      >
        <template v-slot:after>
          <div class="actions">
            <span class="action-item" @click="switchType('register')">用户注册</span>
            <span class="action-item">忘记密码</span>
          </div>
          <div>
            <el-checkbox v-model="checked">登录即同意用户协议</el-checkbox>
          </div>
        </template>
      </c-form>
      <c-form
        v-show="type === 'register'"
        ref="registerForm"
        :data="registerData"
        :form="registerColumn"
        :rules="registerRules"
        :label-width="'0px'"
      >
        <template v-slot:after>
          <div class="actions">
            <span class="action-item" @click="switchType('login')">去登录</span>
          </div>
        </template>
      </c-form>
    </div>
  </div>
</template>

<script>
import CForm from "@/components/comm/Form.vue";
import { checkPhone } from "@/utils/check";
export default {
  components: {
    "c-form": CForm
  },
  data() {
    return {
      type: "login",
      loginData: {
        username: "",
        password: ""
      },
      loginColumn: [
        {
          type: "input",
          prop: "phone",
          placeholder: "手机号"
        },
        {
          type: "password",
          prop: "password",
          placeholder: "密码"
        },
        {
          type: "slot",
          prop: "after"
        },
        {
          type: "action",
          data: [
            {
              text: "登录",
              handler: this.submit
            }
          ]
        }
      ],
      loginRules: {
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            validator: this.validatePhone,
            message: "手机号格式不正确",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      },
      registerData: {
        username: "",
        phone: "",
        password: "",
        com_password: ""
        // referralCode: ""
      },
      registerColumn: [
        {
          type: "input",
          prop: "username",
          placeholder: "昵称"
        },
        {
          type: "input",
          prop: "phone",
          placeholder: "手机号"
        },
        {
          type: "password",
          prop: "password",
          placeholder: "登录密码"
        },
        {
          type: "password",
          prop: "com_password",
          placeholder: "确认密码"
        },
        // {
        //   type: "input",
        //   prop: "referralCode ",
        //   placeholder: "推荐码"
        // },
        {
          type: "slot",
          prop: "after"
        },
        {
          type: "action",
          data: [
            {
              text: "注册",
              handler: this.submit
            }
          ]
        }
      ],
      registerRules: {
        username: [{ required: true, message: "昵称不能为空", trigger: "blur" }],
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            validator: this.validatePhone,
            message: "手机号格式不正确",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        com_password: [{ validator: this.validatePwd, message: "两次密码不一致", trigger: "blur" }]
      },
      checked: false
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    switchType(type) {
      this.type = type;
      this.$nextTick(() => {
        this.$refs.registerForm.resetFields();
        this.$refs.loginForm.resetFields();
      });
    },
    submit(valid, data) {
      if (this.loading) return;
      this.$store.commit("UPDATE_LOADING", false);
      if (valid) {
        switch (this.type) {
          case "login":
            if (!this.checked) {
              this.$notify({ type: "danger", message: "请查看用户协议并勾选同意" });
              return;
            }
            this.toLogin(data);
            break;
          case "register":
            this.toRegister(data);
            break;
        }
      }
    },
    toLogin(data) {
      this.$fetch
        .form("/Home/login/login", data)
        .then(({ data }) => {
          this.$store.dispatch("SaveInfo", {
            token: data.apiAuth,
            userInfo: data.user_info
          });
          this.$store.commit("UPDATE_LOADING", false);
          this.$router.push({ name: "Plan" });
        })
        .catch(({ msg }) => {
          this.$notify({ type: "warning", message: msg });
          this.$store.commit("UPDATE_LOADING", false);
        });
    },
    toRegister(data) {
      /*  */
      this.$fetch
        .form("/home/login/reg", data)
        .then(() => {
          this.$notify({ type: "success", message: "注册成功" });
          this.switchType("login");
          this.$store.commit("UPDATE_LOADING", false);
        })
        .catch(({ msg }) => {
          this.$notify({ type: "warning", message: msg });
          this.$store.commit("UPDATE_LOADING", false);
        });
    },
    validatePhone(rule, value, callback) {
      !checkPhone(value) ? callback(new Error()) : callback();
    },
    validatePwd(rule, value, callback) {
      value !== this.registerData.password ? callback(new Error()) : callback();
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  margin-top: 100px;
}
.logo {
  width: 350px;
}
.body {
  text-align: center;
  width: 200px;
  margin: auto;
}
.actions {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 20px;
  position: relative;
  color: #999999;
}
::v-deep .el-form {
  .el-input__inner {
    border: none;
    border-bottom: 1px solid #dcdfe6;
    text-align: center;
  }
  .form-item__slot {
    margin-bottom: 0;
    .el-form-item__content {
      display: block;
    }
  }
}
::v-deep .el-button {
  border: none;
  border-radius: 15px;
  background-color: rgba(109, 117, 241, 1);
  color: #fff;
  padding: 8px 25px;
}
::v-deep .el-checkbox {
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #999;
  }
}
</style>
