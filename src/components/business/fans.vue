<template>
  <div class="b-fans">
    <ul class="fans">
      <li v-for="(user, index) in data" :key="index" class="fans-item">
        <img class="avatar" :src="user.avatar" />
        <div class="ceil name">{{ user.name }}</div>
        <div class="button" :class="['fans-' + user.state]" @click="follow(user)">
          {{ user.state === 1 ? "取消关注" : "关注" }}
        </div>
      </li>
    </ul>
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
  data() {
    return {};
  },
  methods: {
    follow(item) {
      this.$set(item, "state", item.state === 1 ? 0 : 1);
    }
  }
};
</script>

<style lang="less" scoped>
.b-fans {
  font-size: 12px;
}
.fans-item {
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.ceil {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.button {
  width: 70px;
  padding: 0;
  height: 25px;
  line-height: 25px;
}
.name {
  text-align: left;
  font-weight: 700;
}
.fans-0 {
  background-color: rgba(109, 117, 241, 1);
}
.fans-1 {
  background-color: rgba(252, 140, 168, 1);
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
