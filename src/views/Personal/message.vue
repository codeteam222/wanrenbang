<template>
  <div class="personal-message">
    <c-popup-layout title="消息通知" @back="$router.push({ name: 'Personal' })">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="message-item" v-for="(message, index) in data" :key="index">
          <div class="thumb">
            <img class="avatar" :src="message.logo" alt="" />
          </div>
          <div class="message-info">
            <p class="title">{{ message.msgTitle }}</p>
            <p>
              {{ message.content }}
            </p>
            <p>{{ message.createTime }}</p>
          </div>
        </div>
      </van-list>
    </c-popup-layout>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      data: [],
      params: {
        start: 0,
        size: 10
      },
      loading: false,
      finished: false
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData(params = this.params) {
      this.loading = true;
      this.$fetch
        .get("/appMessage/findAllAppMessage", {
          ...params,
          token: this.token
        })
        .then(({ data }) => {
          this.finished = data.length < this.params.size;
          this.data = data;
          this.loading = false;
        })
        .catch(({ msg }) => {
          this.$notify({ type: "warning", message: msg });
          this.loading = false;
          this.finished = true;
        });
    },
    onLoad() {
      this.getData({
        start: this.params.start + 1
      });
    }
  }
};
</script>

<style lang="less" scoped>
.message-list {
  height: 657px;
  overflow-y: auto;
}
.message-item {
  display: flex;
  justify-items: flex-start;
  padding: 20px 0px;
  background-color: #f7f8fa;
  border-bottom: 1px solid rgb(224, 224, 224);
  .thumb {
    width: 55px;
    height: 55px;
    img {
      width: 40px;
      height: auto;
    }
  }
  .message-info {
    flex: 1;
    text-align: left;
    padding-left: 10px;
    p {
      margin-bottom: 10px;
      font-size: 12px;
      color: #666666;
    }
    .title {
      font-weight: 700;
      font-size: 14px;
    }
  }
}
</style>
