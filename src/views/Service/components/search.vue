<template>
  <div class="service-search">
    <div class="content">
      <div v-show="!isSearch" class="tabs-box">
        <van-tabs v-model="active" @change="tabChange">
          <van-tab title="最新" name="new"></van-tab>
          <van-tab title="最热" name="hot"></van-tab>
          <van-tab title="关注" name="follow"></van-tab>
        </van-tabs>
      </div>
      <van-icon class="search-icon" name="search" color="#CCCCCC" size="16px" @click="handleSearchVisible" />
    </div>
    <b-search ref="search"></b-search>
  </div>
</template>

<script>
import BSearch from "@/components/business/search";
export default {
  components: {
    "b-search": BSearch
  },
  data() {
    return {
      active: "new",
      isSearch: false,
      searchValue: ""
    };
  },
  methods: {
    handleSearchVisible() {
      this.$refs.search.open();
    },
    tabChange(name) {
      this.$emit("change", {
        type: name
      });
    },
    searchChange(value) {
      this.$emit("change", {
        type: name,
        search: value
      });
    }
  }
};
</script>

<style lang="less" scoped>
.service-search {
  height: 40px;
}
.tabs-box {
  width: 150px;
  margin: auto;
}
.content {
  position: relative;
}
.search-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
/deep/ .van-tabs {
  .van-tabs__wrap {
    height: 35px;
  }
  .van-tab {
    color: #999999;
    font-size: 14px;
  }
  .van-tab--active {
    font-weight: 700;
  }
  .van-tabs__line {
    background-color: #000;
    height: 1px;
  }
  [class*="van-hairline"]::after {
    border: none;
  }
}
/deep/ .van-field__body {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}
.file-search-btn {
  vertical-align: middle;
  margin-top: -3px;
}
</style>
