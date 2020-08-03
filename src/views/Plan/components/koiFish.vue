<template>
  <div class="plan-koifish">
    <c-feed :data="commentList" @load="load" :type="'koiFish'">
      <template v-slot:content="{ data }">
        <div class="content">
          <p class="weight-bold total">
            <label>出售：</label>{{ data.total }}张福利卡，{{ data.price }}元一张，快来购买
          </p>
          <p class="weight-bold sale"><label>已售出：</label>{{ data.sale || 0 }}张</p>
          <p class="weight-bold surplus"><label>剩余：</label>{{ data.surplus }}张</p>
          <p class="mood"><label>心情：</label>{{ data.mood }}</p>
        </div>
      </template>
      <template v-slot="scope">
        <div :class="['state', 'state-' + scope.data.state]" @click="handlerAction(scope.data)">
          {{ stateMap[scope.data.state] }}
        </div>
      </template>
    </c-feed>
    <BBuyWelfareCard ref="buyWelfareCard" :price="current.price || 0" @success="buySuccess" />
    <BSell ref="sell" :cardNum="cardNum" @relese="relese" />
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
      commentList: [
        {
          avatar: require("@/assets/img/pavatar.jpg"),
          nickname: "爱吃萝卜的兔子",
          createTime: "2020-10-28 18:11:22",
          links: [
            {
              text: "#第20200206期幸运锦鲤",
              url: "https://wwww.baidu.com"
            }
          ],
          imgs: [
            require("@/assets/img/pu.png"),
            require("@/assets/img/pu.png"),
            require("@/assets/img/pu.png")
          ],
          total: 12542,
          price: 1,
          sale: 540,
          surplus: 12542 - 540,
          mood: "美滋滋，的时间里开发手机浪费框数据浪费三两句菲利克斯发金石可",
          state: 0,
          sex: 0,
          buyPersonal: [
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            }
          ]
        },
        {
          avatar: require("@/assets/img/pavatar.jpg"),
          nickname: "爱吃萝卜的兔子",
          createTime: "2020-10-28 18:11:22",
          links: [
            {
              text: "#第20200206期幸运锦鲤",
              url: "https://wwww.baidu.com"
            }
          ],
          imgs: [
            require("@/assets/img/pu.png"),
            require("@/assets/img/pu.png"),
            require("@/assets/img/pu.png")
          ],
          total: 12542,
          price: 1,
          sale: 540,
          surplus: 12542 - 540,
          mood: "美滋滋，的时间里开发手机浪费框数据浪费三两句菲利克斯发金石可",
          state: 0,
          sex: 0,
          buyPersonal: [
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            }
          ]
        },
        {
          avatar: require("@/assets/img/pavatar.jpg"),
          nickname: "爱吃萝卜的兔子",
          createTime: "2020-10-28 18:11:22",
          links: [
            {
              text: "#第20200206期幸运锦鲤",
              url: "https://wwww.baidu.com"
            }
          ],
          imgs: [
            require("@/assets/img/pu.png"),
            require("@/assets/img/pu.png"),
            require("@/assets/img/pu.png")
          ],
          total: 12542,
          price: 1,
          sale: 540,
          surplus: 12542 - 540,
          mood: "美滋滋，的时间里开发手机浪费框数据浪费三两句菲利克斯发金石可",
          state: 0,
          sex: 0,
          buyPersonal: [
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            },
            {
              avatar: require("@/assets/img/pavatar.jpg"),
              name: "哈哈哈",
              num: 10
            }
          ]
        }
      ],
      stateMap: {
        0: "购买",
        1: "已售完",
        2: "已圆梦"
      },
      current: {},
      cardNum: 85264
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
      const copy = [].concat(this.commentList);
      this.commentList = this.commentList.concat(copy);
      done();
    },
    openSell() {
      this.$refs.sell.open();
    },
    relese() {
      this.$notify({ type: "success", message: "发布成功" });
      this.$refs.sell.close();
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
