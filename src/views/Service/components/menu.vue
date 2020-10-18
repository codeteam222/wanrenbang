<template>
  <div class="c-menu">
    <div class="menu-list">
      <div v-for="(item, index) in data" :key="index" class="menu-item" @click="toPage(item)">
        <div class="img"><img :src="item.cls_img_src" alt="" srcset="" /></div>
        <div class="label">{{ item.cls_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toPage(item) {
      this.$router.push({ name: "OtherPage", query: { type: item.c_id } });
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
    margin-bottom: 3px;
  }
}
</style>
