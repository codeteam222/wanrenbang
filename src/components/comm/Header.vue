<template>
  <div class="header">
    <div class="menu-list">
      <div
        class="menu-item"
        v-for="(item, index) in menuList"
        :key="index"
        :class="{ active: index === active, ['item-' + index]: index.toString() }"
        @click="handleClick(item)"
      >
        <span class="label">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      menuList: [
        {
          label: "服务大厅",
          name: "Service"
        },
        {
          label: "圆梦计划",
          name: "Plan"
        },
        {
          label: "个人中心",
          name: "Personal"
        }
      ]
    };
  },
  methods: {
    handleClick(item) {
      this.$router.push({ name: item.name });
    }
  }
};
</script>
<style lang="less" scoped>
.menu-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menu-item {
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    flex: 1;
    width: 33.3%;
    background-color: rgba(204, 204, 204, 1);
    color: #666666;
    &.active {
      font-size: 20px;
      font-weight: 600;
      color: #333333;
      .label {
        position: relative;
        &::before,
        &::after {
          content: "";
          display: inline-block;
          height: 15px;
          width: 2px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        &::before {
          left: -5px;
        }
        &::after {
          right: -5px;
        }
      }
    }
  }
  .item-0 .label {
    &::before {
      background-color: rgb(253, 179, 93);
    }
    &::after {
      background-color: rgb(233, 30, 99);
    }
  }
  .item-1 .label {
    &::before {
      background-color: rgb(233, 30, 99);
    }
    &::after {
      background-color: rgb(90, 185, 99);
    }
  }
  .item-2 .label {
    &::before {
      background-color: rgb(109, 117, 241);
    }
    &::after {
      background-color: rgb(252, 140, 168);
    }
  }
}
</style>
