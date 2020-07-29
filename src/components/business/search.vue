<!--
 * @Descripttion:
 * @Author: xiawenlong
 * @Date: 2020-02-27 12:29:27
 * @LastEditors: chenxiaofan
 * @LastEditTime: 2020-07-16 21:33:38
 -->
<template>
  <div class="search">
    <van-popup
      v-model="visible"
      position="right"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
    >
      <div class="searchBar">
        <div class="searchInput">
          <i class="iconfont iconsousuo"></i>
          <van-form action="#" @submit="debounceSearch">
            <van-field
              v-model="searchValue"
              autofocus
              maxlength="20"
              type="search"
              placeholder="请输入搜索关键词"
              @input="input"
            />
          </van-form>
        </div>
        <span @click="close">取消</span>
      </div>
      <div class="content"></div>
    </van-popup>
  </div>
</template>
<script>
// import goodsList from "~/components/comm/GoodsList";
import { debounce } from "@/utils/util";
export default {
  name: "BSearch",
  data() {
    return {
      searchValue: "",
      visible: false
    };
  },
  computed: {
    debounceSearch() {
      return debounce(this.search);
    }
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    input() {
      if (!this.searchValue) return (this.classList = this.goodsList = "");
    },
    async search() {}
  }
};
</script>
<style lang="less" scoped>
.search {
  .searchBar {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 47px;
    line-height: 47px;
    background-color: #fff;
    padding: 6px 10px;
    border-bottom: 1px solid rgba(243, 243, 243, 1);

    .searchInput {
      flex: 1;
      display: flex;
      align-items: center;
      height: 36px;
      background: rgba(245, 245, 245, 1);
      opacity: 1;
      border-radius: 18px;
      padding-left: 10px;
      padding-right: 8px;
      i {
        font-size: 14px;
        color: #ddd;
      }
      .van-form {
        width: 100%;
      }
      .van-field {
        padding: 0;
        flex: 1;
        display: block;
        box-sizing: border-box;
        border-radius: 18px;
        background: rgba(245, 245, 245, 1);
        border: 0;
        height: 36px;
        padding-left: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 36px;
        color: rgba(190, 194, 203, 1);
      }
      /deep/ .van-field__body {
        border: none;
      }
    }
    span {
      font-size: 14px;
      font-weight: 400;
      color: rgba(128, 131, 138, 1);
      margin-left: 9px;
    }
  }
  .content {
    height: calc(100vh - 47px);
  }
}
</style>
