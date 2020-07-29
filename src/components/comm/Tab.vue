<template>
  <div class="c-tab">
    <ul class="tab-list" :class="['layout-' + layout]">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: index === active, ['tab-' + index]: index >= 0 }"
        class="tab-item"
        @click="change(index)"
      >
        {{ tab.label }}
      </li>
    </ul>
    <div class="tab-content">
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
    active: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: "center"
    }
  },
  methods: {
    change(index) {
      this.$emit("update:active", index);
    }
  }
};
</script>

<style lang="less" scoped>
.tab-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 12px;
  background-color: rgb(242, 242, 242);
  color: rgb(182, 182, 182);
  .tab-item {
    width: 100px;
    &.active {
      font-size: 16px;
      color: rgb(109, 117, 241);
      font-weight: 600;
    }
  }
}
</style>
