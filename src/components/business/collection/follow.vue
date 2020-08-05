<template>
  <div class="b-follow">
    <ul class="follow">
      <li v-for="(user, index) in data" :key="index" class="follow-item">
        <img class="avatar" :src="user.avatar" />
        <div class="ceil name">{{ user.name }}</div>
        <div class="button" :class="['follow-' + user.state]" @click="follow(user)">
          {{ user.state === 1 ? "已关注" : "关注" }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          avatar: require("@/assets/img/avatar.jpg"),
          name: "爱吃萝卜的兔子",
          state: 0
        },
        {
          avatar: require("@/assets/img/avatar.jpg"),
          name: "爱吃萝卜的兔子2",
          state: 1
        }
      ]
    };
  },
  methods: {
    follow(item) {
      this.$set(item, "state", item.state === 1 ? 0 : 1);
    }
  }
};
</script>

<style lang="less" scoped>
.b-follow {
  font-size: 12px;
}
.follow-item {
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
  text-align: center;
}
.name {
  text-align: left;
  font-weight: 700;
}
.follow-0 {
  background-color: rgba(90, 185, 99, 1);
}
.follow-1 {
  background-color: rgba(252, 140, 168, 1);
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
