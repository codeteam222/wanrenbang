<template>
  <div class="plan-koifish">
    <c-feed ref="feed" :data="commentList" @load="load" :type="'koiFish'">
      <template v-slot:content="{ data }">
        <div class="content">
          <p class="weight-bold total">
            <label>出售：</label>{{ data.sell_num }}张福利卡，{{ data.price }}元一张，快来购买
          </p>
          <p class="weight-bold sale"><label>已售出：</label>{{ data.selled_num || 0 }}张</p>
          <p class="weight-bold surplus"><label>剩余：</label>{{ data.sell_num - data.selled_num }}张</p>
          <p class="mood"><label>心情：</label>{{ data.content }}</p>
        </div>
      </template>
      <template v-slot="scope">
        <div :class="['state', 'state-' + scope.data.state]" @click="handlerAction(scope.data)">
          {{ stateMap[scope.data.state] }}
        </div>
      </template>
    </c-feed>
    <BBuyWelfareCard ref="buyWelfareCard" :price="current.price || 0" @success="buySuccess" />
    <BSell ref="sell" @success="releseSuccess" />
    <div class="add-message" @click="openSell">
      <img src="@/assets/img/edit-article.png" />
      <div>出售</div>
    </div>
  </div>
</template>

<script>
import Feed from "@/components/comm/Feed/index";
import BBuyWelfareCard from "@/components/business/buyWelfareCard";
import BSell from "@/components/business/sell";

export default {
  components: {
    "c-feed": Feed,
    BBuyWelfareCard,
    BSell
  },
  data() {
    return {
      commentList: [],
      stateMap: {
        0: "购买",
        1: "已售完",
        2: "已圆梦"
      },
      params: {
        p: 0
      },
      current: {}
    };
  },
  methods: {
    handlerAction(data) {
      if (data.state === 0) {
        this.current = data;
        this.$refs.buyWelfareCard.open();
      }
    },
    buySuccess() {
      this.$set(this.current, "state", 1);
    },
    load(done) {
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage + 1;
      if (p === 1) {
        this.commentList = [];
      }
      this.$fetch
        .get("/Home/Api/article", {
          ...this.params,
          is_card: 1,
          p
        })
        .then(({ data }) => {
          const { article_data, totalpages } = data;
          this.commentList = this.commentList.concat(article_data);
          done(totalpages === p);
          this.params.p = p;
        })
        .catch(() => {
          done(true);
        });
    },
    openSell() {
      this.$refs.sell.open();
    },
    releseSuccess() {
      this.params.p = 0;
      this.$refs.feed.reset();
    }
  }
};
</script>

<style lang="less" scoped>
.add-message {
  position: fixed;
  right: 20px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 12px;
  color: #2892ee;
  background-color: rgb(255, 193, 7);
  padding-top: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  img {
    width: 20px;
  }
}
.state {
  width: 60px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 15px;
  font-size: 12px;
  color: #fff;
}
.state-0 {
  background-color: rgb(90, 185, 99);
}
/*.state-1 {
  background-color: #ec7259;
}*/
.state-1 {
  background-color: rgb(204, 204, 204);
}
/deep/ .feed-content {
  .content {
    p {
      margin-bottom: 10px;
    }
    .weight-bold {
      font-weight: 700;
    }
    label {
      font-weight: 700;
      color: #000;
    }
    .sale {
      color: #ffc000;
    }
    .surplus {
      color: #fc8ca8;
    }
  }
  .links a {
    font-size: 14px;
  }
}
.sell {
  background-color: rgb(242, 242, 242);
  font-size: 12px;
  display: inline-block;
  margin: auto;
  border-radius: 20px;
  padding: 5px 20px;
  margin-top: 10px;
  span {
    border-radius: 50%;
    background-color: rgb(252, 140, 168);
    color: #fff;
    padding: 2px;
    font-size: 10px;
  }
  label {
    color: #6d75f1;
    margin-right: 5px;
  }
}
</style>
