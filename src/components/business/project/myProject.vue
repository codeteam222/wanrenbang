<template>
  <div class="b--procejt">
    <project-list :data="data" @load="onLoad">
      <template v-slot:action="{ data, index }">
        <div class="button" @click="openBuyPopup(data, index)">出售股份</div>
      </template>
    </project-list>
    <van-popup
      v-model="popupVisible"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      round
    >
      <div class="popup-body">
        <div class="name">
          <span style="color:#E91E63;">l</span>{{ currentData.name }}<span style="color:#169BD5;">l</span>
        </div>
        <div class="my-ratio">(我占股{{ currentData.ratio }}%)</div>
        <div class="field">出售<van-field v-model="sellNumber" />%股份</div>
        <div class="field">价值<van-field v-model="sellPrice" />RMB</div>
        <div class="actions">
          <van-button type="default" size="small" @click="closeBuyPopup">取消</van-button>
          <van-button type="info" size="small" @click="action" :loading="actionLoading">确认出售</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import ProjectList from "./projectList";
import { accSubtr } from "@/utils/util";
export default {
  components: {
    "project-list": ProjectList
  },
  data() {
    return {
      data: [
        {
          name: "文化复兴项目1",
          ratio: "0.0007",
          desc:
            "大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个",
          logo: require("@/assets/img/avatar.jpg")
        },
        {
          name: "文化复兴项目2",
          ratio: "0.0007",
          desc:
            "大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个",
          logo: require("@/assets/img/avatar.jpg")
        },
        {
          name: "文化复兴项目3",
          ratio: "0.0007",
          desc: "大厦离开股价拉升看结果徕卡时间卢卡斯感觉拉克丝借记卡十六个",
          logo: require("@/assets/img/avatar.jpg")
        }
      ],
      popupVisible: false,
      currentData: {},
      currentIndex: -1,
      sellNumber: "",
      sellPrice: ""
    };
  },
  computed: {
    actionLoading() {
      return this.$store.state.loading;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData(params, done) {
      if (done) {
        const copy = [].concat(this.data);
        this.data = this.data.concat(copy);
        done();
      }
    },
    onLoad(done) {
      this.getData(this.params, done);
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
        this.sellNumber = "";
        this.sellPrice = "";
      }, 350);
    },
    action() {
      if (this.actionLoading) return;
      this.$store.commit("UPDATE_LOADING", true);
      setTimeout(() => {
        this.$store.commit("UPDATE_LOADING", false);
        this.$notify({ type: "success", message: "出售成功" });
        this.$set(this.currentData, "ratio", accSubtr(this.currentData.ratio, this.sellNumber));
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
  padding: 20px 0;
  font-size: 14px;
  .name {
    font-weight: 700;
    font-size: 16px;
  }
  .my-ratio {
    color: #e25a53;
    font-size: 12px;
    margin-bottom: 20px;
  }
  .field {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  /deep/ .van-field {
    width: 160px;
    color: #000;
    padding: 0 5px;
    .van-field__body {
      border: 1px solid #ccc;
    }
    .van-field__control {
      padding: 0 5px;
      text-align: center;
      color: #ff9900;
    }
  }
  .van-button {
    width: 100px;
    margin: 10px 10px 0 10px;
  }
}
</style>
