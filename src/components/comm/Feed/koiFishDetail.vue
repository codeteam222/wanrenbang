<template>
  <div class="feed-item">
    <div class="feed-info">
      <div class="message-box">
        <img class="avatar" :src="data.avatar" />
        <div>
          <div class="nickname">
            {{ data.nickname }}
            <img v-if="data.sex === 0" class="sex" src="@/assets/img/man.png" />
            <img v-if="data.sex === 1" class="sex" src="@/assets/img/women.png" />
          </div>
          <div class="time">{{ data.createTime }}</div>
        </div>
      </div>
      <div class="action">
        <i class="Hui-iconfont Hui-iconfont-share2"></i>
      </div>
    </div>
    <div class="feed-content koifish-feed">
      <div class="content">
        <p class="weight-bold total">
          <label>出售：</label>{{ data.total }}张福利卡，{{ data.price }}元一张，快来购买
        </p>
        <p class="weight-bold sale"><label>已售出：</label>{{ data.sale || 0 }}张</p>
        <p class="weight-bold surplus"><label>剩余：</label>{{ data.surplus }}张</p>
        <p class="mood"><label>心情：</label>{{ data.mood }}</p>
      </div>
      <div class="links">
        <a v-for="(link, linkIndex) in data.links" :key="linkIndex" :href="link.url" target="_blank">{{
          link.text
        }}</a>
      </div>
      <div class="imgs">
        <div class="img-item" v-for="(img, imgIndex) in data.imgs" :key="imgIndex">
          <img :src="img" />
        </div>
      </div>
      <div class="buy">
        <div class="button button-buy" @click="$refs.buyWelfareCard.open()">购买福利卡</div>
        <div class="buy-num">《已有45人购买》</div>
        <div class="avatar-list">
          <img
            v-for="(user, index) in data.buyPersonal.slice(0, 5)"
            :key="index"
            :src="user.avatar"
            class="avatar"
            @click="more"
          />
          <span class="expand avatar" @click="more">...</span>
        </div>
      </div>
    </div>
    <BBuyPersonal ref="buyPersonal" :data="data.buyPersonal" />
    <BBuyWelfareCard ref="buyWelfareCard" :price="data.price" />
  </div>
</template>

<script>
import BBuyPersonal from "@/components/business/buyPersonal";
import BBuyWelfareCard from "@/components/business/buyWelfareCard";
export default {
  components: {
    BBuyPersonal,
    BBuyWelfareCard
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    more() {
      this.$refs.buyPersonal.open();
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/feed.less";
.koifish-feed {
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
}
.Hui-iconfont-share2 {
  color: rgb(226, 90, 83);
  font-size: 16px;
}
.buy {
  text-align: center;
}
.button-buy {
  // width: 120px;
  margin: auto;
  margin-top: 30px;
  font-size: 16px;
  border-radius: 50px;
}
.buy-num {
  font-size: 10px;
  color: rgb(172, 172, 172);
  margin-top: 20px;
  margin-bottom: 15px;
}
.avatar-list {
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    width: 30px;
    height: 30px;
  }
}
.expand {
  display: inline-block;
  background-color: rgb(204, 204, 204);
  line-height: 25px;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  text-indent: 5px;
  color: #fff;
}
</style>
