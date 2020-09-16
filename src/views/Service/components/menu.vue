<template>
  <div class="c-menu">
    <div class="menu-list" v-if="!isOnlySearch">
      <div v-for="(item, index) in menu" :key="index" class="menu-item" @click="toPage(item)">
        <div class="img"><img :src="item.img" alt="" srcset="" /></div>
        <div class="label">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: "生活服务",
          img: require("@/assets/img/shenghuo.png"),
          type: 0
        },
        {
          label: "生活娱乐",
          img: require("@/assets/img/yule.png"),
          type: 1
        },
        {
          label: "教育培训",
          img: require("@/assets/img/jiaoyu.png"),
          type: 2
        },
        {
          label: "特价商品",
          img: require("@/assets/img/tejia.png"),
          type: 3
        },
        {
          label: "美食",
          img: require("@/assets/img/meishi.png"),
          type: 4
        },
        {
          label: "汽车",
          img: require("@/assets/img/qiche.png"),
          type: 5
        },
        {
          label: "商业代办",
          img: require("@/assets/img/daiban.png"),
          type: 6
        },
        {
          label: "金融服务",
          img: require("@/assets/img/jinrong.png"),
          type: 7
        },
        {
          label: "农副产品",
          img: require("@/assets/img/nongfu.png"),
          type: 8
        },
        {
          label: "个人分享",
          img: require("@/assets/img/fenxiang.png"),
          type: 9
        }
      ]
    };
  },
  methods: {
    toPage(item) {
      this.$router.push({ name: "OtherPage", query: { type: item.type } });
    }
  }
};
</script>

<style lang="less" scoped>
.c-menu {
  border-bottom: 3px solid rgba(242, 242, 242, 1);
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 10px;
  height: 105px;
}
.menu-item {
  width: 75px;
  margin-bottom: 15px;
  .img img {
    width: 25px;
  }
}
</style>
