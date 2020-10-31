<template>
  <div class="personal-index">
    <c-menu :active="2"></c-menu>
    <div class="user-info">
      <van-cell class="base-info" center is-link>
        <template #title>
          <img v-if="userInfo.head_img" class="avatar" :src="userInfo.head_img" />
          <img v-else class="avatar" src="@/assets/img/default-avatar.png" />
          <div>
            <div class="username" v-if="token">{{ userInfo.username || "" }}</div>
            <router-link v-else to="/login" class="toLogin">登陆 / 注册</router-link>
            <router-link to="/personal/safe" class="manager">账号管理</router-link>
          </div>
        </template>
        <template #right-icon>
          <van-icon name="arrow" @click="handleClick({ name: 'PersonalSafe' })" />
        </template>
      </van-cell>
      <div class="financial-details">
        <div class="title">账户余额<span @click="handleClick({ name: 'PersonalFund' })">账单明细</span></div>
        <div class="money">￥{{ userInfo.money || 0 }}</div>
        <div class="btn-group">
          <span class="btn recharge" @click="recharge">充值</span>
          <span class="btn withdraw" @click="withdraw">提现</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-item user-operaions">
        <div v-for="(item, index) in actions" :key="index" @click="handleClick(item)">
          <img :src="item.img" />
          <p>{{ item.label }}</p>
        </div>
      </div>
      <div class="menu-list">
        <div
          v-for="(menu, index) in menus"
          :key="index"
          class="menu-item box-item"
          @click="handleClick(menu)"
        >
          <div class="left">
            <img :src="menu.img" />
            <label>{{ menu.label }}</label>
            <span class="tip" v-if="menu.tip">{{ menu.tip }}</span>
          </div>
          <div class="right">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <div class="gold-box box-item">
        <div class="title">-- 金币 --</div>
        <div class="number">{{ userInfo.coin || 0 }}</div>
      </div>
      <div class="desc">（注：账户金币于每晚21：00整准时清空，请及时使用）</div>
    </div>

    <b-recharge ref="recharge"></b-recharge>
    <b-withdraw ref="withdraw"></b-withdraw>
  </div>
</template>

<script>
import Menu from "@/components/comm/Header";
import BRecharge from "@/components/business/recharge";
import BWithdraw from "@/components/business/withdraw";
export default {
  components: {
    "c-menu": Menu,
    "b-recharge": BRecharge,
    "b-withdraw": BWithdraw
  },
  data() {
    return {
      activeKey: 0,
      messageList: [],
      params: {
        start: 0,
        size: 10
      },
      loading: false,
      finished: false,
      menus: [
        {
          label: "圆梦记录",
          name: "PersonalHistory",
          img: require("@/assets/img/dream.png")
        },
        {
          label: "消息通知",
          name: "PersonalMessage",
          img: require("@/assets/img/message.png"),
          tip: 3
        },
        {
          label: "项目中心",
          name: "PersonalProject",
          img: require("@/assets/img/project.png")
        },
        {
          label: "用户协议",
          name: "PersonalAgreement",
          img: require("@/assets/img/xieyi.png")
        },
        {
          label: "退出登录",
          img: require("@/assets/img/loginout.png"),
          clickEvent: this.loginOut
        }
      ],
      actions: [
        {
          label: "粉丝",
          name: "PersonalFans",
          img: require("@/assets/img/fans.png")
        },
        {
          label: "关注",
          name: "PersonalFollow",
          img: require("@/assets/img/follow.png")
        },
        {
          label: "收藏",
          name: "PersonalFollow",
          img: require("@/assets/img/collection.png")
        },
        {
          label: "动态",
          name: "PersonalFollow",
          img: require("@/assets/img/behavior.png")
        }
      ]
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo || {};
    },
    token() {
      return this.$store.state.token;
    }
  },
  created() {
    this.$store.dispatch("GetUserInfo");
  },
  methods: {
    loginOut() {
      this.$store.dispatch("ClearInfo");
      this.$router.push({ name: "Login" });
    },
    recharge() {
      this.$refs.recharge.open();
    },
    withdraw() {
      this.$refs.withdraw.open();
    },
    handleClick(item) {
      if (item.name) {
        this.$router.push({ name: item.name });
      } else {
        item.clickEvent();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.personal-index {
  font-size: 14px;
}
.main,
.user-info {
  background-color: rgba(228, 228, 228, 1);
  padding: 0 10px;
  padding-bottom: 5px;
  height: 135px;
  margin-bottom: 80px;
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .toLogin {
    font-weight: 700;
    color: #333333;
    display: block;
    width: 100px;
  }
  .manager {
    font-size: 12px;
    text-decoration: underline;
    color: #666;
  }
  .van-cell {
    background-color: transparent;
  }
  .base-info {
    .van-cell__title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
    }
    .van-icon-arrow {
      color: #333;
      font-weight: 700;
    }
  }
  .financial-details {
    height: 90px;
    background-color: rgba(242, 242, 242, 1);
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.349019607843137);
    border-radius: 10px;
    width: 285px;
    margin: auto;
    margin-top: 10px;
    padding: 13px 10px;
    .title {
      font-size: 12px;
      position: relative;
      font-weight: 700;
      color: #333333;
      span {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-weight: 400;
        color: #003b22;
        font-size: 10px;
        padding: 12px 0 12px 12px;
      }
    }
    .money {
      color: #ff9900;
      font-weight: 700;
      margin-top: 8px;
      font-size: 20px;
    }
    .btn {
      width: 100px;
      color: #fff;
      display: inline-block;
      margin: 0;
      height: 28px;
      line-height: 30px;
      border-radius: 0;
      margin-top: 10px;
      &.recharge {
        background-color: rgb(109, 117, 241);
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border-right: 1px solid #fff;
      }
      &.withdraw {
        background-color: rgb(252, 140, 168);
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
  }
  .van-icon-arrow {
    display: inline-block;
    padding: 20px;
    padding-right: 0;
  }
  .username {
    font-weight: 700;
    color: #333333;
  }
}
.btn-group {
  margin-top: 3px;
}
.box {
  padding: 0 5px 40px 5px;
  margin-top: 70px;
  .box-item {
    background-color: rgba(242, 242, 242, 1);
    border-radius: 8px;
  }
}
.user-operaions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 18px 20px;
  font-size: 10px;
  margin-bottom: 20px;
  img {
    width: 15px;
    margin: 0 10px;
  }
}
.menu-list {
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    padding: 0 8px;
    font-weight: 700;
    color: #333;
    font-size: 12px;
    img {
      width: 18px;
      vertical-align: middle;
      margin-top: -2px;
      margin-right: 5px;
    }
    .right {
      padding: 10px;
      padding-right: 0;
    }
    .van-icon-arrow {
      font-weight: 700;
      font-size: 10px;
    }
    .tip {
      display: inline-block;
      font-size: 8px;
      background-color: rgb(252, 140, 168);
      border-radius: 50%;
      width: 13px;
      height: 13px;
      line-height: 13px;
      vertical-align: top;
      margin-left: 3px;
      color: #fff;
    }
  }
}
.gold-box {
  padding: 10px 0 15px 0;
  .title {
    font-weight: 700;
    font-size: 12px;
  }
  .number {
    color: #ff9900;
    font-weight: 700;
    font-size: 22px;
    margin-top: 5px;
  }
}
.desc {
  font-size: 10px;
  color: #003b22;
  margin-top: 5px;
}
</style>
