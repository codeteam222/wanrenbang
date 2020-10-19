<template>
  <div class="b--procejt">
    <project-list :data="data" @load="getData">
      <template v-slot:action="{ data, index }">
        <div class="button" @click="openBuyPopup(data, index)">入股</div>
      </template>
    </project-list>
    <van-popup
      v-model="popupVisible"
      class=" popup-box"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      lock-scroll
      get-container="body"
      round
    >
      <div class="popup-body">
        <div class="my-money">我的余额：4321231</div>
        <div class="name">
          <span style="color:#E91E63;">l</span>{{ currentData.name }}<span style="color:#169BD5;">l</span>
        </div>
        <div class="message">
          <div>第一轮名额：10000名<span>剩余：3025名</span></div>
          <div>1个名额=200元=0.0007%股</div>
        </div>
        <div class="stepper">我要抢<van-stepper v-model="buyNumber" />个名额</div>
        <div class="computed">
          ({{ buyNumber }}个名额价值{{ buyNumber * 200 }}元，占股{{ accMul(buyNumber, 0.0007) }}%)
        </div>
        <div class="actions">
          <van-button type="default" size="small" @click="closeBuyPopup">取消</van-button>
          <van-button type="info" size="small" @click="action" :loading="actionLoading">确认购入</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import ProjectList from "./projectList";
import { accMul } from "@/utils/util";
export default {
  components: {
    "project-list": ProjectList
  },
  data() {
    return {
      data: [],
      popupVisible: false,
      currentData: {},
      currentIndex: -1,
      buyNumber: 1,
      accMul: accMul,
      params: {
        p: 0
      }
    };
  },
  computed: {
    actionLoading() {
      return this.$store.state.loading;
    }
  },
  created() {
    // this.getData();
  },
  methods: {
    getData(done) {
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage + 1;
      if (p === 1) {
        this.data = [];
      }
      this.$fetch
        .get("/Home/List/index/mcode/ape5f8d94799fb8c.html", {
          ...this.params,
          p
        })
        .then(({ data }) => {
          this.data = this.data.concat(data.table_data);
          this.params.p = p;
          done(data.totalpages === this.params.p);
        })
        .catch(() => {
          done(true);
        });
    },
    openBuyPopup(d, i) {
      this.popupVisible = true;
      this.currentData = d;
      this.currentIndex = i;
    },
    closeBuyPopup() {
      this.popupVisible = false;
      setTimeout(() => {
        this.currentData = {};
        this.currentIndex = -1;
        this.buyNumber = 1;
      }, 350);
    },
    action() {
      if (this.actionLoading) return;
      this.$store.commit("UPDATE_LOADING", true);
      setTimeout(() => {
        this.$store.commit("UPDATE_LOADING", false);
        this.$notify({ type: "success", message: "入股成功" });
        this.$set(this.currentData, "ratio", accMul(this.buyNumber, 0.0007) + "%");
        this.closeBuyPopup();
      }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.b-about-money {
  width: 300px;
  margin: auto;
  border-radius: 15px;
  background-color: #fff;
  padding: 20px 30px;
}
.title {
  margin-bottom: 10px;
  font-weight: 700;
}
.content {
  font-size: 12px;
  text-align: left;
  line-height: 18px;
}
.button {
  padding: 5px 20px;
  border-radius: 0;
  font-size: 12px;
}
.popup-body {
  padding: 10px;
  font-size: 14px;
  text-align: center;
  .my-money {
    text-align: left;
    margin-bottom: 10px;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .message {
    text-align: left;
    padding-left: 70px;
    margin: 15px 0;
    font-size: 12px;
    span {
      margin-left: 10px;
    }
  }
  .stepper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
  .computed {
    margin-bottom: 20px;
    color: #ccc;
    margin-top: 10px;
    font-size: 12px;
  }
  /deep/ .van-stepper {
    margin: 0 5px;
    .van-stepper__input {
      width: 150px;
      color: #ff9900;
      background-color: #fff;
    }
    button {
      background-color: rgba(215, 215, 215, 1);
      border-radius: 0;
      font-size: 12px;
      &::before {
        color: #000 !important;
      }
    }
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
    margin: 0 10px;
  }
  .van-button--default {
    background-color: #cccccc;
    color: #fff;
  }
}
</style>
