<template>
  <div class="plan-detail">
    <div class="detail-item plan-id">
      <span style="color:#E91E63;">l</span>
      <span style="color:#FFC107;">l</span>
      第20200206期
      <span class="state">正在进行中...</span>
    </div>
    <div class="detail-item people-num total">
      <span style="color:#FFC107;">l</span>当前参与人数：
      <span class="num">33542；</span>
    </div>
    <div class="detail-item gold-num total">
      <span style="color:#E91E63;">l</span>当前金币总数：
      <span class="num">33542；</span>
    </div>
    <div class="detail-item luck-number">
      <div class="detail-item-title">
        <span style="color:#2892EE;">l</span>本期我获得XX个幸运号码<span style="color:#FFC107;">l</span>
      </div>
      <ul class="number-list">
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
        <li>10000026；</li>
      </ul>
    </div>
    <div class="detail-item">
      <div class="detail-item-title">
        <span style="color:#E91E63;">l</span>计算过程<span style="color:#5AB963;">l</span>
      </div>
      <p>根据幸运号码计算公式：[ (A+B) /C ] 取余数+10000001</p>
      <p>A=43445545；</p>
      <p>B=暂未知；</p>
      <p>C=33542；</p>
      <p>
        幸运号码：等待开奖....
        <c-countdown :remainTime="87000" type="text"></c-countdown>
      </p>
      <p>幸运锦鲤：等待揭晓....</p>
    </div>
    <div class="detail-item operation">
      <div class="button" @click="openPopup('join')">我的参与记录</div>
      <div class="button" @click="openPopup('koiFish')">历史幸运锦鲤</div>
    </div>
    <div class="detail-item join-detail">
      <div class="detail-item-title"><span style="color:#5AB963;">l</span>用户参与详情</div>
      <ul class="join-list">
        <li v-for="(person, index) in joinList" :key="index" class="join-item">
          <div class="user-info">
            <img class="avatar" :src="person.avatar" alt="" />
            <div class="message">
              <div class="nickname">{{ person.nickname }}</div>
              <div class="gold">参与{{ person.goldNum }}个商币</div>
            </div>
          </div>
          <div class="time">
            {{ person.time }}
          </div>
        </li>
      </ul>
    </div>
    <c-history ref="history"></c-history>
  </div>
</template>

<script>
import CountDown from "@/components/comm/CountDown";
import Chistory from "@/components/business/history";

export default {
  components: {
    "c-countdown": CountDown,
    "c-history": Chistory
  },
  data() {
    return {
      joinList: [
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "闭关修炼",
          goldNum: 10,
          time: "2020年2月11 15：46：32"
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "闭关修炼",
          goldNum: 10,
          time: "2020年2月11 15：46：32"
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "闭关修炼",
          goldNum: 10,
          time: "2020年2月11 15：46：32"
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "闭关修炼",
          goldNum: 10,
          time: "2020年2月11 15：46：32"
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "闭关修炼",
          goldNum: 10,
          time: "2020年2月11 15：46：32"
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "闭关修炼",
          goldNum: 10,
          time: "2020年2月11 15：46：32"
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          nickname: "闭关修炼",
          goldNum: 10,
          time: "2020年2月11 15：46：32"
        }
      ]
    };
  },
  methods: {
    openPopup(type) {
      this.$refs.history.open({
        type
      });
    }
  }
};
</script>

<style lang="less" scoped>
.plan-detail {
  font-size: 14px;
  text-align: left;
  padding: 20px;
  p {
    margin-bottom: 5px;
  }
}
.detail-item {
  margin-bottom: 20px;
  &-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }
}
.plan-id {
  font-size: 26px;
  font-weight: 700;
  .state {
    font-size: 14px;
    color: #b6b6b6;
    font-weight: 400;
  }
}
.total {
  margin-bottom: 10px;
  font-size: 16px;
  .num {
    color: #e25a53;
  }
}
.people-num {
  color: #2892ee;
}
.gold-num {
  color: #5ab963;
}
.number-list {
  overflow: hidden;
  li {
    float: left;
  }
}
/deep/ .c-countdown {
  display: inline-block;
  margin-left: 20px;
  color: #e25a53;
}
.operation {
  .button {
    margin-right: 10px;
    font-size: 12px;
  }
}
.join-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(232, 232, 232);
  padding: 5px 0;
  font-size: 12px;
  .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .nickname {
    color: #333333;
    font-weight: 700;
  }
  .time {
    color: rgb(161, 161, 161);
  }
  .gold {
    color: #ff9900;
  }
}
</style>
