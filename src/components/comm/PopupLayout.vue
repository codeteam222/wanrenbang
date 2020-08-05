<template>
  <div class="c-layout-popup">
    <div class="header">
      <van-icon name="arrow-left" @click="back" />
      {{ title }}
    </div>
    <div class="body">
      <template v-if="tabs.length">
        <van-tabs v-model="activeName" @change="handleClick">
          <van-tab v-for="(tab, index) in tabs" :key="index" :name="tab.name" :title="tab.title"></van-tab>
        </van-tabs>
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    title: {
      type: [String, Array],
      default: ""
    }
  },
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    handleClick(name) {
      this.$emit("change", name);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e4e7ed;
  font-size: 14px;
  width: 100%;
  top: 0;
  left: 0;
  .van-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.body {
  padding-top: 40px;
  min-height: 100vh;
}
/deep/ .van-tabs {
  .van-tabs__wrap {
    height: 25px;
  }
  .van-tab {
    color: #999999;
    font-size: 14px;
  }
  .van-tabs__line {
    background-color: #000;
    height: 1px;
  }
  [class*="van-hairline"]::after {
    border: none;
  }
}
</style>
