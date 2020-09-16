<template>
  <div class="banner-box">
    <div class="banner" :style="{ 'background-color': bgColor }">
      <!-- <img src="@/assets/img/logo.png" alt="" /> -->
      <!-- <div class="text">{{ text }}</div> -->
    </div>
    <div class="search">
      <el-input v-model="searchValue" placeholder="搜索">
        <template #suffix>
          <i class="el-icon-search" @click="handleSearchVisible"></i>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    link: {
      type: String
    },
    bgColor: {
      type: String
    }
  },
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    handleSearchVisible() {
      // this.$refs.search.open();
    }
  }
};
</script>
<style lang="less" scoped>
.banner-box {
  padding: 10px;
  position: relative;
  margin-bottom: 20px;
}
.banner {
  border-radius: 5px;
  height: 150px;
  padding: 12px;
  background-image: url("~@/assets/img/banner.png");
  background-size: 100% 150px;
  background-repeat: no-repeat;
}
img {
  width: 90px;
}
.text {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
.search {
  position: absolute;
  width: 250px;
  margin: auto;
  margin-bottom: 10px;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
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
