<template>
  <div class="c-menu">
    <div class="search">
      <el-input v-model="searchValue" placeholder="搜索">
        <template #suffix>
          <i class="el-icon-search" @click="handleSearchVisible"></i>
        </template>
      </el-input>
    </div>
    <div class="menu-list" v-if="!isOnlySearch">
      <div v-for="(item, index) in menu" :key="index" class="menu-item" @click="toPage(item)">
        <div class="img"><img :src="item.img" alt="" srcset="" /></div>
        <div class="label">{{ item.label }}</div>
      </div>
    </div>
    <!-- <b-search ref="search"></b-search> -->
  </div>
</template>

<script>
export default {
  props: {
    isOnlySearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchValue: "",
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
          label: "教育培训",
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
    handleSearchVisible() {
      // this.$refs.search.open();
    },
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
  margin-top: -30px;
  padding-bottom: 5px;
}
.menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 10px;
}
.menu-item {
  width: 75px;
  margin-bottom: 10px;
  .img img {
    width: 25px;
  }
}
.search {
  width: 250px;
  margin: auto;
  margin-bottom: 10px;
  /deep/ .el-input {
    .el-input__inner {
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.349019607843137);
      border: 3px solid rgba(255, 208, 0, 1);
      border-radius: 30px;
      padding: 0 5px;
      position: relative;
      background-color: #fff;
      text-align: center;
      color: #333333;
      padding: 0 10px;
      font-size: 12px;
      line-height: 33px;
      height: 33px;
      &::-webkit-input-placeholder {
        color: #333333;
      }
    }
    .el-input__icon {
      line-height: 33px;
    }
    .el-input__suffix {
      display: flex;
      align-items: center;
      right: 10px;
    }
  }
}
</style>
