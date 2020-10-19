<template>
  <div class="b--procejt">
    <project-list :data="data" @load="getData">
      <template v-slot:action="{ data, index }">
        <div class="button" @click="openBuyPopup(data, index)">出售股份</div>
      </template>
    </project-list>
    <van-popup
      class="popup-box"
      v-model="popupVisible"
      position="bottom"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      lock-scroll
      get-container="body"
      round
    >
      <div class="popup-body">
        <div class="name">
          <span style="color:#E91E63;">l</span>{{ currentData.name }}<span style="color:#169BD5;">l</span>
        </div>
        <div class="my-ratio">(我占股{{ currentData.ratio }}%)</div>
        <div class="field">出售<van-field v-model="sellNumber" @change="sellNumberChange" />股份</div>
        <div class="field">价值<van-field v-model="sellPrice" /><label>RMB</label></div>
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
      data: [],
      popupVisible: false,
      currentData: {},
      currentIndex: -1,
      sellNumber: "",
      sellPrice: "",
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
  methods: {
    getData(done) {
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage + 1;
      if (p === 1) {
        this.data = [];
      }
      this.$fetch
        .get("/Home/List/index/mcode/ape5f8d9f99540dd.html", {
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
    },
    sellNumberChange(value) {
      console.log(value);
      this.sellNumber = this.sellNumber.split("%")[0] + "%";
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
  text-align: center;
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
    label {
      color: #ff9900;
    }
  }
  /deep/ .van-field {
    width: 190px;
    color: #000;
    padding: 0 5px;
    background-color: #f2f2f2;
    .van-field__body {
      border: 1px solid #ccc;
    }
    .van-field__control {
      padding: 0 5px;
      text-align: center;
      color: #ff9900;
      background-color: #fff;
    }
  }
  .van-button {
    width: 100px;
    margin: 10px 10px 0 10px;
  }
  .van-button--default {
    background-color: #cccccc;
    color: #fff;
  }
}
</style>
