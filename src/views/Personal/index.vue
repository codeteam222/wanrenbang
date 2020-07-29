<template>
  <div class="personal-index">
    <c-menu :active="2"></c-menu>
    <div class="user-info">
      <div class="left">
        <div>
          <img class="avatar" src="@/assets/img/avatar.jpg" alt="" />
        </div>
        <div class="name">啊哈哈哈</div>
      </div>
      <div class="right">
        <b style="font-weight">账户余额</b>
        <div class="money">
          <span class="unit">￥</span>
          <span>154,211.00</span>
        </div>
        <div class="operation">
          <div class="btn recharge-btn" @click="recharge">充值</div>
          <div class="btn withdraw-btn" @click="withdraw">提现</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="粉丝" to="/personal/fans" />
          <van-sidebar-item title="收藏/关注/动态" to="/personal/follow" />
          <van-sidebar-item title="历史记录" to="/personal/history" />
          <van-sidebar-item title="账户管理" to="/personal/safe" />
          <van-sidebar-item title="项目中心" to="/personal/project" />
          <van-sidebar-item title="消息中心" to="/personal/message" badge="99+" />
          <van-sidebar-item title="用户协议" to="/personal/agreement" />
          <van-sidebar-item title="在线客服" />
          <van-sidebar-item title="退出登录" @click="loginOut" />
        </van-sidebar>
        <div class="glob-box">
          <p class="name">--金币--</p>
          <p class="num">1332个</p>
          <p class="prompt">（注：账户金币于每晚21：00整准时清空归零，请及时使用！）</p>
        </div>
      </div>
      <div class="right">
        <div class="message-list">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="message-item" v-for="(message, index) in messageList" :key="index">
              <div class="thumb">
                <img class="avatar" :src="message.logo" alt="" />
              </div>
              <div class="message-info">
                <p class="title">{{ message.msgTitle }}</p>
                <p>
                  {{ message.content }}
                </p>
                <p>{{ message.createTime }}</p>
              </div>
            </div>
          </van-list>
        </div>
      </div>
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
      finished: false
    };
  },
  created() {
    this.getMessageList();
  },
  methods: {
    getMessageList(params = this.params) {
      this.loading = true;
      this.$fetch
        .get("/appMessage/findAllAppMessage", {
          ...params,
          token: this.token
        })
        .then(({ data }) => {
          this.finished = data.length < this.params.size;
          this.messageList = data;
          this.loading = false;
        })
        .catch(({ msg }) => {
          this.$notify({ type: "warning", message: msg });
          this.loading = false;
          this.finished = true;
        });
    },
    onLoad() {
      this.getMessageList({
        start: this.params.start + 1
      });
    },
    loginOut() {
      this.$router.push({ name: "Login" });
    },
    recharge() {
      this.$refs.recharge.open();
    },
    withdraw() {
      this.$refs.withdraw.open();
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
  display: flex;
  justify-content: space-between;
  align-content: center;
  .left {
    width: 120px;
    border-right: 1px solid rgb(224, 224, 224);
  }
  .right {
    flex: 1;
    margin-left: 1px;
  }
}
.user-info {
  background-color: rgba(242, 242, 242, 1);
  padding-bottom: 5px;
  .left {
    position: relative;
    padding-top: 25px;
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      height: 80px;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .right {
    padding-top: 10px;
  }
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.name {
  font-weight: 700;
  font-size: 12px;
}
.money {
  font-size: 20px;
  font-weight: 700;
  color: #ff9900;
  margin-bottom: 10px;
  margin-top: 5px;
  .unit {
    font-size: 14px;
  }
}
.btn {
  width: 80px;
  height: 25px;
  line-height: 25px;
  border-radius: 5px;
  margin: 10px;
  font-size: 12px;
  display: inline-block;
  color: #fff;
}
.recharge-btn {
  background-color: rgb(109, 117, 241);
}
.withdraw-btn {
  background-color: rgb(245, 109, 145);
}
.van-sidebar {
  width: 100%;
  &-item {
    padding-left: 10px;
    padding-right: 13px;
  }
}
.message-list {
  height: 657px;
  overflow-y: auto;
}
.message-item {
  display: flex;
  justify-items: flex-start;
  padding: 20px 0px;
  background-color: #f7f8fa;
  border-bottom: 1px solid rgb(224, 224, 224);
  .thumb {
    width: 55px;
    height: 55px;
    img {
      width: 40px;
      height: auto;
    }
  }
  .message-info {
    flex: 1;
    text-align: left;
    padding-left: 10px;
    p {
      margin-bottom: 10px;
      font-size: 12px;
      color: #666666;
    }
    .title {
      font-weight: 700;
      font-size: 14px;
    }
  }
}
.van-sidebar-item--select,
.van-sidebar-item--select:active {
  background-color: #f7f8fa;
}
.van-sidebar-item--select::before {
  display: none;
}
.van-sidebar-item {
  border-bottom: 1px solid rgb(231, 231, 231);
}
.glob-box {
  padding: 10px 0;
  background-color: #f7f8fa;
  font-size: 12px;
  p {
    margin: 5px 0;
  }
  .prompt {
    font-size: 10px;
  }
  .num {
    font-size: 16px;
    color: #ff9900;
  }
}
</style>
